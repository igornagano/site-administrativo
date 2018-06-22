import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colab-cadastro',
  templateUrl: './colab-cadastro.component.html',
  styleUrls: ['./colab-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class ColabCadastroComponent implements OnInit {
  
 colaborador = localStorage.getItem('colaborador');
 estabelecimento = localStorage.getItem('estabelecimento');
 empresa = localStorage.getItem('empresa');
 gestor = localStorage.getItem('gestor');
 proprietario = localStorage.getItem('proprietario');
 model = new Colaborador('','','','','',this.empresa,'',this.estabelecimento);
 estabelecimentos
 senhas = {
  'confsenha':""
 }
  submitted = false;

  onSubmit(){
    //this.colaboradorService.setDados(this.model);

    //if( #senha] === #confsenha){
      if (this.validador() == false){
        return false
      }

        if(this.model.senha != this.senhas.confsenha){
          alert("Senhas diferentes");
          return false
        }
        if(confirm("Confirmar o Cadastro?")){
          this.colaboradorService.setDados(this.model).subscribe((res) =>
          {
            alert("Cadastro realizado");
            this.router.navigate(["/colaborador/lista"]);
          }, error => {
              alert("Ocorreu um erro!");
              //this.router.navigate(["/estabelecimento/lista"]);
          })
        }
    }
    //else{
      //   alert("Senhas não são iguais")
    //}
  

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private colaboradorService: ColaboradorService,private estabelecimentoService: EstabelecimentoService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {   
    if(this.proprietario == "S")
      this.estabelecimentoService.getEmpresa(this.empresa).subscribe(
                      data => this.estabelecimentos = data);
  }
  validador(){
    if (this.model.nome == "") {
      alert("Preencha o campo Nome");
      return false
    }
    
  }
  print(){
    console.log(JSON.stringify(this.model));
  }

}
