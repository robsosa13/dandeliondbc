import { Component, OnInit } from '@angular/core';
import { Postulante } from "../../../models/Postulante";
import { PostulanteService } from 'src/app/services/postulante.service';
import { PersonalService } from 'src/app/services/personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postulante-create',
  templateUrl: './postulante-create.component.html',
  styleUrls: ['./postulante-create.component.css']
})
export class PostulanteCreateComponent implements OnInit {

  public postulante;
  public profesiones;

  constructor(
    private _postulanteService: PostulanteService,
    private _personalService: PersonalService,
    private _router: Router
  ) {
    this.postulante = new Postulante('', '', '', '', 0, '', '', '','', '', '', 0, '', '', '', '','','');
  }

  ngOnInit() {
    this._personalService.get_profesiones().subscribe(
      response=>{
        this.profesiones = response.profesions;
        console.log('profesio',this.profesiones);
      },
      error=>{
      }
    );
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
        idprofesion: clienteForm.value.idprofesion,
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
