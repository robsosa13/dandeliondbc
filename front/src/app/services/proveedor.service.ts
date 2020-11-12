import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProveedorService{
    public url;
 
    constructor(private _http: HttpClient
        ){
            this.url = GLOBAL.url;
    }
    testService(){
        return 'testing Angular Service';
    }
    insertProveedor(data):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'proveedor/registrar',data,{headers:headers});
      }
    getProveedores():Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'proveedores',{headers:headers});
    }

    getCliente(id):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'cliente/'+id,{headers:headers});
       
    }
    deleteCliente(id):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'cliente/eliminar/'+id,{headers:headers});  
    }
    updateCliente(data):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'cliente/editar/'+data._id,data,{headers:headers});
      }
    get_clientes(filtro):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'clientes/'+filtro,{headers:headers});
      }   
}