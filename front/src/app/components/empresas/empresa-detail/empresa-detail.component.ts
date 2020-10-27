import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {

  public id;
  public empresa:[];
  public detalle_venta;
  public identity;

  constructor(
    private _route : ActivatedRoute,
    private _empresaService : EmpresaService,
    private _userService : UserService,
    private _router : Router
  ) {
    this.identity =this._userService.getIdentity();
   }
  ngOnInit() {
    if(this.identity){
      this._route.params.subscribe(params=>{
        this.id = params['id'];
        this._empresaService.getEmpresa(this.id).subscribe(
          response=>{
            this.empresa = response.empresa[0];

            console.log('Datos Empresa',response.empresa)
           // this.detalle_venta = response.data.detalles;
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
