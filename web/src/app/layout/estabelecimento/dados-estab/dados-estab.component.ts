import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { Estabelecimento } from '../../model/estabelecimento';
import { routerTransition } from '../../../router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dados-estab',
  templateUrl: './dados-estab.component.html',
  styleUrls: ['./dados-estab.component.scss'],
  animations: [routerTransition()]
})
export class DadosEstabComponent implements OnInit {
  gestor = localStorage.getItem("gestor");

	dados={};
  estabelecimento = localStorage.getItem("estabelecimento");
  model = new Estabelecimento('','','','','','','');
  
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  pegardados(){
    console.log(this.dados);
  }

  constructor(private http: HttpClient,private estabelecimentoService: EstabelecimentoService,public router: Router) {
    if(this.gestor == undefined){
        router.navigate(["/not-found"]);
    }
  }

 ngOnInit(): void {
       this.estabelecimentoService.getDados(this.estabelecimento).subscribe(
                      data => this.dados = data)
  		 /*this.http.get("http://localhost:8000/cliente/usuario/teste2@teste.com").subscribe(data => {
          console.log(data);
  	  		this.dados = data;
  	  })*/
  	}
}
