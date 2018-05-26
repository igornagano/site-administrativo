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
    usuario = {};

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
    //return this.http.get("ec2-18-231-173-45.sa-east-1.compute.amazonaws.com:8000/colaborador/"+id)
    return this.http.get("http://localhost:8000/colaborador/"+id)
    	.pipe(
            map(res=>res) 
        )
 } 

 getAll() {
    console.log("aqui")
    return this.http.get("http://localhost:8000/colaborador")
    	.pipe(
            map(res=>res) 
        )
 } 

 putDados(colaborador){
 	this.colaborador = colaborador;
 	return this.http.put("http://localhost:8000/colaborador/"+this.colaborador['id_colaborador'],this.colaborador,httpOptions)
        .pipe(
            map(res=>res)
        )
 }    
 setDados(colaborador){
    this.colaborador['nome'] = colaborador.nome;
    this.colaborador['email'] = colaborador.email;
    this.colaborador['senha'] = colaborador.senha;
    this.colaborador['cpf'] = colaborador.cpf;
    this.colaborador['telefone'] = colaborador.telefone;
    
   return this.http.post("http://localhost:8000/colaborador",  this.colaborador).subscribe(data => {
        this.colaborador['id_colaborador'] = data['id_colaborador'];
        this.http.post("http://localhost:8000/colaborador", this.usuario,httpOptions).subscribe(data => {
        this.gestor['id_colaborador'] = data['id_colaborador'];
        this.http.post("http://localhost:8000/gestor", this.gestor,httpOptions).subscribe(data => {

            });
        });
    });
    }
}
