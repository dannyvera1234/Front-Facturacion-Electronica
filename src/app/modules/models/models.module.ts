import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCuentasComponent } from './modal-cuentas/modal-cuentas.component';
import { ModalPuntoEmisionComponent } from './modal-punto-emision/modal-punto-emision.component';
import { ModalPlanesComponent } from './modal-planes/modal-planes.component';
import { ModalProductosComponent } from './modal-productos/modal-productos.component';
import { ModalFormaPagoComponent } from './modal-forma-pago/modal-forma-pago.component';
import { ModalEstablecimientoComponent } from './modal-establecimiento/modal-establecimiento.component';
import { ModalLoadersComponent } from './modal-loaders/modal-loaders.component';

@NgModule({
  declarations: [
    ModalCuentasComponent,
    ModalPuntoEmisionComponent,
    ModalPlanesComponent,
    ModalProductosComponent,
    ModalFormaPagoComponent,
    ModalEstablecimientoComponent,
    ModalLoadersComponent,
  ],
  imports: [
    CommonModule,
   
  ],
})
export class ModelsModule {}
