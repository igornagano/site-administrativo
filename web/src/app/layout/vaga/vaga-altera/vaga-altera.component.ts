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
     if(confirm("Confirmar a Alteração?")){
    this.vagaService.putDados(this.model).subscribe(
                     (data)=>{
                    		alert("Dados alterados com sucesso");
                        this.router.navigate(["/vaga/lista"]);
                    }, error=>{
                          alert("Ocorreu um erro")
                    });
          }
    }

    deletar(){
      if(confirm("Deseja deletar essa vaga?")){
      this.vagaService.delet(this.model['id_vaga']).subscribe(res=>
      {
        alert("Vaga excluida");
        this.router.navigate(["/reservas/lista"]);
      }, error => {
          alert("Ocorreu um erro!");
          //this.router.navigate(["/estabelecimento/lista"]);
      });
    }
  }
}
