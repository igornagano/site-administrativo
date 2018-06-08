import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Empresa } from '../model/empresa';
import { Conf } from "./conf";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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

  constructor(private http: HttpClient, private conf: Conf) { 

  }

 getDados(id) {
    return this.http.get(this.conf.url + "/empresa/"+id)
    	.pipe(
            map(res=>res)
        )
 } 
 getAll() {
    return this.http.get(this.conf.url + "/empresa")
    	.pipe(
            map(res=>res)
        )
 } 

 putDados(empresa){
 	this.empresa = empresa;
 	return this.http.put(this.conf.url + "/empresa/"+this.empresa['id_empresa'], this.empresa,httpOptions)
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

 	    this.http.post(this.conf.url + "/empresa",  this.empresa).subscribe(data => {    
	    this.usuario['id_empresa'] = data['id_empresa'];
	    this.http.post(this.conf.url + "/colaborador", this.usuario,httpOptions).subscribe(data => {
	    this.gestor['id_colaborador'] = data['id_colaborador'];
	    this.http.post(this.conf.url + "gestor", this.gestor,httpOptions).subscribe(data => {
	    		
			});
		});
	});
	}
}
