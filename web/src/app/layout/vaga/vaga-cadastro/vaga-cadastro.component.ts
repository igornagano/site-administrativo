import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga';
import { VagaService } from '../../service/vaga.service';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-vaga-cadastro',
  templateUrl: './vaga-cadastro.component.html',
  styleUrls: ['./vaga-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class VagaCadastroComponent implements OnInit {

  model = new Vaga('3','','','','');

  submitted = false;


  onSubmit(){
    this.vagaService.setDados(this.model);
    console.log('erro component')
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private vagaService: VagaService) {
   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
