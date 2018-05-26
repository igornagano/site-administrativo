import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Vaga } from '../model/vaga';
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

  constructor(private http: HttpClient) { 

  }

 getDados(id) {
    //return this.http.get("ec2-18-231-173-45.sa-east-1.compute.amazonaws.com:8000/vaga/"+id)
    return this.http.get("http://localhost:8000/vaga/"+id)
    	.pipe(
            map(res=>res)
        )
 } 

 getAll() {
    console.log("aqui")
    return this.http.get("http://localhost:8000/vaga")
    	.pipe(
            map(res=>res) 
        )
 } 

 putDados(vaga){
 	this.vaga = vaga;
 	return this.http.put("http://localhost:8000/vaga/"+this.vaga['id_vaga'], this.vaga,httpOptions).pipe(
            map(res=>res)
        )
 }    
 setDados(vaga){
 	this.vaga = vaga
        console.log('erro service')
     	return this.http.post("http://localhost:8000/vaga",  this.vaga).subscribe(data => {
        });
	}
}
