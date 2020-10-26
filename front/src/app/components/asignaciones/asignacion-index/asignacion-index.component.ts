import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-asignacion-index',
  templateUrl: './asignacion-index.component.html',
  styleUrls: ['./asignacion-index.component.css']
})
export class AsignacionIndexComponent implements OnInit {

  public identity;
  public asignaciones;
  constructor(
    private _userService : UserService,
    private _asignacionService : AsignacionService,
    private _router : Router,
  ) {
    this.identity = this._userService.getIdentity();
   }

   ngOnInit() {
    if(this.identity){
      //USUARIO AUTENTICADO
      this._asignacionService.get_asignaciones().subscribe(
        response=>{
          this.asignaciones = response.asignaciones;
          console.log(this.asignaciones);
          
        },
        error=>{

        }
      );
    }else{
      this._router.navigate(['']);
    }
  }

}
