import { Component, OnInit } from '@angular/core';
import { facturaClienteService } from 'src/app/services/facturaCliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-all-details',
  templateUrl: './factura-all-details.component.html',
  styleUrls: ['./factura-all-details.component.css']
})
export class FacturaAllDetailsComponent implements OnInit {

  public facturasDetalle;
  constructor(   private _facturaClienteService: facturaClienteService,

    private _router: Router) { }

  ngOnInit() {
    this._facturaClienteService.getAllDetails().subscribe(
      response => {
        this.facturasDetalle = response.facturasDetalle;
      },
      error => {

      }
    )
  }

}
