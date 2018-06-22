import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { ReservaService } from '../../service/reserva.service';
import { ClienteService } from '../../service/cliente.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.scss'],
   animations: [routerTransition()]
})
export class ListaReservaComponent implements OnInit {
  usuario = null;
  reservas = null;
  estabelecimento = localStorage.getItem("estabelecimento");
  dados = {
    numero: ""
    }
    situacao = {
    'A': "Aguardando",
    'E': "Em Andamento",
    'C': "Cancelado",
    'F': "Finalizado"
  }
  constructor(private reservaService: ReservaService, private router: Router) {

  }

  ngOnInit() {
    
    this.reservas = this.reservaService.getReservasHoje(this.estabelecimento).map((res) =>{
     
        return res;
    });
    var interval = setInterval( () => { this.intervalFunc(); },60000);
    
  }
  
  onSubmit(){
    
      var numero = parseInt(this.dados.numero);
      if(isNaN(numero)){
      alert("Número inválido");
      return false      
      }

      this.reservaService.getDados(numero).subscribe((res)=>{
          this.router.navigate(['/reservas',numero]);
        },
         error => {
          alert("Reserva não encontrada");
          return false 
         });
    

    return false
  }


  intervalFunc() {

    var agora = new Date();
      this.reservas = this.reservaService.getReservasHoje(this.estabelecimento).map((res) =>{  
        return res;
    });
  }
  
  

}
