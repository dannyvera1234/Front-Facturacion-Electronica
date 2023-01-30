import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { LogiFormComponent } from './components/auth/logi-form/logi-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { ListaProductosComponent } from './components/pages/lista-productos/lista-productos.component';
import { DatosEmisorComponent } from './components/pages/datos-emisor/datos-emisor.component';
import { ListaClientesComponent } from './components/pages/lista-clientes/lista-clientes.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { ComprobanteFacturaComponent } from './components/pages/comprobante-factura/comprobante-factura.component';
import { AdmiPlanesComponent } from './components/pages/admi-planes/admi-planes.component';
import { AdmiCuentasComponent } from './components/pages/admi-cuentas/admi-cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogiFormComponent,
    RegisterFormComponent,
    ListaProductosComponent,
    DatosEmisorComponent,
    ListaClientesComponent,
    MenuComponent,
    ComprobanteFacturaComponent,
    AdmiPlanesComponent,
    AdmiCuentasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
