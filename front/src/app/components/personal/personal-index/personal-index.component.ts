import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

/**CAMBIO */
@Component({
  selector: 'app-personal-index',
  templateUrl: './personal-index.component.html',
  styleUrls: ['./personal-index.component.css']
})

export class PersonalIndexComponent implements OnInit {
  public personals;

  constructor(
    private _personalService: PersonalService
  ) { }
  ngOnInit() {
    this._personalService.get_personals().subscribe(
      response=>{
        this.personals = response.personals;
        console.log(this.personals);
        
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

        this._personalService.delete_personal(id).subscribe(
          resposen=>{
            this._personalService.get_personals().subscribe(
              response=>{
                this.personals = response.personals;
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
