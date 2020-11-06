import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexExperienciaComponent } from './index-experiencia.component';

describe('IndexExperienciaComponent', () => {
  let component: IndexExperienciaComponent;
  let fixture: ComponentFixture<IndexExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
