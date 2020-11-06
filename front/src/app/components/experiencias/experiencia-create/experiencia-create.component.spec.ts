import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaCreateComponent } from './experiencia-create.component';

describe('ExperienciaCreateComponent', () => {
  let component: ExperienciaCreateComponent;
  let fixture: ComponentFixture<ExperienciaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
