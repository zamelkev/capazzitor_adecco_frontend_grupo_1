import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestCardComponent } from './suggest-card.component';

describe('SuggestCardComponent', () => {
  let component: SuggestCardComponent;
  let fixture: ComponentFixture<SuggestCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestCardComponent]
    });
    fixture = TestBed.createComponent(SuggestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
