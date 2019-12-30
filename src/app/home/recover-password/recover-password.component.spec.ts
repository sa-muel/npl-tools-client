import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordComponent } from './recover-password.component';

xdescribe('RecoverPasswordComponent', () => {
    let component: RecoverPasswordComponent;
    let fixture: ComponentFixture<RecoverPasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecoverPasswordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecoverPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});