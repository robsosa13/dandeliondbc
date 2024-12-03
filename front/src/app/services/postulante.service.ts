import { Injectable } from '@angular/core';
import { GLOBAL } from "./GLOBAL";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  public url;

  constructor(
    private _http : HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  get_postulantes():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'postulantes',{headers:headers});
  }

  insert_postulante(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'postulante/registrar',data,{headers:headers});
  }

  get_postulante(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'postulante/'+id,{headers:headers});
  }

  update_postulante(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'postulante/editar/'+data._id,data,{headers:headers});
  }

  delete_postulante(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'/postulante/eliminar/'+id,{headers:headers});
  }
  get_postulantesByProfesion(filtroPost):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'postulantes/'+filtroPost,{headers:headers});
  }
  get_categorias():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'categorias',{headers:headers});
  }
  
  insert_categoria(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'categoria/registrar',data,{headers:headers});
  }
  getEmpresaByState(filtroPost):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'postulante-search-estado/'+filtroPost,{headers:headers});
  }
  
}
