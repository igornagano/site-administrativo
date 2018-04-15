import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
import { routerTransition } from '../../../router.animations';

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
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private colaboradorService: ColaboradorService) {
   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
