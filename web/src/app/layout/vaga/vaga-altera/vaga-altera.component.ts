import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga';
import { VagaService } from '../../service/vaga.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vaga-altera',
  templateUrl: './vaga-altera.component.html',
  styleUrls: ['./vaga-altera.component.scss'],
  animations: [routerTransition()]
})
export class VagaAlteraComponent implements OnInit {

  model = {}
  
  constructor(private vagaService: VagaService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.vagaService.getDados(id).subscribe(
                      data => this.model = data);
  }

  onSubmit(){
    this.vagaService.putDados(this.model).subscribe(
                    
                      function(data){
                    	if(data == this.model){
                    		alert("Dados alterados com sucesso");
                        // this.router.navigate(["/vaga/dados"]);
                    	}else{
                    		alert("Ocorreu um erro")
                    	}
                    });;
    }
  }

