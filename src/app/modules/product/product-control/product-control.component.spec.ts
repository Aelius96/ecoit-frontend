import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductControlComponent } from './product-control.component';

describe('ProductControlComponent', () => {
  let component: ProductControlComponent;
  let fixture: ComponentFixture<ProductControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductControlComponent]
    });
    fixture = TestBed.createComponent(ProductControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
