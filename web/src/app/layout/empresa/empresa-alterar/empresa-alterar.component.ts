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
  model = {}
  
  constructor(private empresaService: EmpresaService,private estabelecimentoService: EstabelecimentoService, private colaboradorService: ColaboradorService,  private route: ActivatedRoute, private router: Router) { }
  
  empresa = localStorage.getItem('empresa');
  proprietario = localStorage.getItem('proprietario');
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.empresaService.getDados(id).subscribe(
                      data => this.model = data);
  }


  onSubmit(){

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

}
