import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
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
 estabelecimento = localStorage.getItem('estabelecimento');
 empresa = localStorage.getItem('empresa');
  model = {}
  
  constructor(private colaboradorService: ColaboradorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     this.colaboradorService.getDados(this.colaborador).subscribe(
                      data => {
                        console.log(data);
                        this.model = data
                      })
    
  }

  onSubmit(){

    if(confirm("Confirmar Alteração?")){
     this.colaboradorService.putDados(this.model).subscribe(
                    function(data){
                      if(data == this.model){
                        alert("Dados alterados com sucesso");
                        this.router.navigate(["/colaborador/lista"]);
                      }else{
                        alert("Ocorreu um erro")
                      }
                    });
    }
  }
}
