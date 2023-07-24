import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowadaysComponent } from './nowadays.component';

describe('NowadaysComponent', () => {
  let component: NowadaysComponent;
  let fixture: ComponentFixture<NowadaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowadaysComponent]
    });
    fixture = TestBed.createComponent(NowadaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
