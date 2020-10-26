import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCreateComponent } from './personal-create.component';

describe('PersonalCreateComponent', () => {
  let component: PersonalCreateComponent;
  let fixture: ComponentFixture<PersonalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
