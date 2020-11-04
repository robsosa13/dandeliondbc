import { Component, OnInit } from '@angular/core';
import { Personal } from "../../../models/Personal";
//import { Personal } from "../../../models";
import { PersonalService } from 'src/app/services/personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-create',
  templateUrl: './personal-create.component.html',
  styleUrls: ['./personal-create.component.css']
})
export class PersonalCreateComponent implements OnInit {
  public personal;
  public profesiones;
  constructor(
    private _personalService: PersonalService,
    private _router: Router
  ) {
    this.personal = new Personal('', '', '', '','', 0, '', '');
  }

  ngOnInit() {
    this._personalService.get_profesiones().subscribe(
      response=>{
        this.profesiones = response.profesions;
        //console.log(this.categorias);
      },
      error=>{
      }
    );
  }
  onSubmit(personalForm) {
    console.log(personalForm)
    if (personalForm.valid) {

      this._personalService.insert_personal({
        nombre : personalForm.value.nombre,
        nombreS : personalForm.value.nombreS,
        apellidoP : personalForm.value.apellidoP,
        apellidoM : personalForm.value.apellidoM ,
        ci: personalForm.value.ci,
        cargo: personalForm.value.cargo,
        idprofesion: personalForm.value.idprofesion
    
      }).subscribe(
        response => {
          //this._router.navigate(['personals']);

        },
        error => {

        }
      );

    }
  }

}
