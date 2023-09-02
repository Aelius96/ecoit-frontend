import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsControlComponent } from './news-control.component';

describe('NewsControlComponent', () => {
  let component: NewsControlComponent;
  let fixture: ComponentFixture<NewsControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsControlComponent]
    });
    fixture = TestBed.createComponent(NewsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
