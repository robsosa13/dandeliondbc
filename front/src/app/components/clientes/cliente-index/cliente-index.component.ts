import { Component, OnInit } from '@angular/core';
import { PostulanteService } from 'src/app/services/postulante.service';
import { PersonalService } from 'src/app/services/personal.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {

  public postulantes;
  public profesiones;

  filterProTest='';
  constructor(
    private _postulanteService: PostulanteService,
    private _personalService:
    PersonalService
  ) { }

  ngOnInit() {
    this._postulanteService.get_postulantes().subscribe(
      response=>{
        this.postulantes = response.postulantes;
        console.log(this.postulantes);
        
      },
      error=>{

      }
    )
    this._personalService.get_profesiones().subscribe(
      response=>{
        this.profesiones = response.profesions;
       
        
      },
      error=>{

      }
    )
  }
  search(searchFormPostu){
    this._postulanteService.get_postulantesByProfesion(searchFormPostu.value.filtroPost).subscribe(
      response =>{
        this.postulantes = response.postulantes;
      },
      error=>{

      }
    );
  }
  searchEstado(searchEstadoForm){
    console.log('Estado :', searchEstadoForm.value.filtroEstado)
   
    this._postulanteService.getEmpresaByState(searchEstadoForm.value.filtroEstado).subscribe(
      response =>{
        this.postulantes = response.postulantes;
        console.log('devuelve:',this.postulantes)
      },
      error=>{
      }
    );
  }
 
  listarPostulante(){
    this._postulanteService.get_postulantes().subscribe(
      response=>{
        this.postulantes = response.postulantes;
        console.log(this.postulantes);
        
      },
      error=>{

      }
    )

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

        this._postulanteService.delete_postulante(id).subscribe(
          resposen=>{
            this._postulanteService.get_postulantes().subscribe(
              response=>{
                this.postulantes = response.postulantes;
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
