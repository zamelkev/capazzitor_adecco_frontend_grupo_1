import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:ng-frontend/src/app/views/sign-in/sign-in.component.spec.ts
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent]
    });
    fixture = TestBed.createComponent(SignInComponent);
========
import { OfferListComponent } from './offer-list.component';

describe('OfferListComponent', () => {
  let component: OfferListComponent;
  let fixture: ComponentFixture<OfferListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferListComponent]
    });
    fixture = TestBed.createComponent(OfferListComponent);
>>>>>>>> 303b384 (feature / Adding Modules & Components):ng-frontend/src/app/views/offer-list/offer-list.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
