import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  public url;
  constructor(
    private _http: HttpClient,
  ) { 
    this.url = GLOBAL.url;
  }
  get_activos(filtro):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'activos/'+filtro,{headers:headers});
  }
  get_categorias():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'categorias',{headers:headers});
  }
  insert_activo(data){
    const fd = new FormData();
    fd.append('titulo',data.titulo);
    fd.append('descripcion',data.descripcion);
    fd.append('imagen',data.imagen);
    fd.append('precio_compra',data.precio_compra);
    fd.append('stock',data.stock);
    fd.append('pertenece',data.pertenece);
    fd.append('idcategoria',data.idcategoria);
    fd.append('modelo',data.modelo);
    fd.append('marca',data.marca);
    fd.append('nroSerie',data.nroSerie);
    fd.append('codigoDBC',data.codigoDBC);
    fd.append('fechaCompra',data.fechaCompra);
    return this._http.post(this.url + 'activo/registrar',fd);
  }
  get_activo(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'activo/'+id,{headers:headers});
  }
  update_activo(data){
    const fd = new FormData();
    fd.append('titulo',data.titulo);
    fd.append('descripcion',data.descripcion);
    fd.append('imagen',data.imagen);
    fd.append('precio_compra',data.precio_compra);
    //fd.append('precio_venta',data.precio_venta);
    fd.append('pertenece',data.pertenece);
    fd.append('idcategoria',data.idcategoria);
    fd.append('modelo',data.modelo);
    fd.append('marca',data.marca);
    fd.append('nroSerie',data.nroSerie);
    fd.append('codigoDBC',data.codigoDBC);
    fd.append('fechaCompra',data.fechaCompra);
    return this._http.put(this.url + 'activo/editar/'+data._id+'/'+data.img_name,fd);
  }

  insert_categoria(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'categoria/registrar',data,{headers:headers});
  }

  delete_activo(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'activo/'+id,{headers:headers});
  }

  stock_activo(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'activo/stock/'+data._id,data,{headers:headers});
  }


}
