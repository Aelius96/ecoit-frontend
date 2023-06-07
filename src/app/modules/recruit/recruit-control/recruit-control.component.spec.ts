import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitControlComponent } from './recruit-control.component';

describe('RecuitControlComponent', () => {
  let component: RecruitControlComponent;
  let fixture: ComponentFixture<RecruitControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitControlComponent]
    });
    fixture = TestBed.createComponent(RecruitControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
