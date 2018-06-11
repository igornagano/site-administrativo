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

  dados={};
  model = new Colaborador('','','','','','','');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  pegardados(){
    console.log(this.dados);
  }

  constructor(private http: HttpClient,private colaboradorService: ColaboradorService) {
  }

 ngOnInit(): void {
       this.colaboradorService.getDados('1').subscribe(
                      data => this.dados = data)
  	}
}
