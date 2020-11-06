import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ProductoService } from 'src/app/services/producto.service';
import { GLOBAL } from 'src/app/services/GLOBAL';
interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
} 
@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {


  public productos;
 
  public producto : any = {
    stock : '',
  }
  public detailExperiencia;
  public id;
  public categorias;
  public url;
  public file :File;
  public imgSelect : String | ArrayBuffer;
  public success_message;
  public error_message;
  public stock;

  public data_detalle : Array<any> = [];
  public detalle : any = {
    idproducto : ''
  };
  constructor(
    private _route : ActivatedRoute,
    private _experienciaService : ExperienciaService,
    private _productoService:ProductoService
  ) { 
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this._productoService.get_productos('').subscribe(
      response =>{

        this.productos = response.productos;
      },
      error=>{
        
      }
    );
    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this._experienciaService.get_detalleExperienciaById(this.id).subscribe(
        response=>{
          console.log(response.detalles)
          this.detailExperiencia = response.detalles[0];
        },
        error=>{
        }
      )
    });
  }
  success_alert(){
    this.success_message = ''; 
   }
 
   error_alert(){
     this.error_message = ''; 
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
    onSubmit(detailExperienciaForm){
      console.log('ok',detailExperienciaForm.value.idproducto)
      if(detailExperienciaForm.valid){
        console.log('ok',detailExperienciaForm)
        this._experienciaService.update_detalleExperiencia({
          _id: this.id,
          idproducto: detailExperienciaForm.value.idproducto,
          cantidad: detailExperienciaForm.value.cantidad,
          experiencia: this.detailExperiencia.experiencia,
          nombreEmpresa: detailExperienciaForm.value.nombreEmpresa,
          tiempoServicioDesde: detailExperienciaForm.value.tiempoServicioDesde,
          tiempoServicioHasta: detailExperienciaForm.value.tiempoServicioHasta,
          direccion: detailExperienciaForm.value.direccion,
          telefono: detailExperienciaForm.value.telefono,
          puestoDesempenado: detailExperienciaForm.value.puestoDesempenado,
          sueldoInicial: detailExperienciaForm.value.sueldoInicial,
          sueldoFinal: detailExperienciaForm.value.sueldoFinal,
          motivoCambioTrabajo: detailExperienciaForm.value.motivoCambioTrabajo,
          nombreJefeDirecto: detailExperienciaForm.value.nombreJefeDirecto,
          puestoJefe: detailExperienciaForm.value.puestoJefe,
          solicitarInfo: detailExperienciaForm.value.solicitarInfo,
         
        }).subscribe(
          response=>{
            this.success_message = 'Se actualizó el producto correctamente';
          },
          error=>{
            console.log(error);
          }
        );
      }else{
        this.error_message = 'Complete correctamente el formulario';
      }
    }puestoJefe
  

}
