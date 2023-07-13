import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavictrolTestComponent } from './navictrol-test.component';

describe('NavictrolTestComponent', () => {
  let component: NavictrolTestComponent;
  let fixture: ComponentFixture<NavictrolTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavictrolTestComponent]
    });
    fixture = TestBed.createComponent(NavictrolTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
