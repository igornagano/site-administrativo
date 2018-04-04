import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Colaborador } from '../model/colaborador';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ColaboradorService {
	
	colaborador = {};
	gestor = {};

	resultado = '';
	private handleError(error: any){
		if(error instanceof Response) {
			return Observable.throw(error.json()['error'] || 'backend server error');
		}
		return Observable.throw(error || 'backend server error');
	}

  constructor(private http: HttpClient) { 

  }

 getDados(id) {
    return this.http.get("ec2-18-231-173-45.sa-east-1.compute.amazonaws.com:8000/colaborador/"+id)
    	.pipe(
            map(res=>res)
        )
 } 
 putDados(colaborador){
 	this.colaborador = colaborador;
 	return this.http.put("http://localhost:8000/colaborador/"+this.colaborador['id_colaborador'], this.colaborador,httpOptions).pipe(
            map(res=>res)
        )
 }    
 setDados(colaborador){
 	this.colaborador = colaborador
 	return this.http.post("http://localhost:8000/colaborador",  this.colaborador).pipe(
            map(res=>res)
        )
	}
}
