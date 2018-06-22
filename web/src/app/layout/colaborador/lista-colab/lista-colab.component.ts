import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 

@Component({
  selector: 'app-lista-colab',
  templateUrl: './lista-colab.component.html',
  styleUrls: ['./lista-colab.component.scss'],
  animations: [routerTransition()]
})
export class ListaColabComponent implements OnInit {

  empresa = localStorage.getItem("empresa");
  estabelecimento = localStorage.getItem("estabelecimento");
  model

  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private colaboradorService: ColaboradorService) {
  }

  ngOnInit() {
  		this.model = this.colaboradorService.getAll().map(res => res);
  }

  print(){
    console.log(JSON.stringify(this.model));
  }
}
