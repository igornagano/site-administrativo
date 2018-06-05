import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../model/estabelecimento';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-estab-cadastro',
  templateUrl: './estab-cadastro.component.html',
  styleUrls: ['./estab-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class EstabCadastroComponent implements OnInit {
  model = new Estabelecimento('','','','','');

  submitted = false;


  onSubmit(){
    console.log(this.model);
    this.estabelecimentoService.setDados(this.model);
      
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private estabelecimentoService: EstabelecimentoService) {
   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
