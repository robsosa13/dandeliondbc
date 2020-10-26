import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionIndexComponent } from './asignacion-index.component';

describe('AsignacionIndexComponent', () => {
  let component: AsignacionIndexComponent;
  let fixture: ComponentFixture<AsignacionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
