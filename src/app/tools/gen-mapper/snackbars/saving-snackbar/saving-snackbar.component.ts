import { Component, OnInit } from '@angular/core';
import { MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material';

export class SavingSnackBarConfig extends MatSnackBarConfig {
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    panelClass = 'white-snack-bar'
}

@Component({
    selector: 'app-saving-snackbar',
    templateUrl: './saving-snackbar.component.html',
    styleUrls: ['./saving-snackbar.component.scss']
})
export class SavingSnackbarComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
}
