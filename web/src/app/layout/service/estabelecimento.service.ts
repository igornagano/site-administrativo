import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Estabelecimento } from '../model/estabelecimento';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EstabelecimentoService {
	
	estabelecimento = {};
	
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
    return this.http.get("http://localhost:8000/estabelecimento/"+id)
    	.pipe(
            map(res=>res)
        )
 } 

 getAll() {
    return this.http.get("http://localhost:8000/estabelecimento")
    	.pipe(
            map(res=>res)
        )
 } 

 putDados(estabelecimento){
 	this.estabelecimento = estabelecimento;
 	return this.http.put("http://localhost:8000/estabelecimento/"+this.estabelecimento['id_estabelecimento'], 
        this.estabelecimento,httpOptions)
        .pipe(
            map(res=>res)
        )
 }    
 setDados(estabelecimento){
 	this.estabelecimento = estabelecimento
        console.log('erro service')
    	return this.http.post("http://localhost:8000/estabelecimento",this.estabelecimento)
        .pipe(
            map(res=>res)
        )
	}
}
