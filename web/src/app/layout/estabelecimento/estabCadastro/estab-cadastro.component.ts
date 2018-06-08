import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../model/estabelecimento';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estab-cadastro',
  templateUrl: './estab-cadastro.component.html',
  styleUrls: ['./estab-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class EstabCadastroComponent implements OnInit {
  model = new Estabelecimento('','','1','','');

  submitted = false;


  onSubmit(){
    console.log(this.model);
    //this.estabelecimentoService.setDados(this.model);
      
     if(confirm("Confirmar o Cadastro?")){
      this.estabelecimentoService.setDados(this.model).subscribe((res) =>
      {
        alert("Cadastro realizado");
        this.router.navigate(["/estabelecimento/dados"]);
      }, error => {
          alert("Ocorreu um erro!");
          //this.router.navigate(["/estabelecimento/lista"]);
      })
    }
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private estabelecimentoService: EstabelecimentoService, private route: ActivatedRoute,  private router: Router) {
   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
