import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Device } from '@core/platform';
import { DocumentDto } from '@models/document.model';
import { GMTemplate } from '@templates';
import { CreateDocumentDialogComponent } from '../dialogs/create-document-dialog/create-document-dialog.component';
import { GenMapperService } from '../gen-mapper.service';
import { GmService } from '../gm.service';


@Component({
    selector: 'app-map-sidenav',
    templateUrl: './map-sidenav.component.html',
    styleUrls: ['./map-sidenav.component.scss']
})
export class MapSidenavComponent {

    @Input()
    public documents: DocumentDto[];

    @Input()
    public document: DocumentDto;

    @Input()
    public template: GMTemplate;

    constructor(
        private gmService: GmService,
        private genMapper: GenMapperService,
        private dialog: MatDialog,
        private router: Router,
        private drawer: MatDrawer,
    ) { }

    public onCreateDocument(): void {

        this.dialog.open(CreateDocumentDialogComponent)
            .afterClosed()
            .subscribe(result => {
                if (result) {
                    this.createDocument(result);
                }
            });
    }

    public onSelectDocument(doc: DocumentDto): void {
        this.router.navigate(['/gen-mapper', this.template.id, doc.id]);

        if (Device.isHandHeld) {
            this.drawer.close();
        }
    }

    public createDocument(doc: DocumentDto): void {
        doc = new DocumentDto(doc);
        doc.type = this.template.id;
        this.gmService.createDocument(doc).subscribe(result => {
            this.router.navigate(['/gen-mapper', this.template.id, result.id]);
            this.gmService.reloadDocuments();
        });
    }
}
