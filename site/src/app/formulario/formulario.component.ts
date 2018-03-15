import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { FormularioService } from '../formulario.service';
const headers = new HttpHeaders().set('Authorization', 'secret');
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
 	dados={
 		'email': '',
 		'cpf': '',
 		'telefone':''
 	};
 	constructor(private http: HttpClient) {
   		
   		
   	}
 	
  	ngOnInit(): void {
  		 this.http.get("http://localhost:8000/cliente/usuario/teste2@teste.com").subscribe(data => {
  	  		this.dados = data;
  	  })
  	}


}
