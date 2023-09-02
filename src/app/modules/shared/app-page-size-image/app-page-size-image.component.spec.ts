import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageSizeImageComponent } from './app-page-size-image.component';

describe('AppPageSizeImageComponent', () => {
  let component: AppPageSizeImageComponent;
  let fixture: ComponentFixture<AppPageSizeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPageSizeImageComponent]
    });
    fixture = TestBed.createComponent(AppPageSizeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
