import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-experiencia',
  templateUrl: './detail-experiencia.component.html',
  styleUrls: ['./detail-experiencia.component.css']
})
export class DetailExperienciaComponent implements OnInit {


  public id;
  public venta : any = {
    iduser: '',
    idcliente: ''
  };
  public detalle_venta;
  public identity;

  constructor(
    private _route : ActivatedRoute,
    private _experienciaService : ExperienciaService,
    private _userService : UserService,
    private _router : Router
  ) {
    this.identity =this._userService.getIdentity();
   }

  ngOnInit() {
    if(this.identity){
      this._route.params.subscribe(params=>{
        console.log('ok')
        this.id = params['id'];
        this._experienciaService.data_venta(this.id).subscribe(
          response=>{
            console.log('1', response.data.experiencia)
            console.log('2exp',response.data.detalles)
            this.venta = response.data.experiencia;
            this.detalle_venta = response.data.detalles;
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
