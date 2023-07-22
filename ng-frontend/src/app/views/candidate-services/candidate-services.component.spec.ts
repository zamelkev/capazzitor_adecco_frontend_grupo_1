import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateServicesComponent } from './candidate-services.component';

describe('CandidateServicesComponent', () => {
  let component: CandidateServicesComponent;
  let fixture: ComponentFixture<CandidateServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateServicesComponent]
    });
    fixture = TestBed.createComponent(CandidateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
