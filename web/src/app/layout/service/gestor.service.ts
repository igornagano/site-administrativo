import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Gestor } from '../model/gestor';
import { Conf } from "./conf";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GestorService {
	
	gestor = {};
	
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
    return this.http.get(this.conf.url + "/gestor/"+id)
    	.pipe(
            map(res=>res)
        )
 } 
 putDados(gestor){
 	this.gestor = gestor;
 	return this.http.put(this.conf.url + "/gestor/"+this.gestor['id_gestor'], this.gestor,httpOptions).pipe(
            map(res=>res)
        )
 }    
 setDados(gestor){
 	this.gestor = gestor
 	return this.http.post(this.conf.url + "/gestor",  this.gestor).pipe(
            map(res=>res)
        )
	}
}
