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
  selector: 'app-factura-index',
  templateUrl: './factura-index.component.html',
  styleUrls: ['./factura-index.component.css']
})
export class FacturaIndexComponent implements OnInit {

  public identity;
  public postulantes: any;
  public factura: any = {
    idCliente: '',
    numeroFactura: '',
  };
  public productos;
  public producto: any = {
    stock: '',
  }
  public total = 0;
  public IVAtotal = 0;
  public ITtotal = 0;
  public totalItem = 0;


  public data_detalle: Array<any> = [];
  public detalle: any = {
    idproducto: ''
  };
  public id;
  public cliente: [];
  public detalle_venta;
  public facturas;
public factura_Cliente;
  constructor(
    private _route: ActivatedRoute,
    private _clienteService: ClienteService,
    private _userService: UserService,
    private _clienteFacturaService: facturaClienteService,

    private _router: Router

  ) {
    this.identity = this._userService.getIdentity();
    this.factura_Cliente = new FacturaCliente('', '','', '', '', 0,0,0);
  }
  ngOnInit() {
    if (this.identity) {
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._clienteService.getCliente(this.id).subscribe(
          response => {
            this.cliente = response.cliente[0];
            console.log('CLIENTE ', this.cliente)
          },
          error => {
          }
        );
      });
    } else {
      this._router.navigate(['']);
    }
  }

  save_detalle(detalleForm) {
    var precioTotal = 0, precioIvaDetalle = 0, precioItDetalle = 0;
    if (detalleForm.valid) {
      precioIvaDetalle = detalleForm.value.precioItem * .13;
      precioTotal = detalleForm.value.precioItem + (precioIvaDetalle)
      precioItDetalle = (precioTotal * 3) / 100;
      console.log('test', precioIvaDetalle)
      console.log('test', precioTotal)
      console.log('test', precioItDetalle)

      this.data_detalle.push({
        conceptoItem: detalleForm.value.conceptoItem,
        precioItem: detalleForm.value.precioItem,
        precioTotalItem: precioTotal,
        ivaItem: precioIvaDetalle,
        itItem: precioItDetalle,
      });
      this.detalle = new DetalleFacturaCliente('','',0, 0, 0, 0);
     
      this.total = this.total + precioTotal;
      this.totalItem = this.totalItem + detalleForm.value.precioItem;
      console.log('test item',this.totalItem)
      console.log(this.total);
    } else {
      console.log("error");
    }
  }
  onSubmit(clienteForm) {
    this.ITtotal = (this.total * 3)/100;
    this.IVAtotal = this.totalItem * .13;
    if (clienteForm.valid) {
        let data = {
          idCliente: this.id ,
          iduser: this.identity._id,
          numeroFactura: clienteForm.value.numeroFactura,
          conceptoItem: clienteForm.value.conceptoItem,
          precioTotal: this.total,
          ivaTotal: this.IVAtotal,
          itTotal: this.ITtotal ,
          detalles: this.data_detalle
        }
        console.log('data',data)
        this._clienteFacturaService.insert_Factura(data).subscribe(
          response => {
            this._router.navigate(['facturas']);
          },
          error => {
            console.log('conso',error);
          }
        );
    } else {
      console.log('error');
    }
  }
}