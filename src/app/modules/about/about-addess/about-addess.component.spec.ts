import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAddessComponent } from './about-addess.component';

describe('AboutAddessComponent', () => {
  let component: AboutAddessComponent;
  let fixture: ComponentFixture<AboutAddessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAddessComponent]
    });
    fixture = TestBed.createComponent(AboutAddessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
