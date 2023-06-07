import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorAddComponent } from './navigator-add.component';

describe('NavigatorAddComponent', () => {
  let component: NavigatorAddComponent;
  let fixture: ComponentFixture<NavigatorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatorAddComponent]
    });
    fixture = TestBed.createComponent(NavigatorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
