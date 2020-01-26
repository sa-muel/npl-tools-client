import { Injectable } from '@angular/core';
import { DocumentDto } from '@models/document.model';
import { saveAs } from 'file-saver';
import { JSONToCSV } from '../tools/gen-mapper/resources/json-to-csv';
import { TemplateService } from '../tools/gen-mapper/template.service';


@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    constructor(
        private templateService: TemplateService
    ) { }

    public downloadDocument(doc: DocumentDto): void {
        const template = this.templateService.getTemplate(doc.type);
        const content = JSONToCSV(doc.nodes, template);
        this.downloadCSV(content, doc.title);
    }

    public downloadCSV(content: string, title: string): void {
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, title + '.csv');
    }
}
