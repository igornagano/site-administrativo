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
  empresa = localStorage.getItem('empresa');
  proprietario = localStorage.getItem('proprietario');
  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private estabelecimentoService: EstabelecimentoService) {
  }

  ngOnInit() {
  		this.model = this.estabelecimentoService.getEmpresa(this.empresa).map(res => res);
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
