import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileInputDialogComponent } from './file-input-dialog/file-input-dialog.component';
import { JoinListPipe } from './join-list.pipe';
import { LocalePipe } from './locale.pipe';
import { MaterialModule } from './material/material.module';
import { NplLogoComponent } from './npl-logo/npl-logo.component';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';
import { SortByDatePipe } from './sort-by-date.pipe';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
        SidenavToggleComponent,
        SortByDatePipe,
        FileInputDialogComponent,
        NplLogoComponent,
        LocalePipe,
        JoinListPipe,
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        SidenavToggleComponent,
        SortByDatePipe,
        FileInputDialogComponent,
        NplLogoComponent,
        LocalePipe,
        JoinListPipe
    ],
    entryComponents: [
        FileInputDialogComponent
    ]
})
export class SharedModule { }