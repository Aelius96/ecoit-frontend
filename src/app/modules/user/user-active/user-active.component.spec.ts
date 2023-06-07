import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActiveComponent } from './user-active.component';

describe('UserActiveComponent', () => {
  let component: UserActiveComponent;
  let fixture: ComponentFixture<UserActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserActiveComponent]
    });
    fixture = TestBed.createComponent(UserActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
