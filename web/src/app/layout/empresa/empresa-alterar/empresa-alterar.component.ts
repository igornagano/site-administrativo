import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa.service';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { ColaboradorService } from '../../service/colaborador.service';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-alterar',
  templateUrl: './empresa-alterar.component.html',
  styleUrls: ['./empresa-alterar.component.scss'],
  animations: [routerTransition()]
})
export class EmpresaAlterarComponent implements OnInit {
  model
  
  constructor(private empresaService: EmpresaService,private estabelecimentoService: EstabelecimentoService, private colaboradorService: ColaboradorService,  private route: ActivatedRoute, private router: Router) { }
  
  empresa = localStorage.getItem('empresa');
  proprietario = localStorage.getItem('proprietario');
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.empresaService.getDados(id).subscribe(
                      data => this.model = data);
  }


  onSubmit(){

    if (this.validador() == false){
        return false
      }

    if(confirm("Confirmar a Alteração?")){
    this.empresaService.putDados(this.model).subscribe((data)=>{
                    		alert("Dados alterados com sucesso");
                        this.router.navigate(["/empresa/lista"]);
                      }, error=>{
                           alert("Ocorreu um erro")
                      });;
              }
          }

  deletar(){
    if(confirm("Deseja deletar essa Empresa?")){
      this.estabelecimentoService.getEmpresa(this.model['id_empresa']).subscribe(res=>{
        for(var estabelecimento in res){
            this.estabelecimentoService.deletar(res[estabelecimento]['id_estabelecimento']).subscribe(estab_colab=>{
            })
        }
          this.empresaService.deletar(this.model['id_empresa']).subscribe(res=>{
               this.colaboradorService.getEmpresa(this.model['id_empresa']).subscribe(colaboradores=>
                {
                  for(var colab in colaboradores){
                     this.colaboradorService.deletar(colaboradores[colab]['id_colaborador']).subscribe(res=>{
                      
                      },error=>{
                        
                      })
                  }
                }, error=>{

                })
                        alert("Empresa deletado com sucesso");
                        this.router.navigate(["/empresa/lista"]); 
          },error=>{
            alert("Ocorreu um erro")
          })
          })
    }
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
    if (this.model.cnpj == "") {
      alert("Preencha o campo CNPJ");
      return false
    }
  }

  formatCnpj(){
    this.model.cnpj = this.mcnpj(this.model.cnpj);
  }

  mcnpj(v) {
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "$1.$2");//Coloca . após 3 numeros
    v = v.replace(/^(\d{2}).(\d{3})(\d)/g, "$1.$2.$3"); // colca o segundo . após 6 numeros
    v = v.replace(/^(\d{2}).(\d{3}).(\d{3})(\d)/g, "$1.$2.$3/$4");    //Coloca hífen após 9 numeros
    v = v.replace(/^(\d{2}).(\d{3}).(\d{3})\/(\d{4})(\d{1,2})/g, "$1.$2.$3/$4-$5");
    return v;
  }

}
