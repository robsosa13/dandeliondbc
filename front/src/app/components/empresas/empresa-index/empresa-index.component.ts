import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.css']
})
export class EmpresaIndexComponent implements OnInit {

  public empresas;

  constructor(
    private _empresaService: EmpresaService
  ) { }

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


  // eliminar(id){
  //   Swal.fire({
  //     title: 'Estas seguro de eliminarlo?',
  //     text: "Eliminación!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Eliminar!',
  //     cancelButtonText: 'No, cancelar!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Registro eliminado!',
  //         'Se elimino correctamente.',
  //         'success'
  //       )

  //       this._clienteService.delete_cliente(id).subscribe(
  //         resposen=>{
  //           this._clienteService.get_clientes().subscribe(
  //             response=>{
  //               this.clientes = response.clientes;
  //             },
  //             error=>{

  //             }
  //           );
  //         },
  //         erro=>{

  //         }
  //       );

  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       Swal.fire(
  //         'Cancelado',
  //         'Se cancelo la solicitud :)',
  //         'error'
  //       )
  //     }
  //   })
  // }

}
