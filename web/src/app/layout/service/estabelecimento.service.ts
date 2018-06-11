import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Estabelecimento } from '../model/estabelecimento';
import { Conf } from "./conf";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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

  constructor(private http: HttpClient, private conf: Conf) { 

  }

 getDados(id) {
    return this.http.get(this.conf.url + "/estabelecimento/"+id)
    	.pipe(
            map(res=>res)
        )
 } 

 getAll() {
    return this.http.get(this.conf.url + "/estabelecimento")
    	.pipe(
            map(res=>res)
        )
 } 

 putDados(estabelecimento){
 	this.estabelecimento = estabelecimento;
 	return this.http.put(this.conf.url + "/estabelecimento/"+this.estabelecimento['id_estabelecimento'], 
        this.estabelecimento,httpOptions)
        .pipe(
            map(res=>res)
        )
 }    
 setDados(estabelecimento){
 	this.estabelecimento = estabelecimento;
    	return this.http.post(this.conf.url + "/estabelecimento",this.estabelecimento)
        .pipe(
            map(res=>res)
            )
        }
	
getPreco(estabelecimento){
        return this.http.get(this.conf.url + "/valores/estabelecimento/"+
            estabelecimento,this.estabelecimento)
        .pipe(
            map(res=>res)
        )
    }
}
