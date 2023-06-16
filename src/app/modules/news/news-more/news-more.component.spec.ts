import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMoreComponent } from './news-more.component';

describe('NewsMoreComponent', () => {
  let component: NewsMoreComponent;
  let fixture: ComponentFixture<NewsMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsMoreComponent]
    });
    fixture = TestBed.createComponent(NewsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
