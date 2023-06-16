import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitMoreComponent } from './recruit-more.component';

describe('RecruitMoreComponent', () => {
  let component: RecruitMoreComponent;
  let fixture: ComponentFixture<RecruitMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitMoreComponent]
    });
    fixture = TestBed.createComponent(RecruitMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
