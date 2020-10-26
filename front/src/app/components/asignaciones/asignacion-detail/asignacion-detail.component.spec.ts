import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDetailComponent } from './asignacion-detail.component';

describe('AsignacionDetailComponent', () => {
  let component: AsignacionDetailComponent;
  let fixture: ComponentFixture<AsignacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
