import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Reserva } from '../model/reserva';
import { Conf } from "./conf";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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

  constructor(private http: HttpClient, private conf: Conf) { 

  }
 getReservas(id_estabelecimento){
 	  return this.http.get(this.conf.url + "/reserva/estabelecimento/"+id_estabelecimento+"/reservados")
    	.pipe(
            map(res=>res)
        )
 }
 getReservasHoje(id_estabelecimento){
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth();
   var ano = hoje.getFullYear();
  
    return this.http.get(this.conf.url + "/reserva/estabelecimento/"+id_estabelecimento+"/"+dia+"/"+mes+"/"+ano)
        .pipe(
            map(res=>{
                var resposta = res;
                resposta = resposta.reverse();
                
                return  resposta
            })
        )
 }

 getDados(id) {
    return this.http.get(this.conf.url + "/reserva/"+id)
    	.pipe(
            map(res=>res)
        )
 } 

 putDados(reserva){
 	this.reserva = reserva;
 	return this.http.put(this.conf.url + "/reserva/"+this.reserva['id_reserva'], this.reserva,httpOptions).pipe(
            map(res=>res)
        )
 }    
 setDados(reserva){
 	this.reserva = reserva
 	return this.http.post(this.conf.url + "/reserva",  this.reserva).pipe(
            map(res=>res)
        )
	}

}
