import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaAllDetailsComponent } from './factura-all-details.component';

describe('FacturaAllDetailsComponent', () => {
  let component: FacturaAllDetailsComponent;
  let fixture: ComponentFixture<FacturaAllDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaAllDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
