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

  empresa = localStorage.getItem('empresa');
  valores = localStorage.getItem('valor');
  model = new Estabelecimento('','',this.empresa,'','','','');

  submitted = false;


  onSubmit(){

    if(this.validador() == false){
        return false
      }

     if(confirm("Confirmar o Cadastro?")){
      this.estabelecimentoService.setDados(this.model).subscribe((res) =>
      {
        alert("Cadastro realizado");
        this.router.navigate(["/estabelecimento/lista"]);
      }, error => {
          alert("Ocorreu um erro cadastro!");
          //this.router.navigate(["/estabelecimento/lista"]);
      })
    }
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private estabelecimentoService: EstabelecimentoService, private route: ActivatedRoute,  
    private router: Router) {
   }

  ngOnInit() {   
  }

  validador(){
    if (this.model.unidade == "") {
      alert("Preencha o campo Unidade");
      return false
    }
    if (this.model.endereco == "") {
      alert("Preencha o campo Endereço");
      return false
    }
    if (this.model.horario_inicio == "") {
      alert("Preencha o campo Horario de Inicio");
      return false
    }
    if (this.model.horario_fim == "") {
      alert("Preencha o campo Harario de Fechamento");
      return false
    }
    if (this.model.hora == "") {
      alert("Preencha o campo Cobrar a cada");
      return false
    }    
    if (this.model.valor_hora == "") {
      alert("Preencha o campo Valor da Hora");
      return false
    }
  }

  formatPreco(){
    this.model.valor_hora = this.mmoney(this.model.valor_hora);
  }

  mmoney(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d+)(\d{2})/g,"$1,$2");
    return v;
  }
  
  print(){
    console.log(JSON.stringify(this.model));
  }

}
