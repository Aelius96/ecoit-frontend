import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorControlComponent } from './navigator-control.component';

describe('NavigatorControlComponent', () => {
  let component: NavigatorControlComponent;
  let fixture: ComponentFixture<NavigatorControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatorControlComponent]
    });
    fixture = TestBed.createComponent(NavigatorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
