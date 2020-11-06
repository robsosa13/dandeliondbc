import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulanteCreateComponent } from './postulante-create.component';

describe('PostulanteCreateComponent', () => {
  let component: PostulanteCreateComponent;
  let fixture: ComponentFixture<PostulanteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulanteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
