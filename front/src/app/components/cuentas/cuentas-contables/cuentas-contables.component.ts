import { Component, OnInit } from '@angular/core';
import { CuentaContableService } from 'src/app/services/cuentas_contables.service';
import { GLOBAL } from 'src/app/services/GLOBAL';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuentas-contables',
  templateUrl: './cuentas-contables.component.html',
  styleUrls: ['./cuentas-contables.component.css']
})
export class CuentasContablesComponent implements OnInit {
  public url;
  public cuentasContables
  constructor(private _cuentaContableService: CuentaContableService) {
    this.url = GLOBAL.url;}
    ngOnInit(){
      console.log('test ');
          
      this._cuentaContableService.get_cuentas_contables().subscribe(
        response =>{
          this.cuentasContables = response.cuentas;
          console.log(this.cuentasContables);
          
        },
        error=>{
        }
      );
    }
    
  }
