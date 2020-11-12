import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../../models/Cliente";
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  public cliente;
  public clientes;
  public count;
  constructor(
    private _clienteService: ClienteService,
    private _router: Router

  ) {
    this.cliente = new Cliente('', '', '', '', 0, 0, '', '');
  }
  ngOnInit() {
    this._clienteService.getClientes().subscribe(
      response => {
        this.clientes = response.clientes;
        this.count =parseInt(this.clientes.length)+1;
      },
      error => {
      }
    )
  }
  onSubmit(clienteForm) {
     
    //console.log('numero',  parseInt( this.empresas.length));
    if (clienteForm.valid) {
      this._clienteService.insertCliente({
        numeroCliente: 'Cliente - '+this.count,
        nombre: clienteForm.value.nombre,
        nit: clienteForm.value.nit,
        direccion: clienteForm.value.direccion,
        telefono: clienteForm.value.telefono,
        formaPago: clienteForm.value.formaPago,
        estado: clienteForm.value.estado,
      }).subscribe(
        response => {
          this._router.navigate(['clientes']);

        },
        error => {

        }
      );

    }
  }

}