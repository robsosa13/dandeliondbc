import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../../models/Cliente";
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  public cliente;

  constructor(
    private _clienteService: ClienteService,
    private _router: Router
  ) {
    this.cliente = new Cliente('', '', '', '', 0, '', '', '','', '', '', 0, '', '', '', '','');
  }

  ngOnInit() {
  }

  onSubmit(clienteForm) {
    if (clienteForm.valid) {

      this._clienteService.insert_cliente({
        nombres: clienteForm.value.nombres,
        apellidoPaterno: clienteForm.value.apellidoPaterno,
        apellidoMaterno: clienteForm.value.apellidoMaterno,
        edad: clienteForm.value.edad,
        domicilio: clienteForm.value.domicilio,
        sexo: clienteForm.value.sexo,
        ciudad: clienteForm.value.ciudad,
        lugarNacimiento: clienteForm.value.lugarNacimiento,
        FechaNacimiento: clienteForm.value.FechaNacimiento,
        nacionalidad: clienteForm.value.nacionalidad,
        ci: clienteForm.value.ci,
        expedido: clienteForm.value.expedido,
        estadoCivil: clienteForm.value.estadoCivil,
        viveCon: clienteForm.value.viveCon,
        personaDependencia: clienteForm.value.personaDependencia,
        profesion: clienteForm.value.profesion
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
