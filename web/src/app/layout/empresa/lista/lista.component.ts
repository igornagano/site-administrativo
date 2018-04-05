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

  submitted = false;

  onSubmit(){
   
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private empresaService: EmpresaService) {
  }

  ngOnInit() {
  		this.model = this.empresaService.getAll().map(res => res);
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
