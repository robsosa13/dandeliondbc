import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-index-experiencia',
  templateUrl: './index-experiencia.component.html',
  styleUrls: ['./index-experiencia.component.css']
})
export class IndexExperienciaComponent implements OnInit {

  public identity;
  public experiencias;
  filterpost='';
  constructor(
    private _userService : UserService,
    private _experienciaService : ExperienciaService,
    private _router : Router,
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if(this.identity){
      //USUARIO AUTENTICADO
      this._experienciaService.get_ventas().subscribe(
        response=>{
          this.experiencias = response.experiencias;
          //console.log(this.experiencias);
          
        },
        error=>{

        }
      );
    }else{
      this._router.navigate(['']);
    }
  }
  search(searchFormExpe){
    console.log(searchFormExpe.value.filtroExpe)
    this._experienciaService.get_ExperienciaSearch(searchFormExpe.value.filtroExpe).subscribe(
      response =>{
        this.experiencias = response.experiencias;
      },
      error=>{

      }
    );
    
  }

}
