import { Injectable } from '@angular/core';
import { EntityService } from '@core/entity.service';
import { FirebaseService } from '@core/firebase.service';
import { DocumentDto } from '@models/document.model';
import { EntityType } from '@shared/entity/entity.model';
import { cloneDeep, keyBy } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GNode } from './gen-mapper.interface';
import { CSVToJSON } from './resources/csv-to-json';
import { JSONToCSV } from './resources/json-to-csv';
import { TemplateUtils } from './template-utils';
import { Template } from './template.model';
import { TemplateService } from './template.service';

@Injectable()
export class DocumentService {

    constructor(
        private entityService: EntityService,
        private templateService: TemplateService,
        private firebase: FirebaseService
    ) { }

    public getDocumentsByType(type: string): Observable<DocumentDto[]> {
        return this.firebase.getDocumentsByType(type);
    }

    public getDocument(id: string): Observable<DocumentDto> {
        return this.firebase.getDocument(id);
    }

    public updateDocument(document: DocumentDto): Observable<DocumentDto> {
        return this.firebase.updateDocument(document);
    }

    public _getDocumentsByType(type: string, dbFormat?: string): Observable<DocumentDto[]> {
        return this.entityService
            .getAll<DocumentDto>(EntityType.Documents)
            .pipe(map(docs => {
                return docs
                    .filter(doc => doc.type === type)
                    .map(doc => {
                        const template = this.templateService.getTemplate(type);
                        doc.nodes = CSVToJSON(doc.content, template);
                        this.processNodesOnLoad(doc.nodes);
                        return doc;
                    });
            }));
    }

    public create(props: any = {}, template: Template): Observable<DocumentDto> {
        const doc = new DocumentDto({
            title: props.title || 'No name',
            type: template.id,
            content: props.content || TemplateUtils.createInitialCSV(template)
        });

        return this.entityService.create(doc);
    }

    public update(doc: DocumentDto): Observable<DocumentDto> {
        const data = cloneDeep(doc);
        const template = this.templateService.getTemplate(doc.type);
        data.content = JSONToCSV(doc.nodes, template);

        delete data.elements;
        delete data.nodes;
        delete data.createdAt;
        delete data.updatedAt;
        return this.entityService.update(data);
    }

    public remove(document: DocumentDto): Observable<DocumentDto> {
        return this.entityService.delete(document);
    }

    private processNodesOnLoad(nodes: GNode[]): void {
        const byId = keyBy(nodes, (n) => n.id);

        nodes.forEach(node => {
            if (node.parentId) {
                const parent = byId[node.parentId];
                if (parent) {
                    parent.hasChildNodes = true;
                }
            }
        });
    }
}
