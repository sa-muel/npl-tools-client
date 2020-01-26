import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@core/authentication.service';
import { LocaleService } from '@core/locale.service';
import { Unsubscribable } from '@core/Unsubscribable';
import { DocumentDto } from '@models/document.model';
import { takeUntil } from 'rxjs/operators';
import { GenMapperView } from '../gen-mapper-view.enum';
import { GNode } from '../gen-mapper.interface';
import { GenMapperService } from '../gen-mapper.service';
import { GmService } from '../gm.service';
import { NodeClipboardService } from '../node-clipboard.service';
import { Template } from '../template.model';
import { TemplateService } from '../template.service';

@Component({
    selector: 'app-gen-mapper-container',
    templateUrl: './gen-mapper-container.component.html',
    styleUrls: ['./gen-mapper-container.component.scss'],
    providers: [
        GmService
    ]
})
export class GenMapperContainerComponent extends Unsubscribable implements OnInit, OnDestroy {
    public documents: DocumentDto[];
    public document: DocumentDto;
    public template: Template;
    public isAuthenticated: boolean;
    public node: GNode;
    public view: GenMapperView;
    public viewType = GenMapperView;

    constructor(
        private genMapper: GenMapperService,
        private gmService: GmService,
        private authService: AuthenticationService,
        private nodeClipboard: NodeClipboardService,
        private localeService: LocaleService,
        private route: ActivatedRoute,
        private templateService: TemplateService,
        private fb: AngularFirestore
    ) { super(); }

    public ngOnInit(): void {
        this.isAuthenticated = this.authService.isAuthenticated();

        const templateId = this.route.snapshot.params.templateId;
        const template = this.templateService.getTemplate(templateId);
        this.gmService.setTemplate(template);

        this.gmService.loadDocumentsByType(template.id).subscribe(result => {
            this.gmService.setDocuments(result);
        });

        this.gmService.onSelectedDocumentChange()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.document = result;
            });

        this.gmService.onDocumentsChange()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.documents = result;
            });

        this.gmService.onTemplateChange()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.template = result;
            });

        // this.genMapper.getDocument()
        //     .pipe(takeUntil(this.unsubscribe))
        //     .subscribe(document => {
        //         this.document = document;
        //     });

        // this.genMapper.getConfig()
        //     .pipe(takeUntil(this.unsubscribe))
        //     .subscribe(config => {
        //         this.template = config.template;
        //         this.documents = config.documents;
        //     });

        let firstCall = false;
        this.localeService.get()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((result) => {
                if (firstCall) {
                    window.location.reload();
                } else {
                    firstCall = true;
                }
            });
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        this.genMapper.setDocument(null);
        this.nodeClipboard.set(null);
    }
}
