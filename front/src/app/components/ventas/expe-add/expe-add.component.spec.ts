import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeAddComponent } from './expe-add.component';

describe('ExpeAddComponent', () => {
  let component: ExpeAddComponent;
  let fixture: ComponentFixture<ExpeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
