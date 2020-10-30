import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { EmpresaDate } from "../../../models/EmpresaDate";

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.css']
})
export class EmpresaIndexComponent implements OnInit {

  public empresas;
  public empresaDate ;
  public data_detalle : Array<any> = [];
  public estado ="";
public data :any;
  constructor(
    private _empresaService: EmpresaService
  ) {
    this.empresaDate = new EmpresaDate(new Date(), new Date()); 

  }

  ngOnInit() {
    this._empresaService.getEmpresas().subscribe(
      response=>{
        this.empresas = response.empresas;
        console.log(this.empresas);
        
      },
      error=>{

      }
    )
  }

  search(searchForm){
    console.log(searchForm)
    this.empresaDate ={
      startdate:searchForm.value.startdate,
      enddate:searchForm.value.enddate,
    }
    this._empresaService.getEmpresabyDate( this.empresaDate 
     
      
      ).subscribe(
      response =>{
        this.empresas = response.empresas;
        console.log('result',this.empresas);
      },
      error=>{
      }
    );
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

        this._empresaService.deleteEmpresa(id).subscribe(
          resposen=>{
            this._empresaService.getEmpresas().subscribe(
              response=>{
                this.empresas = response.empresas;
              },
              error=>{

              }
            );
          },
          erro=>{

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

}
