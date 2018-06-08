import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { ReservaService } from '../../service/reserva.service';
import { ClienteService } from '../../service/cliente.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.scss'],
   animations: [routerTransition()]
})
export class ListaReservaComponent implements OnInit {
  usuario = null;
  reservas = null;
  dados = {
    numero: ""
    }
    situacao = {
    'A': "Aguardando",
    'E': "Em Andamento",
    'C': "Cancelado",
    'F': "Finalizado"
  }
  constructor(private reservaService: ReservaService,  private router: Router) { }

  ngOnInit() {
    
    this.reservas = this.reservaService.getReservasHoje("3").map((res) =>{
          
        return res;
    });
    
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

}
