import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators'; 
import { Cliente } from '../model/cliente';
import { Conf } from "./conf";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClienteService {
    
    cliente = {};
    
    resultado = '';
    private handleError(error: any){
        if(error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }

  constructor(private http: HttpClient, private conf: Conf) { 

  }
  getDados(id) {
    return this.http.get(this.conf.url + "/cliente/"+id)
        .pipe(
            map(res=>res)
        )
 } 

 getAll(){    
        return this.http.get(this.conf.url + "/cliente")
        .pipe(
            map(res=>res) 
        )
 } 

 putDados(cliente){
    this.cliente = cliente;
    return this.http.put(this.conf.url + "/cliente/"+this.cliente['id_cliente'], 
        this.cliente,httpOptions)
        .pipe(
            map(res=>res)
        )
 }    
 setDados(cliente){
    this.cliente = cliente;
        return this.http.post(this.conf.url + "/cliente",this.cliente).subscribe(data => {

        });
    }
}
