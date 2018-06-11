import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
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
  model = new Colaborador('','','','','','','');

  submitted = false;

  onSubmit(){
    this.colaboradorService.setDados(this.model);
    console.log('erro');

    /*if(confirm("Confirmar o Cadastro?")){
      this.colaboradorService.setDados(this.model).subscribe((res) =>
      {
        alert("Cadastro realizado");
        this.router.navigate(["/colaborador/dados"]);
      }, error => {
          alert("Ocorreu um erro!");
          //this.router.navigate(["/estabelecimento/lista"]);
      })
    }*/
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private colaboradorService: ColaboradorService, private route: ActivatedRoute,  private router: Router) {
   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
