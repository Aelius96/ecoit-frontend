import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberHomeComponent } from './number-home.component';

describe('NumberHomeComponent', () => {
  let component: NumberHomeComponent;
  let fixture: ComponentFixture<NumberHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberHomeComponent]
    });
    fixture = TestBed.createComponent(NumberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
