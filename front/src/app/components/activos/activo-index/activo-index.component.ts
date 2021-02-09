import { Component, OnInit } from '@angular/core';
import { ActivoService } from 'src/app/services/activo.service';
import { GLOBAL } from 'src/app/services/GLOBAL';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-activo-index',
  templateUrl: './activo-index.component.html',
  styleUrls: ['./activo-index.component.css']
})
export class ActivoIndexComponent implements OnInit {
  public activos;
  public url;
  public filtro;
  public categorias;
  public titulo_cat;
  public descripcion_cat;
  public activo_stock;
  public activo_id;
  public success_message;
  public pcompra = 0 ;
  constructor(private _activoService:ActivoService) { 
    this.url = GLOBAL.url;
  }
  downPDF(){ 
    var body = [];
   
    for (var j = 0; j < this.activos.length ; j++) {
      body.push({
          id: j+1,
         
          titulo: this.activos[j].titulo,
          fecha: new Date(this.activos[j].fechaRegistro).toISOString().slice(0,10),
          precio: this.activos[j].precio_compra,
         
          
      });
        this.pcompra =  this.pcompra +  this.activos[j].precio_compra
     
  }
  var cantidad = 10;
    var data = this.activos    
    const doc = new jsPDF() 
    
    var columnas = [{title: 'Titulo', dataKey: 'titulo'}, {title: 'Fecha', dataKey: 'fecha'},{title: 'Precio de Compra', dataKey:'precio'}]
    doc.setFontSize(18);
    doc.text('Lista de Activos', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(10);

    autoTable(doc,{
      columns: columnas,
      body:body,
      foot: [['Total Prueba :', '  ', this.pcompra]],
      theme: 'grid',
      
      didDrawCell: (data) => {
       // console.log(data.row.raw)
      },
      
    })
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
     
     // below line for Download PDF document  
     //doc.save('table.pdf')
  }

  ngOnInit() {
    this._activoService.get_activos('').subscribe(
      response =>{
        this.activos = response.activos;
        console.log(this.activos);
        
      },
      error=>{

      }
    );

    this._activoService.get_categorias().subscribe(
      response=>{
        this.categorias = response.categorias;
      },
      error=>{

      }
    );
  }
  search(searchForm){
    console.log(searchForm.value.filtro)
    this._activoService.get_activos(searchForm.value.filtro).subscribe(
      response =>{
        this.activos = response.activos;
      },
      error=>{

      }
    );
    
  }
  save_cat(categoriaForm){
    if(categoriaForm.valid){
      this._activoService.insert_categoria({
        titulo: categoriaForm.value.titulo_cat,
        descripcion: categoriaForm.value.descripcion_cat,
      }).subscribe(
        response=>{
          this._activoService.get_categorias().subscribe(
            response =>{
              this.categorias = response.categorias;
              $('#modal-save-categoria').modal('hide');
            },
            error=>{

            }
          );
        },
        error=>{

        }
      );
      
    }
  }
  eliminar(id){
    Swal.fire({
      title: 'Estas seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro eliminado!',
          'Se elimino correctamente.',
          'success'
        )

        this._activoService.delete_activo(id).subscribe(
          response=>{
            this._activoService.get_activos('').subscribe(
              response=>{
                this.activos = response.activos;
              }
              ,erro=>{

              }
            );
          }
          ,error=>{

          }
        );

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Se cancelo la solicitud :)',
          'error'
        )
      }
    })
  }
  get_id(id){
    this.activo_id = id;
  }
  close_alert(){
    this.success_message = '';
  }

  aumentar_stock(stockForm){
    if(stockForm.valid){
      if(this.activo_id){
        this._activoService.stock_activo({
          _id: this.activo_id,
          stock: stockForm.value.activo_stock,
        }).subscribe(
          response=>{
            this.success_message = 'Se aumento el stock correctamente';
            this._activoService.get_activos('').subscribe(
              response =>{
                this.activos = response.activos;
                $('.modal').modal('hide');
              }
              ,error=>{

              }
            );
          },
          error=>{
            console.log(error);
            
          }
        );
      }   
    }
  }
}
