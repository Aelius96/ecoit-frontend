import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsControlComponent } from './albums-control.component';

describe('AlbumsControlComponent', () => {
  let component: AlbumsControlComponent;
  let fixture: ComponentFixture<AlbumsControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsControlComponent]
    });
    fixture = TestBed.createComponent(AlbumsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
