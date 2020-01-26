import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DocumentDto } from '@models/document.model';
import { NodeDto } from '@models/node.model';
import { firestore, User } from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Template } from './template.model';
@Injectable()
export class GmService {

    private _selectedDocument = new BehaviorSubject<DocumentDto>(null);
    private _documents = new BehaviorSubject<DocumentDto[]>([]);
    private _template = new BehaviorSubject<Template>(null);
    private _node = new BehaviorSubject<NodeDto>(null);

    constructor(
        private fb: AngularFirestore,
        private fbAuth: AngularFireAuth
    ) { }

    public get timestamp(): firestore.FieldValue {
        return firestore.FieldValue.serverTimestamp();
    }

    public setDocuments(documents: DocumentDto[]): void {
        this._documents.next(documents);
    }

    public setSelectedDocument(document: DocumentDto): void {
        this._selectedDocument.next(document);
    }

    public setNode(node: NodeDto): void {
        this._node.next(node);
    }

    public setTemplate(template: Template): void {
        this._template.next(template);
    }

    public onSelectedDocumentChange(): Observable<DocumentDto> {
        return this._selectedDocument.asObservable();
    }

    public onDocumentsChange(): Observable<DocumentDto[]> {
        return this._documents.asObservable();
    }

    public onNodeChange(): Observable<NodeDto> {
        return this._node.asObservable();
    }

    public onTemplateChange(): Observable<Template> {
        return this._template.asObservable();
    }

    public loadDocumentsByType(type: string): Observable<DocumentDto[]> {
        return this.getUser((user) =>
            this.fb.collection('documents', r => r
                .where('owners', 'array-contains', user.uid)
                .where('type', '==', type)
            ).get().pipe(map(response => {
                return response.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return new DocumentDto({ id, ...data });
                })
            }))
        );
    }

    public reloadDocuments() {
        const template = this._template.getValue();
        this.loadDocumentsByType(template.id).subscribe(result => {
            this.setDocuments(result);
        });
    }

    public loadDocument(id: string): AngularFirestoreDocument {
        return this.fb.collection('documents').doc(id);
    }

    public createDocument(document: DocumentDto): Observable<DocumentDto> {

        const obj = document.toObject() as any;
        delete obj.entityType;
        delete obj.content;

        obj.id = this.fb.createId();
        obj.createdAt = this.timestamp;
        obj.updatedAt = this.timestamp;
        obj.nodes = [
            {
                id: this.fb.createId(),
                name: 'Initial Group',
                parentId: null
            }
        ];

        return new Observable(o => {
            this.fb.collection('documents').doc(obj.id).set(obj).then(
                success => {
                    o.next(obj);
                    o.complete();
                },
                error => {
                    o.error(error);
                    o.complete();
                }
            );
        });
    }

    private getUser<T>(callback: (value: User, index: number) => Observable<T>): Observable<T> {
        return this.fbAuth.user
            .pipe(take(1))
            .pipe(switchMap(callback));
    }
}
