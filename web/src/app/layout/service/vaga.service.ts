import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Vaga } from '../model/vaga';
import { Conf } from "./conf";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VagaService {
	
	vaga = {};
	
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
    return this.http.get(this.conf.url + "/vaga/"+id)
    	.pipe(
            map(res=>res)
        )
 } 

  getAll() {
    return this.http.get(this.conf.url + "/Vaga")
        .pipe(
            map(res=>res)
        )
 }

 putDados(vaga){
 	this.vaga = vaga;
 	return this.http.put(this.conf.url + "/vaga/"+this.vaga['id_vaga'], this.vaga,httpOptions).pipe(
            map(res=>res)
        )
 }

 delet(id){
    return this.http.get(this.conf.url + "/vaga/"+id).pipe(
            map(res=>res)
        )
 }

 setDados(vaga){
 	this.vaga = vaga
 	return this.http.post(this.conf.url + "/vaga",  this.vaga).pipe(
            map(res=>res)
        )
	}
}
