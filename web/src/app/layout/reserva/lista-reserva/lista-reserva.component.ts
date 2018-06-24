import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { ReservaService } from '../../service/reserva.service';
import { SensorService } from '../../service/sensor.service';
import { VagaService } from '../../service/vaga.service';
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
export class ListaReservaComponent implements OnDestroy,OnInit {
  usuario = null;
  reservas = null;
  sensores = 0;

  interval
  numero_reservas = 0;
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
  constructor(private reservaService: ReservaService, private sensorService: SensorService, private vagaService: VagaService,private router: Router) {

  }

  ngOnInit() {
    this.vagaService.getestabelecimento(this.estabelecimento).subscribe((vagas)=>{
      var numero = 0;
      console.log(vagas);
      for(var i in vagas){
        if(vagas[i]['Sensor']['situacao'] == "L"){
          numero += 1;
        }
      }
      this.sensores = numero;
    })
    this.reservas = this.reservaService.getReservasHoje(this.estabelecimento).map((res) =>{
        var numero = 0;
        for(var i in res){
          if(res[i]['situacao'] == "A"){
            numero += 1;
          }
        }
        this.numero_reservas = numero;
        return res;
    });
    
    this.interval = setInterval( () => { this.intervalFunc(); },60000);
    
  }
      ngOnDestroy() {
        // Will clear when component is destroyed e.g. route is navigated away from.
        if(this.interval)
          clearInterval(this.interval);
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
       this.vagaService.getestabelecimento(this.estabelecimento).subscribe((vagas)=>{
      var numero = 0;
      for(var i in vagas){
        if(vagas[i]['Sensor']['situacao'] == "L"){
          numero += 1;
        }
      }
      this.sensores = numero;
    })
      this.reservas = this.reservaService.getReservasHoje(this.estabelecimento).map((res) =>{  
         var numero = 0;
        for(var i in res){
          if(res[i]['situacao'] == "A"){
            numero += 1;
          }
        }
        this.numero_reservas = numero;
        return res;
    });

  }
  
  

}
