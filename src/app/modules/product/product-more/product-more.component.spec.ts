import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMoreComponent } from './product-more.component';

describe('ProductMoreComponent', () => {
  let component: ProductMoreComponent;
  let fixture: ComponentFixture<ProductMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMoreComponent]
    });
    fixture = TestBed.createComponent(ProductMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
