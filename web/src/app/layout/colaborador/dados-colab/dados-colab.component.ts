import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ColaboradorService } from '../../service/colaborador.service';
import { Colaborador } from '../../model/colaborador';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-dados-colab',
  templateUrl: './dados-colab.component.html',
  styleUrls: ['./dados-colab.component.scss'],
  animations: [routerTransition()]
})
export class DadosColabComponent implements OnInit {
 colaborador = localStorage.getItem('colaborador');
 estabelecimento = localStorage.getItem('estabelecimento');
 empresa = localStorage.getItem('empresa');
   dados 
 
  onSubmit(){
    }


  constructor(private http: HttpClient, private colaboradorService: ColaboradorService) {
  }

 ngOnInit() {
       this.colaboradorService.getDados(this.colaborador).subscribe(
                      data => this.dados = data)
  	}
}
