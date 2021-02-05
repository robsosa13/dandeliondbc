import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CuentaContableService{
    public url;
 
    constructor(private _http: HttpClient
        ){
            this.url = GLOBAL.url;
    }

    get_cuentas_contables():Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'cuentas-contables',{headers:headers});
      }   
}