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
 dados = {
  'gestor':"N"
 }
  submitted = false;

  onSubmit(){

      if (this.validador() == false){
        return false
      }

        if(this.model.senha != this.senhas.confsenha){
          alert("Senhas diferentes");
          return false
        }
        if(confirm("Confirmar o Cadastro?")){
          this.colaboradorService.setDados(this.model, this.dados.gestor).subscribe((res) =>
          {
            alert("Cadastro realizado");
            this.router.navigate(["/colaborador/lista"]);
          }, error => {
              alert("Ocorreu um erro cadastro!");
              //this.router.navigate(["/estabelecimento/lista"]);
          })
        }
    }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private colaboradorService: ColaboradorService,private estabelecimentoService: EstabelecimentoService,
   private route: ActivatedRoute, private router: Router) {
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
    if (this.model.email == "") {
      alert("Preencha o campo e-mail");
      return false
    }
    if (this.model.senha == "") {
      alert("Preencha o campo Senha");
      return false
    }
    if (this.senhas.confsenha == "") {
      alert("Preencha o campo Confirmar Senha");
      return false
    }
    if (this.model.cpf == "") {
      alert("Preencha o campo CPF");
      return false
    }    
    if (this.model.telefone == "") {
      alert("Preencha o campo Telefone");
      return false
    }
    if (this.model.id_estabelecimento == "") {
      alert("Preencha o campo Estabelecimento");
      return false
    }
    if (this.dados.gestor == "") {
      alert("Preencha o campo CPF");
      return false
    }
  }

  formatCpf(){
    this.model.cpf = this.mcpf(this.model.cpf);
  }

  formatTel(){
    this.model.telefone = this.mtel(this.model.telefone);
  }

  mcpf(v) {
      v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
      v = v.replace(/^(\d{3})(\d)/g, "$1.$2");//Coloca . após 3 numeros
      v = v.replace(/^(\d{3}).(\d{3})(\d)/g, "$1.$2.$3"); // colca o segundo . após 6 numeros
      v = v.replace(/^(\d{3}).(\d{3}).(\d{3})(\d{1,2})/g, "$1.$2.$3-$4");    //Coloca hífen após 9 numeros
     return v;
   }

  mtel(v){
     v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
     v=v.replace(/^(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3");
     v=v.replace(/^(\d{2})(\d{4})(\d)/g,"($1) $2-$3");
     v=v.replace(/^(\d{2})(\d{1})/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
   //Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
