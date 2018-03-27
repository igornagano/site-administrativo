import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Empresa } from '../model/empresa';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmpresaService {
	
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

  /*getDados(id){
  	return this.http.get<Empresa>("http://localhost:8000/empresa/"+id, httpOptions);
  }*/
 getDados(id) {
    return this.http.get("http://localhost:8000/empresa/"+id)
    	.pipe(
            map(res=>res)
        )
 } 
     
  setDados(empresa){
  	this.empresa['nome_fantasia'] = empresa.nomeFantasia;
  	this.empresa['razao_social'] = empresa.nome;
  	this.empresa['cnpj'] = empresa.cnpj;

  	this.usuario['nome'] = empresa.nomeProprietario;
  	this.usuario['cpf'] = empresa.cpf;
  	this.usuario['email'] = empresa.email;
  	this.usuario['telefone'] = empresa.telefone;
  	this.usuario['senha'] = "teste123456";

 	this.http.post("http://localhost:8000/empresa",  this.empresa).subscribe(data => {
	    console.log(data);
	    this.usuario['id_empresa'] = data['id_empresa'];
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
