import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-asignacion-detail',
  templateUrl: './asignacion-detail.component.html',
  styleUrls: ['./asignacion-detail.component.css']
})
export class AsignacionDetailComponent implements OnInit {
  public id;
  public asignacion : any = {
    iduser: '',
    idcliente: ''
  };
  public detalle_asignacion;
  public identity;
  constructor(
    private _route : ActivatedRoute,
    private _asignacionService : AsignacionService,
    private _userService : UserService,
    private _router : Router
  ) {
    this.identity =this._userService.getIdentity();
   }

   ngOnInit() {

    if(this.identity){
      this._route.params.subscribe(params=>{
        this.id = params['id'];
  
        this._asignacionService.data_asignacion(this.id).subscribe(
          response=>{
            this.asignacion = response.data.asignacion;
            this.detalle_asignacion = response.data.detalles;
            // console.log('1ss',response.data.activo)
            // console.log('2ss',response.data.detalles)
          }, 
          error=>{
          }
        );
      });
    }else{
      this._router.navigate(['']);
    }

  }

}
