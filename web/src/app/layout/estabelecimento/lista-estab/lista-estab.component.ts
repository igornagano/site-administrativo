import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../model/estabelecimento';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 

@Component({
  selector: 'app-lista-estab',
  templateUrl: './lista-estab.component.html',
  styleUrls: ['./lista-estab.component.scss'],
  animations: [routerTransition()]
})
export class ListaEstabComponent implements OnInit {

  model

  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private estabelecimentoService: EstabelecimentoService) {
  }

  ngOnInit() {
  		this.model = this.estabelecimentoService.getAll().map(res => res);
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
