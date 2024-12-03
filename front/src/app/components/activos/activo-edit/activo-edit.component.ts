import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivoService } from 'src/app/services/activo.service';
import { GLOBAL } from 'src/app/services/GLOBAL';
interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
} 

@Component({
  selector: 'app-activo-edit',
  templateUrl: './activo-edit.component.html',
  styleUrls: ['./activo-edit.component.css']
})
export class ActivoEditComponent implements OnInit {
  public activo;
  public id;
  public categorias;
  public url;
  public file :File;
  public imgSelect : String | ArrayBuffer;
  public success_message;
  public error_message;
  public stock;
  constructor(
    private _route : ActivatedRoute,
    private _activoService : ActivoService
  ) { 
    this.url = GLOBAL.url;
  }

  ngOnInit() {

    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this._activoService.get_activo(this.id).subscribe(
        response=>{
          this.activo = response.activo;
          
          this._activoService.get_categorias().subscribe(
            response=>{
              this.categorias = response.categorias;
              //console.log(this.categorias);
            },
            error=>{
            }
          );
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
    imgSelected(event: HtmlInputEvent){
      if(event.target.files  && event.target.files[0]){
          this.file = <File>event.target.files[0];
  
          const reader = new FileReader();
          reader.onload = e => this.imgSelect= reader.result;
          reader.readAsDataURL(this.file);
      }
    }
  
    onSubmit(activoForm){
      if(activoForm.valid){
  
        this._activoService.update_activo({
          _id: this.id,
          titulo: activoForm.value.titulo,
          descripcion: activoForm.value.descripcion,
          imagen: this.file,
          precio_compra: activoForm.value.precio_compra,
          pertenece: activoForm.value.pertenece,
          idcategoria: activoForm.value.idcategoria,
          modelo : activoForm.value.modelo,
          marca: activoForm.value.marca,
          nroSerie: activoForm.value.nroSerie,
          codigoDBC: activoForm.value.codigoDBC,
          fechaCompra: activoForm.value.fechaCompra,
          img_name : this.activo.imagen,
        }).subscribe(
          response=>{
            console.log(response);
            this.success_message = 'Se actualizó el producto correctamente';
          },
          error=>{
          }
        );
      }else{
        this.error_message = 'Complete correctamente el formulario';
      }
    }

}
