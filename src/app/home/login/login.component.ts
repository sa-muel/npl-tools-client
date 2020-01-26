import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/authentication.service';
import { htmlInputTypes, ValidationUtils } from '@shared/validationUtils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public showError: boolean;
    public isLoading: boolean;

    @ViewChild('emailField', { static: true })
    public emailField: ElementRef;

    @ViewChild('passwordField', { static: true })
    public passwordField: ElementRef;

    constructor(
        private fbAuth: AngularFireAuth,
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    public ngOnInit(): void {
        this._createForm();
    }

    public onSubmit(event: Event): void {
        event.preventDefault();
        this.showError = false;

        this.checkAutofill();

        if (this.form.valid) {
            this.isLoading = true;
            this.authService.authenticate(this.form.value).subscribe(
                success => {
                    this.isLoading = false;
                    this.router.navigate(['']);
                },
                error => {
                    this.isLoading = false;
                    this.showError = true;
                }
            );
        }
    }

    // This is a hack around a current Chrome issue, not firing events after Chrome AutoFill, on IOS
    private checkAutofill(): void {
        const email = this.emailField.nativeElement.value;
        const password = this.passwordField.nativeElement.value;

        if (email && !this.form.get('email').value) {
            this.form.get('email').setValue(email);
            this.form.get('email').updateValueAndValidity();
        }

        if (password && !this.form.get('password').value) {
            this.form.get('password').setValue(password);
            this.form.get('password').updateValueAndValidity();
        }
    }

    private _createForm(): void {
        this.form = new FormGroup({
            email: new FormControl('', ValidationUtils.getDefaultInputValidators(htmlInputTypes.email, true)),
            password: new FormControl('', [Validators.required])
        });
    }
}
