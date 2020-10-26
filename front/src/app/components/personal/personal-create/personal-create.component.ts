import { Component, OnInit } from '@angular/core';
import { Personal } from "../../../models/Personal";
import { PersonalService } from 'src/app/services/personal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-create',
  templateUrl: './personal-create.component.html',
  styleUrls: ['./personal-create.component.css']
})
export class PersonalCreateComponent implements OnInit {
  public personal;
  constructor(
    private _personalService: PersonalService,
    private _router: Router
  ) {
    this.personal = new Personal('', '', '', '','', 0, '', '');
  }

  ngOnInit() {
  }
  onSubmit(personalForm) {

    if (personalForm.valid) {

      this._personalService.insert_personal({
        nombre : personalForm.value.nombre,
        nombreS : personalForm.value.nombreS,
        apellidoP : personalForm.value.apellidoP,
        apellidoM : personalForm.value.apellidoM ,
        ci: personalForm.value.ci,
        cargo: personalForm.value.cargo,
        profesion: personalForm.value.profesion
    
      }).subscribe(
        response => {
          this._router.navigate(['personals']);

        },
        error => {

        }
      );

    }
  }

}
