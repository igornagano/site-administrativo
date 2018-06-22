import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa.service';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-alterar',
  templateUrl: './empresa-alterar.component.html',
  styleUrls: ['./empresa-alterar.component.scss'],
  animations: [routerTransition()]
})
export class EmpresaAlterarComponent implements OnInit {
  model = {}
  
  constructor(private empresaService: EmpresaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.empresaService.getDados(id).subscribe(
                      data => this.model = data);
  }


  onSubmit(){

    if(confirm("Confirmar a Alteração?")){
    this.empresaService.putDados(this.model).subscribe((data)=>{
                    	
                    		alert("Dados alterados com sucesso");
                        this.router.navigate(["/empresa/lista"]);
                    	
                      }, error=>{
                                              alert("Ocorreu um erro")

                      });;
        }
      }
}
