import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-venta-index',
  templateUrl: './venta-index.component.html',
  styleUrls: ['./venta-index.component.css']
})
export class VentaIndexComponent implements OnInit {

  public identity;
  public experiencias;
  filterpost='';
  constructor(
    private _userService : UserService,
    private _ventaService : VentaService,
    private _router : Router,
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if(this.identity){
      //USUARIO AUTENTICADO
      this._ventaService.get_ventas().subscribe(
        response=>{
          this.experiencias = response.experiencias;
          console.log(this.experiencias);
          
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
    this._ventaService.get_ExperienciaSearch(searchFormExpe.value.filtroExpe).subscribe(
      response =>{
        this.experiencias = response.experiencias;
      },
      error=>{

      }
    );
    
  }

}
