import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  public id;
  public postulante : any = {};
  public success_message;

  constructor(
    private _route : ActivatedRoute,
    private _postulanteService :PostulanteService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];

        this._postulanteService.get_postulante(this.id).subscribe(
          response =>{
            console.log(response);
            this.postulante = response.postulante;
          },
          error=>{

          }
        );
      }
    );
  }

  close_alert(){
    this.success_message = '';
  }

  onSubmit(clienteForm){
    if(clienteForm.valid){
      
      this._postulanteService.update_postulante({
        _id: this.id,
        nombres: clienteForm.value.nombres,
        correo: clienteForm.value.correo,
        dni: clienteForm.value.dni,
      }).subscribe(
        response=>{
          this.success_message = 'Se actualizo los datos del cliente';
        },
        error=>{

        }
      );
      
    }
  }

}
