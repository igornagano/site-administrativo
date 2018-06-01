import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Reserva } from '../model/reserva';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReservaService {
	
	reserva = {};
	
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
    //return this.http.get("ec2-18-231-173-45.sa-east-1.compute.amazonaws.com:8000/reserva/"+id)
    	return this.http.get("http://localhost:8000/reserva"+id)
    	.pipe(
            map(res=>res)
        )
 }
 getAll() {
    console.log("aqui")
    return this.http.get("http://localhost:8000/reserva")
    	.pipe(
            map(res=>res) 
        )
 } 

 putDados(reserva){
 	this.reserva = reserva;
 	return this.http.put("http://localhost:8000/reserva/"+this.reserva['id_reserva'], this.reserva,httpOptions).pipe(
            map(res=>res)
        )
 }    
 setDados(reserva){
 	this.reserva = reserva
 	return this.http.post("http://localhost:8000/reserva",  this.reserva).pipe(
            map(res=>res)
        )
	}
}
