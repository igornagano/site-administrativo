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
  constructor(private reservaService: ReservaService,  private router: Router) {

  }

  ngOnInit() {
    
    this.reservas = this.reservaService.getReservasHoje(this.estabelecimento).map((res) =>{
     
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


  intervalFunc() {
    var agora = new Date();
      this.reservas = this.reservaService.getReservasHoje(this.estabelecimento).map((res) =>{
        for(var i in res){
          if(res[i]['situacao'] == "A"){
            var hora_marcada = res[i]['hora_marcada'].split(":");
            var hora = hora_marcada[0];
            var minuto = hora_marcada[1];


            var hora1 = new Date();
            hora1.setHours(hora,minuto,0 ,0);

            if(agora.getTime() > hora.getTime()){
              console.log(res[i]);
            }
          }
        }  
        return res;
    });
      //Reserva.findAll({where: })
  }
  
  setInterval = (this.intervalFunc(),60000);

}
