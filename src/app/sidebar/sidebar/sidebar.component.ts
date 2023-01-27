import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    
  }

  isLogged = false;
  isAdmin = false;
  userName="";
  nombreEmisor="";

  // constructor(private tokenService: TokenService,
    
    // private router:Router,
    // private emisorService: DatosEmisorService,
    // private serviceToastr: ToastrService) { }
  // ngOnInit(): void {

  //   this.isAdmin = this.tokenService.isAdmin();
  //   this.isLogged = this.tokenService.isLogged();
  //   this.userName = this.tokenService.getRuc() || "";
  //   this.nombreEmisor = this.tokenService.getUserName() || "";

  // }

  // onLogOut(): void {
  //   this.tokenService.logOut();   
  //   this.serviceToastr.success("Sesión cerrada con exito", "",
  //   {
  //     closeButton:true,
  //     timeOut: 3000,
  //   })
  // }

  // clickFactura(){

  //       // Obtener ruc del usuario actual, esete ruc viene en el token
  //       let ruc = this.tokenService.getRuc();
  //       this.emisorService.buscarIdEmisorPorRuc(ruc).subscribe(idData => {
         
  //         if (idData>0){

  //           this.router.navigate(["/factura"])
  //         }else {
  //           Swal.fire(
  //             'Mensaje del sistema',
  //             'Para poder generar comprobantes, primero debe registrar sus datos en la opción <b>Emisor<b> ',
  //             'warning'
  //           )
  //         }
  //       })
   


  // }
}
