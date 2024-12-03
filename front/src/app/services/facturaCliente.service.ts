import { Injectable } from '@angular/core';
import { GLOBAL } from "./GLOBAL";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class facturaClienteService {
  public url;
  constructor(
    private _http : HttpClient
  ) { 
    this.url = GLOBAL.url;
  }
  get_facturas():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'facturas',{headers:headers});
  }
  insert_Factura(data):Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'factura/registrar',data,{headers:headers});
  }
  data_factura(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'factura/'+id,{headers:headers});
  }
  getAllDetails():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'facturas-detalle',{headers:headers});
  }

  


//   get_personal(id):Observable<any>{
//     let headers = new HttpHeaders().set('Content-Type','application/json');
//     return this._http.get(this.url+'personal/'+id,{headers:headers});
//   }

//   update_personal(data):Observable<any>{
//     let headers = new HttpHeaders().set('Content-Type','application/json');
//     return this._http.put(this.url+'personal/editar/'+data._id,data,{headers:headers});
//   }

//   delete_personal(id):Observable<any>{
//     let headers = new HttpHeaders().set('Content-Type','application/json');
//     return this._http.delete(this.url+'/personal/eliminar/'+id,{headers:headers});
//   }
//   get_profesiones():Observable<any>{
//     let headers = new HttpHeaders().set('Content-Type','application/json');
//     return this._http.get(this.url+'profesions',{headers:headers});
//   }
  
//   insert_profesion(data):Observable<any>{
//     let headers = new HttpHeaders().set('Content-Type','application/json');
//     return this._http.post(this.url+'profesion/registrar',data,{headers:headers});
//   }
}
