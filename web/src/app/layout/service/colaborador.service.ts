import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Colaborador } from '../model/colaborador';
import { Conf } from "./conf";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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

  constructor(private http: HttpClient, private conf: Conf) { 

  }

 getDados(id) {
    //return this.http.get("ec2-18-231-173-45.sa-east-1.compute.amazonaws.com:8000/colaborador/"+id)
    return this.http.get(this.conf.url + "/colaborador/"+id)
    	.pipe(
            map(res=>res) 
        )
 } 


 login(email, senha) {
    //return this.http.get("ec2-18-231-173-45.sa-east-1.compute.amazonaws.com:8000/colaborador/"+id)
    var dados = {
        'email': email,
        'senha': senha
    }
    return this.http.post(this.conf.url + "/colaborador/usuario/login", dados)
        .pipe(
            map(res=>res)
        )
 } 
 getAll() {
    return this.http.get(this.conf.url + "/colaborador")
    	.pipe(
            map(res=>res) 
        )
 } 
 getEstabelecimento(estabelecimento) {
    return this.http.get(this.conf.url + "/colaborador/estabelecimento/"+estabelecimento)
        .pipe(
            map(res=>res) 
        )
 } 
 getEmpresa(empresa) {
    return this.http.get(this.conf.url + "/colaborador/empresa/"+empresa)
        .pipe(
            map(res=>res) 
        )
 }

 putDados(colaborador){
 	var colab  = {
        'id_colaborador': colaborador['id_colaborador'],
        'id_empresa': colaborador['id_empresa'],
        'id_estabelecimento': colaborador['id_estabelecimento'],
        'id_usuario': colaborador['Usuarios']['id_usuario'],
        'nome': colaborador['Usuarios']['nome'],
        'email': colaborador['Usuarios']['email'],
        'senha': colaborador['Usuarios']['senha'],
        'cpf': colaborador['Usuarios']['cpf'],  
        'telefone': colaborador['Usuarios']['telefone']
    };
 	return this.http.put(this.conf.url + "/colaborador/"+colab['id_colaborador'],colab,httpOptions)
        .pipe(
            map(res=>res)
        )
 }    
 setDados(colaborador, gestor){
    this.colaborador['nome'] = colaborador.nome;
    this.colaborador['email'] = colaborador.email;
    this.colaborador['senha'] = colaborador.senha;
    this.colaborador['cpf'] = colaborador.cpf;
    this.colaborador['telefone'] = colaborador.telefone;
    this.colaborador['id_empresa'] = colaborador['id_empresa'];
    this.colaborador['id_estabelecimento']= colaborador['id_estabelecimento'];
    this.colaborador['gestor']= gestor;

   return this.http.post(this.conf.url + "/colaborador",  this.colaborador)
        .pipe(
            map(res=>{
                if(gestor == "S"){
                    var dados = {
                        "id_colaborador":res['id_colaborador']
                    }
                    this.http.post(this.conf.url + "/gestor",dados).subscribe(resposta=>{})
                }
                
                return res
            })
        )
    }
 deletar(id) {
    return this.http.delete(this.conf.url + "/colaborador/"+id)
        .pipe(
            map(res=>res) 
        )
 } 
}
