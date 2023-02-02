import { MenuComponent } from './components/pages/menu/menu.component';
import { LogiFormComponent } from './components/auth/logi-form/logi-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { AdmiCuentasComponent } from './components/pages/admi-cuentas/admi-cuentas.component';
import { AdmiPlanesComponent } from './components/pages/admi-planes/admi-planes.component';
import { ComprobanteFacturaComponent } from './components/pages/comprobante-factura/comprobante-factura.component';
import { DatosEmisorComponent } from './components/pages/datos-emisor/datos-emisor.component';
import { ListaClientesComponent } from './components/pages/lista-clientes/lista-clientes.component';
import { ListaProductosComponent } from './components/pages/lista-productos/lista-productos.component';
import { NoutFoundPageComponent } from './components/pages/nout-found-page/nout-found-page.component';



//ROUTNG 


const routes: Routes = [
  
  { path: '', component: LogiFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'home', component: MenuComponent },
  { path: 'cuentas', component: AdmiCuentasComponent },
  { path: 'planes', component: AdmiPlanesComponent },
  { path: 'factura', component: ComprobanteFacturaComponent },
  { path: 'emisor', component: DatosEmisorComponent },
  { path: 'cliente', component: ListaClientesComponent },
  { path: 'producto', component: ListaProductosComponent },
  { path: '**', component: NoutFoundPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
