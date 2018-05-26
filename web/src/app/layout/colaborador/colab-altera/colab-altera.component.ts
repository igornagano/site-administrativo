import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../model/colaborador';
import { ColaboradorService } from '../../service/colaborador.service';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-colab-altera',
  templateUrl: './colab-altera.component.html',
  styleUrls: ['./colab-altera.component.scss'],
  animations: [routerTransition()]
})
export class ColabAlteraComponent implements OnInit {

  model = {}
  
  constructor(private colaboradorService: ColaboradorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.colaboradorService.getDados(id).subscribe(
                      data => this.model = data);
  }

  onSubmit(){
    this.colaboradorService.putDados(this.model).subscribe(
                    function(data){
                    	if(data == this.model){
                    		alert("Dados alterados com sucesso");
                    	}else{
                    		alert("Ocorreu um erro")
                    	}
                      });;
  }
}
