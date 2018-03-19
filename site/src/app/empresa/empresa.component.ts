import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario';
import { FormularioService } from '../formulario.service';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  model = new Formulario('Teste Nome', 'Teste Email', 'Teste CPF', 'Teste Telefone','Nome Fantasia', 'Nome Proprietario', 'CNPJ');

  submitted = false;

  onSubmit(){
    this.formularioService.setDados(this.model);
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private formularioService: FormularioService) {
      
   }

  ngOnInit() {
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
