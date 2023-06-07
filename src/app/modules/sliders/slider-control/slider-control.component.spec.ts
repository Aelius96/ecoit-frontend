import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderControlComponent } from './slider-control.component';

describe('SliderControlComponent', () => {
  let component: SliderControlComponent;
  let fixture: ComponentFixture<SliderControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderControlComponent]
    });
    fixture = TestBed.createComponent(SliderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
