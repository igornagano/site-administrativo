import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../model/estabelecimento';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-estab-altera',
  templateUrl: './estab-altera.component.html',
  styleUrls: ['./estab-altera.component.scss'],
  animations: [routerTransition()]
})
export class EstabAlteraComponent implements OnInit {
  model = {}
  
  constructor(private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.estabelecimentoService.getDados(id).subscribe(
                      data => this.model = data);
  }


  onSubmit(){
    this.estabelecimentoService.putDados(this.model).subscribe(
                    function(data){
                    	if(data == this.model){
                    		alert("Dados alterados com sucesso");
                    	}else{
                    		alert("Ocorreu um erro")
                    	}
                      });;
  }
}
