import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitNewsComponent } from './recruit-news.component';

describe('RecruitNewsComponent', () => {
  let component: RecruitNewsComponent;
  let fixture: ComponentFixture<RecruitNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitNewsComponent]
    });
    fixture = TestBed.createComponent(RecruitNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
