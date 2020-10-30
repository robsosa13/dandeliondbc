import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { Observable } from "rxjs";


@Injectable({

    providedIn: 'root'
})
export class EmpresaService{
    public url;
 
    constructor(private _http: HttpClient
        ){
            this.url = GLOBAL.url;
    }
    testService(){
        return 'testing Angular Service';
    }
    insert_empresa(data):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'save-empresa',data,{headers:headers});
      }
    
    // saveEmpresa(empresa:Empresa):Observable<any>{
    //     let params = JSON.stringify(empresa);
    //     let headers = new HttpHeaders().set('Content-Type','application/json');
    //     return this._http.post(this.url+'save-empresa',params,{headers:headers});

    // }
    getEmpresas():Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'empresas',{headers:headers});
      
    }

    getEmpresa(id):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'detail-empresa/'+id,{headers:headers});
       
    }
    deleteEmpresa(id):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'empresa/'+id,{headers:headers});
       
    }
    //  updateEmpresa(data):Observable<any>{
    //      let params = JSON.stringify(data);
    //     let headers= new HttpHeaders().set('Content-Type','application/json');
    //     return this._http.put(this.url+'empresa/'+data._id ,params,{headers:headers});
       
    // }
    update_empresa(data):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'empresa/'+data._id,data,{headers:headers});
      }
    getEmpresabyDate(data):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.get('/api/empresa-search',data+{headers:headers});
       
    }
    // getEmpresaCount():Observable<any>{
    //     let headers= new HttpHeaders().set('Content-Type','application/json');
    //     return this._http.get(this.url+'/empresa-count',{headers:headers});
       
    // }
    get_empresas(filtro):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'empresas/'+filtro,{headers:headers});
      }
  
    
}