import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { ReservaService } from '../../service/reserva.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 

@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.scss'],
  animations: [routerTransition()]
})
export class ListaReservaComponent implements OnInit {

  model

  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private reservaService: ReservaService) {
  }

  ngOnInit() {
  		this.model = this.reservaService.getAll().map(res => res);
  }

  print(){
    console.log(JSON.stringify(this.model));
  }


}
