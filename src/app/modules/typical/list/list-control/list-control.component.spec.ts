import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControlComponent } from './list-control.component';

describe('ListControlComponent', () => {
  let component: ListControlComponent;
  let fixture: ComponentFixture<ListControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListControlComponent]
    });
    fixture = TestBed.createComponent(ListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
