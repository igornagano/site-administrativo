import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { FormularioService } from '../formulario.service';
import { Formulario } from '../formulario';

const headers = new HttpHeaders().set('Authorization', 'secret');
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
 	dados={};
  model = new Formulario('Teste Nome', 'Teste Email', 'Teste CPF', 'Teste Telefone','Nome Fantasia', 'Nome Proprietario', 'CNPJ');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get pegardados(){
    return JSON.stringify(this.model);
  }
  constructor(private http: HttpClient) {
   		
   		
   	}
 	
  	ngOnInit(): void {
  		 this.http.get("http://localhost:8000/cliente/usuario/teste2@teste.com").subscribe(data => {
          console.log(data);
  	  		this.dados = data;
  	  })
  	}


}
