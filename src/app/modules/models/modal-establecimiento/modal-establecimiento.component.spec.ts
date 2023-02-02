import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstablecimientoComponent } from './modal-establecimiento.component';

describe('ModalEstablecimientoComponent', () => {
  let component: ModalEstablecimientoComponent;
  let fixture: ComponentFixture<ModalEstablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEstablecimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
