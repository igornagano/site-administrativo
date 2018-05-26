import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { VagaService } from '../../service/vaga.service';
import { Vaga } from '../../model/vaga';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-dados-vaga',
  templateUrl: './dados-vaga.component.html',
  styleUrls: ['./dados-vaga.component.scss'],
  animations: [routerTransition()]
})
export class DadosVagaComponent implements OnInit {

  dados={};
  model = new Vaga('','','','','');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  pegardados(){
    console.log(this.dados);
  }

  constructor(private http: HttpClient,private vagaService: VagaService) {
  }

 ngOnInit(): void {
       this.vagaService.getDados('1').subscribe(
                      data => this.dados = data)
  		 /*this.http.get("http://localhost:8000/cliente/usuario/teste2@teste.com").subscribe(data => {
          console.log(data);
  	  		this.dados = data;
  	  })*/
  	}

}
