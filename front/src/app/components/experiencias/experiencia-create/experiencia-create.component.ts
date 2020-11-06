import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DetalleExperiencia } from "../../../models/DetalleExperiencia";
import { Experiencia } from "../../../models/Experiencia";
import { UserService } from 'src/app/services/user.service';
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
  selector: 'app-experiencia-create',
  templateUrl: './experiencia-create.component.html',
  styleUrls: ['./experiencia-create.component.css']
})
export class ExperienciaCreateComponent implements OnInit {

  public identity;
  public postulantes : any;
  public venta : any = {
    idpostulante : '',
  };
  public productos;
  public producto : any = {
    stock : '',
  }
  public total = 0;

  public data_detalle : Array<any> = [];
  public detalle : any = {
    idproducto : ''
  };
  public error_message;

  constructor(
    private _userService:UserService,
    private _postulanteService:PostulanteService,
    private _productoService : ProductoService,
    private _router:Router,
    private _experienciaService : ExperienciaService,
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if(this.identity){
      this._postulanteService.get_postulantes().subscribe(
        response=>{
          this.postulantes = response.postulantes;
        },
        error=>{

        }
      );

      this._productoService.get_productos('').subscribe(
        response =>{
  
          this.productos = response.productos;
        },
        error=>{
          
        }
      );
    }else{
      this._router.navigate(['']);
    }
  }

  get_data_producto(id){
    this._productoService.get_producto(id).subscribe(
      response=>{
        this.producto = response.producto;
      },  
      error=>{

      }
    );
  }

  close_alert(){
    this.error_message = '';
  }

  save_detalle(detalleForm){
    if(detalleForm.valid){
        //if(detalleForm.value.cantidad <= this.producto.stock){
          this.data_detalle.push({
            // idproducto : "",
            // cantidad:"",
            // producto: "",
            // idproducto : detalleForm.value.idproducto,
            // cantidad: detalleForm.value.cantidad,
            producto: this.producto.titulo,
            precio_venta : this.producto.precio_venta,
            nombreEmpresa: detalleForm.value.nombreEmpresa,
            tiempoServicioDesde: detalleForm.value.tiempoServicioDesde,
            tiempoServicioHasta: detalleForm.value.tiempoServicioHasta,
            direccion: detalleForm.value.direccion,
            telefono: detalleForm.value.telefono,
            puestoDesempenado: detalleForm.value.puestoDesempenado,
            sueldoInicial: detalleForm.value.sueldoInicial,
            sueldoFinal: detalleForm.value.sueldoFinal,
            motivoCambioTrabajo: detalleForm.value.motivoCambioTrabajo,
            nombreJefeDirecto: detalleForm.value.nombreJefeDirecto,
            puestoJefe: detalleForm.value.puestoJefe,
            solicitarInfo: detalleForm.value.solicitarInfo,
            
          });
  
          this.detalle = new DetalleExperiencia('','',null,'','','','','','','','','','');
          this.producto.stock = '--|--',
          

          this.total = this.total + (parseInt(this.producto.precio_venta) * parseInt(detalleForm.value.cantidad));
          console.log( this.total);
        // }
        // else{
        //   this.error_message = 'No existe el suficiente stock para la venta';
        // }
    }else{
      console.log("error");
    }
  }

  eliminar(idx,precio_venta,cantidad){
    this.data_detalle.splice(idx,1);
    this.total=this.total - (parseInt(precio_venta)*parseInt(cantidad));
  }

  onSubmit(ventaForm){
    if(ventaForm.valid){
      if(ventaForm.value.idpostulante != ''){
        let data = {
          idpostulante: ventaForm.value.idpostulante,
          iduser: this.identity._id,
          detalles: this.data_detalle
        }

        this._experienciaService.save_data(data).subscribe(
          response =>{
            this._router.navigate(['experiencias']);
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
