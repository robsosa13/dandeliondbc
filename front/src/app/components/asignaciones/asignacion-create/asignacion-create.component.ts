import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PersonalService } from 'src/app/services/personal.service';
import { Router } from '@angular/router';
import { ActivoService } from 'src/app/services/activo.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DetalleAsignacion } from "../../../models/DetalleAsignacion";
import { Asignacion } from "../../../models/Asignacion";
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-asignacion-create',
  templateUrl: './asignacion-create.component.html',
  styleUrls: ['./asignacion-create.component.css']
})
export class AsignacionCreateComponent implements OnInit {
  public identity;
  public personals: any;
  public asignacion: any = {
    idpersonal: '',
  };
  public activos;
  public activo: any = {
    stock: '',
  }
  public total = 0;

  public data_detalle: Array<any> = [];
  public detalle: any = {
    idactivo: ''
  };
  public error_message;

  constructor(
    private _userService: UserService,
    private _personalService: PersonalService,
    private _activoService: ActivoService,
    private _router: Router,
    private _asignacionService: AsignacionService,
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if (this.identity) {
      this._personalService.get_personals().subscribe(
        response => {
          this.personals = response.personals;
        },
        error => {

        }
      );

      this._activoService.get_activos('').subscribe(
        response => {

          this.activos = response.activos;
        },
        error => {

        }
      );
    } else {
      this._router.navigate(['']);
    }
  }

  get_data_activo(id) {
    this._activoService.get_activo(id).subscribe(
      response => {
        this.activo = response.activo;
      },
      error => {

      }
    );
  }
  close_alert() {
    this.error_message = '';
  }
  save_detalle(detalleForm) {
    if (detalleForm.valid) {
      if (detalleForm.value.cantidad <= this.activo.stock) {
        this.data_detalle.push({
          idproducto: detalleForm.value.idproducto,
          cantidad: detalleForm.value.cantidad,
          activo: this.activo.titulo,
          //precio_venta : this.activo.precio_venta
        });

        this.detalle = new DetalleAsignacion('', '', null);
        this.activo.stock = '--|--'


         //this.total = this.total + (parseInt(this.activo.precio_venta) * parseInt(detalleForm.value.cantidad));
         //console.log(this.total);
      }
      else {
        this.error_message = 'No existe el suficiente stock para la venta';
      }
    } else {
      console.log("error");
    }
  }

  eliminar(idx,precio_venta,cantidad){
    this.data_detalle.splice(idx,1);
    this.total=this.total - (parseInt(precio_venta)*parseInt(cantidad));
  }

  onSubmit(asignacionForm){
    if(asignacionForm.valid){
      if(asignacionForm.value.idpersonal != ''){
        let data = {
          idpersonal: asignacionForm.value.idpersonal,
          iduser: this.identity._id,
          detalles: this.data_detalle
        }
        this._asignacionService.save_data(data).subscribe(
          response =>{
            this._router.navigate(['asignaciones']);
          },
          error=>{
            console.log(error);
          }
        );
        
      }else{
        console.log('error');
      }
      
    }else{
      console.log('error');
      
    }
  }


}
