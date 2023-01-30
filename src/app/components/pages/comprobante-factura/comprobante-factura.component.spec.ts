import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteFacturaComponent } from './comprobante-factura.component';

describe('ComprobanteFacturaComponent', () => {
  let component: ComprobanteFacturaComponent;
  let fixture: ComponentFixture<ComprobanteFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobanteFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
