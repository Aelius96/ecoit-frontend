import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalCustomersComponent } from './typical-customers.component';

describe('TypicalCustomersComponent', () => {
  let component: TypicalCustomersComponent;
  let fixture: ComponentFixture<TypicalCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalCustomersComponent]
    });
    fixture = TestBed.createComponent(TypicalCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
