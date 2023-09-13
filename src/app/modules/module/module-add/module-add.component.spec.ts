import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAddComponent } from './module-add.component';

describe('ModuleAddComponent', () => {
  let component: ModuleAddComponent;
  let fixture: ComponentFixture<ModuleAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleAddComponent]
    });
    fixture = TestBed.createComponent(ModuleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
