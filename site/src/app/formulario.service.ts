import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Formulario } from './formulario';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FormularioService {
	
	empresa = {};
	usuario = {};
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

  getDados(){
  	  
  }
  setDados(formulario){
  	this.empresa['nome_fantasia'] = formulario.nomeFantasia;
  	this.empresa['razao_social'] = formulario.nome;
  	this.empresa['cnpj'] = formulario.cnpj;

  	this.usuario['nome'] = formulario.nomeProprietario;
  	this.usuario['cpf'] = formulario.cpf;
  	this.usuario['email'] = formulario.email;
  	this.usuario['telefone'] = formulario.telefone;
  	this.usuario['senha'] = "teste123456";

 	this.http.post("http://localhost:8000/empresa",  this.empresa).subscribe(data => {
	    console.log(data);
	    this.usuario['id_empresa'] = data.id_empresa;
	    this.http.post("http://localhost:8000/colaborador", this.usuario,httpOptions).subscribe(data => {
	    	console.log(data);
	    	this.gestor['id_colaborador'] = data['id_colaborador'];
	    	this.http.post("http://localhost:8000/gestor", this.gestor,httpOptions).subscribe(data => {
	    		console.log(data);
			});
		});
	});
	}
}
