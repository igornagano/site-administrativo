import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa.service';
import { routerTransition } from '../../../router.animations';

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
          });
      })

      
    }, error=>{
      alert("Ocorreu um erro");
    });
 
    }
    /*this.empresaService.setDados(this.model).subscribe((res)=>
    {
          alert("Cadastrado com Sucesso");
    });*/
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private empresaService: EmpresaService) {
   }

  ngOnInit() {
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
