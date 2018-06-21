import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../model/empresa';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
  animations: [routerTransition()]
})
export class DadosComponent implements OnInit {

 	dados={};
  //model = new Empresa('Teste Nome', 'Teste Email', 'Teste CPF', 'Teste Telefone','Nome Fantasia', 
   // 'Nome Proprietario', 'CNPJ');
   empresa = localStorage.getItem('empresa');
   model = new Empresa('','','','','','','');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  pegardados(){
    console.log(this.dados);
  }
  constructor(private http: HttpClient,private empresaService: EmpresaService) {
  }
 	
  ngOnInit(): void {
       this.empresaService.getDados(this.empresa).subscribe(
                      data => this.dados = data)
  		 /*this.http.get("http://localhost:8000/cliente/usuario/teste2@teste.com").subscribe(data => {
          console.log(data);
  	  		this.dados = data;
  	  })*/
  	}
}
  