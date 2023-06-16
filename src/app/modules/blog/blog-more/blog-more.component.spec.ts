import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMoreComponent } from './blog-more.component';

describe('BlogMoreComponent', () => {
  let component: BlogMoreComponent;
  let fixture: ComponentFixture<BlogMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogMoreComponent]
    });
    fixture = TestBed.createComponent(BlogMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
