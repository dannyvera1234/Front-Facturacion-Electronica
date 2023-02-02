import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormaPagoComponent } from './modal-forma-pago.component';

describe('ModalFormaPagoComponent', () => {
  let component: ModalFormaPagoComponent;
  let fixture: ComponentFixture<ModalFormaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormaPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
