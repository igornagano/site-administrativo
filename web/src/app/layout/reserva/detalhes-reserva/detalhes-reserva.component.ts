import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../model/reserva';
import { ReservaService } from '../../service/reserva.service';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.component.html',
  styleUrls: ['./detalhes-reserva.component.scss'],
  animations: [routerTransition()]
})
export class DetalhesReservaComponent implements OnInit {
  id = null
  preco = 0;
  hora = 0;
  valor = 0;
  reserva = null;
  estabelecimento = localStorage.getItem("estabelecimento");

    situacao = {
    'A': "Aguardando",
    'E': "Em Andamento",
    'C': "Cancelado",
    'F': "Finalizado"
  }

  constructor(private reservaService: ReservaService,private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reservaService.getDados(this.id).subscribe((res) =>{
        this.reserva = res;
        if( this.reserva.situacao === "E"){
          this.calcularPreco();
        }
        if( this.reserva.situacao === "F"){
          this.valor = parseFloat(this.reserva.preco);        }
    });
    
  }
  numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
 }

  calcularPreco(){
    var hora_entrada = new Date(this.reserva.hora_entrada).getTime();
    var now = new Date().getTime();
    var minuto_ms = (1000*60);
    var diferenca = (now - hora_entrada) / minuto_ms;
    
    this.estabelecimentoService.getPreco(this.estabelecimento).subscribe((res) =>
    {
      
      this.preco = res[0].valor;
      this.hora = res[0].hora;

      var quantidade =  Math.ceil((diferenca/(this.hora)));
      
      this.valor = (quantidade * this.preco);
      
    },
    error => {
      console.error("Valores não encontrados")
    })

  }

  efetuarEntrada(){
    var hora = new Date();

    var dados = {
      'id_reserva': this.id,
      'situacao': 'E',
      'hora_entrada': hora
    }
    this.reservaService.putDados(dados).subscribe((res) =>
    {
      alert("Reserva "+ this.id+" está Em Andamento");
      this.router.navigate(["/reservas/lista"]);
    }, error => {
        alert("Ocorreu um erro! Atualize a página.");
    })
  }
  efetuarSaida(){
    var hora = new Date();

    var dados = {
      'id_reserva': this.id,
      'situacao': 'F',
      'hora_saida': hora,
      'preco': this.valor,
      'pago': 'S'
    }
    if(confirm("Confirmar pagamento?")){
      this.reservaService.putDados(dados).subscribe((res) =>
      {
        alert("Reserva "+ this.id+" foi Finalizado");
        this.router.navigate(["/reservas/lista"]);
      }, error => {
          alert("Ocorreu um erro! Atualize a página.");
      })
    }
  }  
}
