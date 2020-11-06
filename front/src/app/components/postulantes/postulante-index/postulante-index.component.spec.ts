import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulanteIndexComponent } from './postulante-index.component';

describe('PostulanteIndexComponent', () => {
  let component: PostulanteIndexComponent;
  let fixture: ComponentFixture<PostulanteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulanteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulanteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
