import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerControlComponent } from './banner-control.component';

describe('BannerControlComponent', () => {
  let component: BannerControlComponent;
  let fixture: ComponentFixture<BannerControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerControlComponent]
    });
    fixture = TestBed.createComponent(BannerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
