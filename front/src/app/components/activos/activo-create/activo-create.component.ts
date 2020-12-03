import { Component, OnInit } from '@angular/core';
import { Activo } from "../../../models/Activo";
import { ActivoService } from 'src/app/services/activo.service';
interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
} 

@Component({
  selector: 'app-activo-create',
  templateUrl: './activo-create.component.html',
  styleUrls: ['./activo-create.component.css']
})
export class ActivoCreateComponent implements OnInit {
  public activo;
  public file :File;
  public imgSelect : String | ArrayBuffer;
  public categorias;
  public success_message;
  public error_message;
  constructor( private _activoService : ActivoService,) { 
    this.activo = new Activo('','','','',1,1,'','','','','','',new Date());
  }

  ngOnInit() {
    this._activoService.get_categorias().subscribe(
      response=>{
        this.categorias = response.categorias;
        console.log(this.categorias);
      },
      error=>{

      }
    );
  }
  success_alert(){
    this.success_message = ''; 
   }
   error_alert(){
    this.error_message = ''; 
   }
   onSubmit(activoForm){
    if(activoForm.valid){
     this._activoService.insert_activo({
       titulo: activoForm.value.titulo,
       descripcion: activoForm.value.descripcion,
       imagen: this.file,
       precio_compra: activoForm.value.precio_compra,
       pertenece: activoForm.value.pertenece,
       stock: activoForm.value.stock,
       idcategoria: activoForm.value.idcategoria,
       modelo: activoForm.value.modelo,
       marca: activoForm.value.marca,
       nroSerie: activoForm.value.nroSerie,
       codigoDBC: activoForm.value.codigoDBC,
       fechaCompra:activoForm.value.fechaCompra
       
     }).subscribe(
       response =>{
        this.success_message = 'Se registro el activo correctamente';
        this.activo = new Activo('','','','',1,1,'','','','','','',new Date());
        this.imgSelect = '../../../../assets/img/default.jpg';
       },
       error=>{
         
       } 
     );
      
    }else{
      this.error_message = 'Complete correctamente el formulario';
    }
  }
  
  imgSelected(event: HtmlInputEvent){
    if(event.target.files  && event.target.files[0]){
        this.file = <File>event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSelect= reader.result;
        reader.readAsDataURL(this.file);
    }
  }

  
 

}
