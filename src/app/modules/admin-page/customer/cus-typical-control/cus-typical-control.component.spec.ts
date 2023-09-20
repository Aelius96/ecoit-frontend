import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusTypicalControlComponent } from './cus-typical-control.component';

describe('CusTypicalControlComponent', () => {
  let component: CusTypicalControlComponent;
  let fixture: ComponentFixture<CusTypicalControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusTypicalControlComponent]
    });
    fixture = TestBed.createComponent(CusTypicalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
