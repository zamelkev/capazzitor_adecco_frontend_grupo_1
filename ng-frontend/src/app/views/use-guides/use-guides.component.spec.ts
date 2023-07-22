import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseGuidesComponent } from './use-guides.component';

describe('UseGuidesComponent', () => {
  let component: UseGuidesComponent;
  let fixture: ComponentFixture<UseGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseGuidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
