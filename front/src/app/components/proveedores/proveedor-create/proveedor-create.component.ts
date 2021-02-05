import { Component, OnInit } from '@angular/core';
import { Proveedor } from "../../../models/Proveedor";
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {
  public proveedor;
  public proveedores;
  public count;
  constructor(
    private _proveedorService: ProveedorService,
    private _router: Router

  ) {
    this.proveedor = new Proveedor('', '', '', '', 0, 0, '', '');
  }
  ngOnInit() {
    this._proveedorService.getProveedores().subscribe(
      response => {
        this.proveedores = response.proveedores;
        this.count =parseInt(this.proveedores.length)+1;
      },
      error => {
      }
    )
  }
  onSubmit(proveedorForm) {
     
    //console.log('numero',  parseInt( this.empresas.length));
    if (proveedorForm.valid) {
      this._proveedorService.insertProveedor({
        numeroProveedor: 'Proveedor - '+this.count,
        nombre: proveedorForm.value.nombre,
        nit: proveedorForm.value.nit,
        direccion: proveedorForm.value.direccion,
        telefono: proveedorForm.value.telefono,
        formaPago: proveedorForm.value.formaPago,
        estado: proveedorForm.value.estado,
      }).subscribe(
        response => {
          this._router.navigate(['proveedores']);

        },
        error => {

        }
      );

    }
  }

}