import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proveedor-index',
  templateUrl: './proveedor-index.component.html',
  styleUrls: ['./proveedor-index.component.css']
})
export class ProveedorIndexComponent implements OnInit {

  public proveedores;
  public filtro;
  public data_detalle: Array<any> = [];
  public estado = "";
  public data: any;
  constructor(
    private _proveedorService: ProveedorService,
    private _router: Router
  ) {

  }
  ngOnInit() {
    this._proveedorService.getProveedores().subscribe(
      response => {
        this.proveedores = response.proveedores;
      },
      error => {

      }
    )
  }
  // searchByDate(searchForms) {

  //   this._empresaService.getEmpresabyDate(this.empresaDate).subscribe(
  //     response => {
  //       this.empresas = response.result;
  //       console.log('devuelve:', this.empresas)
  //     },
  //     error => {
  //     }
  //   );
  // }
  // searchEstado(searchEstadoForm) {
  //   console.log('Estado :', searchEstadoForm.value.filtroEstado)

  //   this._empresaService.getEmpresaByState(searchEstadoForm.value.filtroEstado).subscribe(
  //     response => {
  //       this.empresas = response.empresas;
  //       console.log('devuelve:', this.empresas)
  //     },
  //     error => {
  //     }
  //   );
  // }
  // searchEmpresa(searchEmpresaForm) {
  //   this._empresaService.get_empresas(searchEmpresaForm.value.filtroEmpresa).subscribe(
  //     response => {
  //       this.empresas = response.empresas;
  //       // console.log(this.empresas);

  //     },
  //     error => {

  //     }
  //   )

  // }


  listar() {
    this._proveedorService.getProveedores().subscribe(
      response => {
        this.proveedores = response.proveedores;
        // console.log(this.empresas);

      },
      error => {
      }
    )

  }

  eliminar(id) {
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

        this._proveedorService.deleteCliente(id).subscribe(
          resposen => {
            this._proveedorService.getProveedores().subscribe(
              response => {
                this.proveedores = response.proveedores;
              },
              error => {

              }
            );
          },
          erro => {

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

