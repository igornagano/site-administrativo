import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colab-altera',
  templateUrl: './colab-altera.component.html',
  styleUrls: ['./colab-altera.component.scss'],
  animations: [routerTransition()]
})
export class ColabAlteraComponent implements OnInit {
 colaborador = localStorage.getItem('colaborador');
 gestor = localStorage.getItem('gestor');
 estabelecimento = localStorage.getItem('estabelecimento');
 empresa = localStorage.getItem('empresa');
 proprietario = localStorage.getItem('proprietario');
 estabelecimentos
 model = {}

 senhas = {
  'confsenha':""
 }
  
  constructor(private colaboradorService: ColaboradorService, private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute, private router: Router){ 
  }

  ngOnInit() {
     if(this.gestor == undefined){
          this.colaboradorService.getDados(this.colaborador).subscribe(
                      data => {
                        console.log(data);
                        this.model = data
                      })
   } else{
    var id = this.route.snapshot.paramMap.get('id');
    this.colaboradorService.getDados(id).subscribe(
                      data => {
                        console.log(data);
                        this.model = data;
                        if(this.model['Gestor']['proprietario'] == "S" && id != this.colaborador){
                          alert("Você não tem permissão para alterar esse usuário");
                           this.router.navigate(["/reservas/lista"]); 
                        }
                      })
   }
    if(this.proprietario == "S")
      this.estabelecimentoService.getEmpresa(this.empresa).subscribe(
                      data => this.estabelecimentos = data);
  }

  onSubmit(){

    if(this.model['Usuarios']['senha'] != this.model['Usuarios']['confsenha']){
          alert("Senhas diferentes");
          return false
        }


    if(confirm("Confirmar Alteração?")){
     this.colaboradorService.putDados(this.model).subscribe(
                   (data)=>{
                        alert("Dados alterados com sucesso");
                        this.router.navigate(["/colaborador/dados"]); 
                    }, error=>{
                        alert("Ocorreu um erro alteração")
                    });
    }
  }

  deletar(){
    if(confirm("Deseja deletar esse colaborador?")){
      this.colaboradorService.deletar(this.model['id_colaborador']).subscribe(res=>
      {
         alert("Colaborador excluido");
         this.router.navigate(["/reservas/lista"]); 
      },error => {
        alert("Ocorreu um erro deletar");
      });
    }
  }

  formatTel(){
    this.model['Usuarios']['telefone'] = this.mtel(this.model['Usuarios']['telefone']);
  }

  mtel(v){
     v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
     v=v.replace(/^(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3");
     v=v.replace(/^(\d{2})(\d{4})(\d)/g,"($1) $2-$3");
     v=v.replace(/^(\d{2})(\d{1})/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
   //Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }
}

