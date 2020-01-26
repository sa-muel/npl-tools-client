import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityService } from '@core/entity.service';
import { Unsubscribable } from '@core/Unsubscribable';
import { confirmPasswordValidator } from '@shared/confirm-password.validator';
import { User } from '@shared/entity/user.model';
import { htmlInputTypes, ValidationUtils } from '@shared/validationUtils';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-detail-form',
    templateUrl: './detail-form.component.html',
    styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent extends Unsubscribable implements OnInit {
    public isSaving: boolean;
    public form: FormGroup;

    @Input()
    public model: User;

    @Output()
    public onSubmit: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private fb: FormBuilder,
        private entityService: EntityService,
    ) { super(); }

    public ngOnInit(): void {
        this.form = this.fb.group({
            displayName: [this.model.displayName, ValidationUtils.getDefaultInputValidators(htmlInputTypes.text).concat(Validators.minLength(4))],
            email: [this.model.email, ValidationUtils.getDefaultInputValidators(htmlInputTypes.email, true)],
            password: [null],
            confirm: [null],
        });

        // Temp disabled unitl logout issue is fixed
        // this.form.get('email').disable();

        this.form.controls.password.setValidators([Validators.minLength(6)]);

        this.form.controls.password.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                if (result) {
                    this.form.controls.confirm.setValidators([
                        Validators.required, Validators.minLength(6), confirmPasswordValidator('password')
                    ]);
                } else {
                    this.form.controls.confirm.setValidators([]);
                }

                this.form.controls.confirm.updateValueAndValidity();
            });
    }

    public submit(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        const value = this.form.value;

        if (!this.form.valid) {
            return;
        }

        if (this.isSaving) {
            return;
        }

        this.isSaving = true;

        value.username = value.username || null;
        value.uid = this.model.uid;

        delete value.confirm;

        if (!value.password) {
            delete value.password;
        }

        this.entityService.update(value).subscribe(
            success => {
                this.isSaving = false;
                this.onSubmit.emit();
            },
            error => {
                this.isSaving = false;

                if (error.error.errorCode === 40904) {
                    this.form.get('username').setErrors({ usernameInUse: true });
                }

                if (error.error.errorCode === 40903) {
                    this.form.get('email').setErrors({ emailInUse: true });
                }
            }
        );
    }
}
