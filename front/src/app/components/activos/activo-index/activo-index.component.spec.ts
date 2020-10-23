import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivoIndexComponent } from './activo-index.component';

describe('ActivoIndexComponent', () => {
  let component: ActivoIndexComponent;
  let fixture: ComponentFixture<ActivoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
