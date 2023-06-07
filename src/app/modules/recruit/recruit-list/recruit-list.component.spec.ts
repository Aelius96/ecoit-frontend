import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitListComponent } from './recruit-list.component';

describe('RecruitListComponent', () => {
  let component: RecruitListComponent;
  let fixture: ComponentFixture<RecruitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitListComponent]
    });
    fixture = TestBed.createComponent(RecruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
