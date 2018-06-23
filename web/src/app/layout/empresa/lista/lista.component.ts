import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa.service';
import { routerTransition } from '../../../router.animations';
import "rxjs/add/operator/map"; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  animations: [routerTransition()]
})
export class ListaComponent implements OnInit {
  model
  dados
  empresa = localStorage.getItem('empresa');
  colaborador = localStorage.getItem('colaborador');

  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private empresaService: EmpresaService) {
  }

  ngOnInit() {
      if(this.colaborador == "1"){

       this.model = this.empresaService.getAll().map(res => res);
      }else{
        this.empresaService.getDados(this.empresa).subscribe(res=>{
           
           this.dados = {
            id_empresa: res['id_empresa'],
            razao_social: res['razao_social']
          };

        });
      }
    }
  

  print(){
    console.log(JSON.stringify(this.model));
  }

}
