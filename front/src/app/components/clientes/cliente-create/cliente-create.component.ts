import { Component, OnInit } from '@angular/core';
import { Postulante } from "../../../models/Postulante";
import { PostulanteService } from 'src/app/services/postulante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  public postulante;

  constructor(
    private _postulanteService: PostulanteService,
    private _router: Router
  ) {
    this.postulante = new Postulante('', '', '', '', 0, '', '', '','', '', '', 0, '', '', '', '','','');
  }

  ngOnInit() {
  }

  onSubmit(clienteForm) {

    if (clienteForm.valid) {

      this._postulanteService.insert_postulante({
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
        profesion: clienteForm.value.profesion,
        estadoPostulante: clienteForm.value.estadoPostulante
      }).subscribe(
        response => {
          this._router.navigate(['postulantes']);

        },
        error => {

        }
      );

    }
  }
}
