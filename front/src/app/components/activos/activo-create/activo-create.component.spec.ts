import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivoCreateComponent } from './activo-create.component';

describe('ActivoCreateComponent', () => {
  let component: ActivoCreateComponent;
  let fixture: ComponentFixture<ActivoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
