import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDefenseComponent } from './security-defense.component';

describe('SecurityDefenseComponent', () => {
  let component: SecurityDefenseComponent;
  let fixture: ComponentFixture<SecurityDefenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityDefenseComponent]
    });
    fixture = TestBed.createComponent(SecurityDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
