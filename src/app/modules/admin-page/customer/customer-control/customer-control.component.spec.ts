import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerControlComponent } from './customer-control.component';

describe('CusotmerControlComponent', () => {
  let component: CustomerControlComponent;
  let fixture: ComponentFixture<CustomerControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerControlComponent]
    });
    fixture = TestBed.createComponent(CustomerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
