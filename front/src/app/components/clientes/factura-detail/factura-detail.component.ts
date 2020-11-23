import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { facturaClienteService } from 'src/app/services/facturaCliente.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {
  public id;
  public factura : any = {
    iduser: '',
    idCliente: ''
  };
  public detalle_factura;
  public identity;
  constructor(
    private _route : ActivatedRoute,
    private _facturaClienteService : facturaClienteService,
    private _userService : UserService,
    private _router : Router
  ) {
    this.identity =this._userService.getIdentity();
   }

  ngOnInit() {
    if(this.identity){
      this._route.params.subscribe(params=>{
        this.id = params['id'];
        this._facturaClienteService.data_factura(this.id).subscribe(
          response=>{
            this.factura = response.data.factura;
            this.detalle_factura = response.data.detalles;
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
