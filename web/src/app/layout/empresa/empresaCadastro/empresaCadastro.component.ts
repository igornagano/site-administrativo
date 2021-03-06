import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa.service';
import { routerTransition } from '../../../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresaCadastro.component.html',
  styleUrls: ['./empresaCadastro.component.css'],
  animations: [routerTransition()]
})
export class EmpresaCadastroComponent implements OnInit {
  model = new Empresa('','','','','','','');

  submitted = false;

  onSubmit(){

    if (this.validador() == false){
        return false
      }


    if(confirm("Deseja registrar essa Empresa?")){
     
    this.empresaService.setDados(this.model).subscribe((res)=>{
      var usuario = {};
      usuario['id_empresa'] = ""+res['id_empresa'];
      usuario['nome'] = this.model.nomeProprietario;
      usuario['cpf'] = this.model.cpf;
      usuario['email'] = this.model.email;
      usuario['telefone'] = this.model.telefone;
      usuario['senha'] = "teste123456";
      console.log(usuario);
      this.empresaService.setColaborador(usuario).subscribe((res_colab)=>{
          var gestor = {};
          gestor['id_colaborador'] = res_colab['id_colaborador'];
          gestor['proprietario']  = "S";
          this.empresaService.setGestor(gestor).subscribe((res_gestor)=>{
              alert("Cadastrado com sucesso");
               this.router.navigate(["/empresa/lista"]);
          });
      })      
    }, error=>{
      alert("Ocorreu um erro");
    });
    }
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private empresaService: EmpresaService , private router: Router) {
   }

  ngOnInit() {
  }

  validador(){
    if (this.model.nome == "") {
      alert("Preencha o campo Nome");
      return false
    }
    if (this.model.nomeFantasia == "") {
      alert("Preencha o campo Nome Fantasia");
      return false
    }
    if (this.model.email == "") {
      alert("Preencha o campo E-mail");
      return false
    }
    if (this.model.cnpj == "") {
      alert("Preencha o campo CNPJ");
      return false
    }
    if (this.model.telefone == "") {
      alert("Preencha o campo Telefone");
      return false
    }
    if (this.model.nomeProprietario == "") {
      alert("Preencha o campo Nome do Proprietario");
      return false
    }    
    if (this.model.cpf == "") {
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

  formatCnpj(){
    this.model.cnpj = this.mcnpj(this.model.cnpj);
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

  mcnpj(v) {
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "$1.$2");//Coloca . após 3 numeros
    v = v.replace(/^(\d{2}).(\d{3})(\d)/g, "$1.$2.$3"); // colca o segundo . após 6 numeros
    v = v.replace(/^(\d{2}).(\d{3}).(\d{3})(\d)/g, "$1.$2.$3/$4");    //Coloca hífen após 9 numeros
    v = v.replace(/^(\d{2}).(\d{3}).(\d{3})\/(\d{4})(\d{1,2})/g, "$1.$2.$3/$4-$5");
    return v;
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
