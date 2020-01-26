import { Injectable } from '@angular/core';
import { AuthenticationService } from '@core/authentication.service';
import { DocumentDto } from '@models/document.model';
import { Entity } from '@shared/entity/entity.model';
import { assign, groupBy } from 'lodash';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delayWhen, map, tap } from 'rxjs/operators';
import { DocumentService } from './document.service';
import { GNode } from './gen-mapper.interface';
import { CSVToJSON } from './resources/csv-to-json';
import { JSONToCSV } from './resources/json-to-csv';
import { TemplateUtils } from './template-utils';
import { Template } from './template.model';

const storageKey = 'offline-locall-save-';

export interface GenMapperConfig {
    documents: DocumentDto[];
    template: Template;
}

@Injectable()
export class GenMapperService {
    private _config: BehaviorSubject<GenMapperConfig> = new BehaviorSubject({} as GenMapperConfig);
    private _document: BehaviorSubject<DocumentDto> = new BehaviorSubject(null);
    private _node: BehaviorSubject<GNode> = new BehaviorSubject(null);

    constructor(
        private authService: AuthenticationService,
        private documentService: DocumentService
    ) { }

    public getConfig(): Observable<GenMapperConfig> {
        return this._config.asObservable();
    }

    public getDocument(): Observable<DocumentDto> {
        return this._document.asObservable();
    }

    public getNode(): Observable<GNode> {
        return this._node.asObservable();
    }

    public setConfig(config: GenMapperConfig): void {
        this._config.next(config);
    }

    public setDocument(document: DocumentDto): void {
        if (document) {
            this.updateDocumentNodes(document);
        }

        this._document.next(document);
    }

    public setNode(node: GNode): void {
        this._node.next(node);
    }

    public loadFromResolver(template: Template): Observable<GenMapperConfig> {
        return this.load(template).pipe(map(() => this._config.getValue()));
    }

    public load(template: Template): Observable<DocumentDto[]> {

        if (!this.authService.isAuthenticated()) {
            return this.loadFromLocalStorage(template);
        }

        return this.documentService.getDocumentsByType(template.id)
            .pipe(
                tap((docs) => {
                    const config = this._config.getValue();
                    config.documents = docs;
                    config.template = template;
                    this.setConfig(config);
                })
            );
    }

    public loadFromLocalStorage(template: Template): Observable<DocumentDto[]> {
        const local = localStorage.getItem(storageKey + template.name);
        let document: DocumentDto;

        if (local) {
            const json = JSON.parse(local);

            // For backwards compatibility
            if (json.format) { json.type = json.format; }

            document = new DocumentDto(json);
        } else {
            document = new DocumentDto({ type: template.id, id: Entity.uuid() });
        }

        if (!document.content) {
            document.content = TemplateUtils.createInitialCSV(template);
        }

        // Patch churchCirclesOkc
        if (document.type === 'churchCirclesOkc') {
            document.type = 'churchCircles12';
        }

        document.nodes = CSVToJSON(document.content, template);

        const config = this._config.getValue();
        config.documents = [document];
        config.template = template;
        this.setConfig(config);

        return of(config.documents);
    }

    public createDocument(value: { content?: string, title?: string } = {}): Observable<DocumentDto> {
        const config = this._config.getValue();

        const doc = new DocumentDto({
            id: Entity.uuid(),
            title: value.title || 'No name',
            type: config.template.id,
            content: value.content || TemplateUtils.createInitialCSV(config.template)
        });

        if (!this.authService.isAuthenticated()) {
            return this.updateLocalStorage(doc)
                .pipe(
                    delayWhen(() => this.load(config.template))
                );
        }

        return this.documentService.create(doc, config.template)
            .pipe(
                delayWhen(() => this.load(config.template))
            );
    }

    public updateDocument(doc: DocumentDto): Observable<DocumentDto> {
        return this.documentService.updateDocument(doc);
    }

    public _updateDocument(doc: DocumentDto): Observable<DocumentDto> {
        if (!this.authService.isAuthenticated()) {
            return this.updateLocalStorage(doc);
        }

        return this.documentService.update(doc).pipe(tap(() => {
            const list = this._config.getValue().documents;
            const found = list.find(n => n.id === doc.id);
            if (found) {
                assign(found, doc);
            }
        }));
    }

    public updateLocalStorage(doc: DocumentDto): Observable<DocumentDto> {
        const config = this._config.getValue();
        doc.id = 'local';

        // If nodes, then replace content with current nodes converted to CSV
        if (doc.nodes && doc.nodes.length) {
            doc.content = JSONToCSV(doc.nodes, config.template);
        }

        localStorage.setItem(storageKey + config.template.name, JSON.stringify(doc));
        return of(doc);
    }

    public removeDocument(doc: DocumentDto): Observable<DocumentDto> {
        const config = this._config.getValue();

        if (!this.authService.isAuthenticated()) {
            return this.removeLocalDocument(doc)
                .pipe(
                    delayWhen(() => this.load(config.template)),
                    tap(() => this._document.next(null))
                );
        }

        return this.documentService.remove(doc)
            .pipe(
                delayWhen(() => this.load(config.template)),
                tap(() => this._document.next(null))
            );
    }

    public removeLocalDocument(doc: DocumentDto): Observable<DocumentDto> {
        const config = this._config.getValue();
        localStorage.removeItem(storageKey + config.template.id);
        return of(doc);
    }

    public hasLocalDocument(): boolean {
        const config = this._config.getValue();
        return !!localStorage.getItem(storageKey + config.template.id);
    }

    public updateDocumentNodes(doc: DocumentDto): void {
        const byId = groupBy(doc.nodes, (n) => n.id);

        doc.nodes.forEach(node => {
            if (node.newGeneration) {
                node.gen = getParentGenCount(node);
            }
        });

        function getParentGenCount(node: GNode): number {
            let depth = 1;
            let parent: GNode;

            if (!node.parentId) {
                return depth;
            }

            parent = byId[node.parentId][0];

            while (parent) {
                if (parent.newGeneration) {
                    depth++;
                }
                parent = byId[parent.parentId] && byId[parent.parentId][0];
            }

            return depth;
        }
    }
}
