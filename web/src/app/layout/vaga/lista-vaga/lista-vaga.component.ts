import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga';
import { VagaService } from '../../service/vaga.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 

@Component({
  selector: 'app-lista-vaga',
  templateUrl: './lista-vaga.component.html',
  styleUrls: ['./lista-vaga.component.scss'],
  animations: [routerTransition()]
})
export class ListaVagaComponent implements OnInit {

  model
  estabelecimento = localStorage.getItem("estabelecimento");
  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private vagaService: VagaService) {
  }

  ngOnInit() {
  		this.model = this.vagaService.getestabelecimento(this.estabelecimento).map(res => res);
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
