import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:ng-frontend/src/app/views/sign-up/sign-up.component.spec.ts
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent]
    });
    fixture = TestBed.createComponent(SignUpComponent);
========
import { OfferFormComponent } from './offer-form.component';

describe('OfferFormComponent', () => {
  let component: OfferFormComponent;
  let fixture: ComponentFixture<OfferFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferFormComponent]
    });
    fixture = TestBed.createComponent(OfferFormComponent);
>>>>>>>> 303b384 (feature / Adding Modules & Components):ng-frontend/src/app/views/offer-form/offer-form.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
