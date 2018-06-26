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
 getEmpresa(id) {
    return this.http.get(this.conf.url + "/estabelecimento/empresa/"+id)
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

 getPreco(estabelecimento){
        return this.http.get(this.conf.url + "/valores/estabelecimento/"+
            estabelecimento)
        .pipe(
            map(res=>{
                return res
            })
        )
    }

    deletar(id) {
    return this.http.delete(this.conf.url + "/estabelecimento/"+id)
        .pipe(
            map(res=>res)
        )
    } 

    
 setDados(estabelecimento){
 	this.estabelecimento ={
        'unidade': estabelecimento['unidade'],
        'endereco': estabelecimento['endereco'],
        'horario_inicio': estabelecimento['horario_inicio'],
        'horario_fim': estabelecimento['horario_fim'],
        'id_empresa': estabelecimento['id_empresa']
    };
    	return this.http.post(this.conf.url + "/estabelecimento",this.estabelecimento)
        .pipe(
            map(res=>{
                    var hora = estabelecimento['hora'].split(":");
                    var tempo = parseInt(hora[0])*60 + parseInt(hora[1]);                 
                    var dados = {
                        "id_estabelecimento":res['id_estabelecimento'],
                        "valor":estabelecimento['valor_hora'].replace(",","."),
                        "hora": tempo
                    }
                    res['Valores'] = this.http.post(this.conf.url + "/valores",dados).subscribe(resposta=>{
                            return resposta;
                    }, error=>{
                        return null
                    });

                    return res
                })
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

    putPreco(valor){
     var hora = valor['hora'].split(":");
     var tempo = parseInt(hora[0])*60 + parseInt(hora[1]);
     var dados = {
                        "id_estabelecimento":valor['id_estabelecimento'],
                        "valor":valor['valor'].replace(",","."),
                        "hora": tempo
                    }        
        return this.http.put(this.conf.url + "/valores/"+
            valor['id_valores'], dados)
        .pipe(
            map(res=>res)
        )
    }
}
