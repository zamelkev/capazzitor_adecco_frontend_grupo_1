import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferItemListAdminComponent } from './offer-item-list-admin.component';

describe('OfferItemComponent', () => {
  let component: OfferItemListAdminComponent;
  let fixture: ComponentFixture<OfferItemListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferItemListAdminComponent]
    });
    fixture = TestBed.createComponent(OfferItemListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
