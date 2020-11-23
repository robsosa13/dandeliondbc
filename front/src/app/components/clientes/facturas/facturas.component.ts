import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { UserService } from 'src/app/services/user.service';
import { ProductoService } from 'src/app/services/producto.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DetalleFacturaCliente } from "../../../models/DetalleFacturaCliente";
import { FacturaCliente } from "../../../models/FacturaCliente";
import { facturaClienteService } from 'src/app/services/facturaCliente.service';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  public id;
  public cliente: [];
  public detalle_venta;
  public facturas;
  public identity;
  constructor(private _route: ActivatedRoute,
    private _clienteService: ClienteService,
    private _userService: UserService,
    private _clienteFacturaService: facturaClienteService,

    private _router: Router) {   this.identity = this._userService.getIdentity();}

    ngOnInit() {
      if(this.identity){
        //USUARIO AUTENTICADO
        this._clienteFacturaService.get_facturas().subscribe(
          response=>{
            this.facturas = response.facturas;
            // console.log(this.facturas);
          },
          error=>{
          }
        );
      }else{
        this._router.navigate(['']);
      }
    }
}