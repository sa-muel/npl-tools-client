import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentDto } from '@models/document.model';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    constructor(
        private db: AngularFirestore
    ) { }

    public get timestamp(): firestore.FieldValue {
        return firestore.FieldValue.serverTimestamp();
    }

    public getDocumentsByType(type: string): Observable<DocumentDto[]> {
        return this.db.collection('documents', r => r.where('type', '==', type)).get().pipe(map(response => {
            return response.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return new DocumentDto({ id, ...data });
            })
        }));
    }

    public getDocument(id: string): Observable<DocumentDto> {
        return this.db.collection('documents').doc(id).get().pipe(map(doc => {
            const data = doc.data();
            const id = data.id;
            return new DocumentDto({ id, ...data });
        }));
    }

    public updateDocument(document: DocumentDto): Observable<DocumentDto> {
        return new Observable(obs => {
            this.db.doc('documents/' + document.id)
                .snapshotChanges().pipe(take(1), tap()).toPromise()
                .then((res) => res.payload.ref.update(Object.assign({}, document)))
                .then(
                    success => {
                        obs.next();
                        obs.complete();
                    },
                    error => {
                        obs.error(error);
                        obs.complete();
                    }
                );
        })
    }
}
