import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa.service';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresaCadastro.component.html',
  styleUrls: ['./empresaCadastro.component.css'],
  animations: [routerTransition()]
})
export class EmpresaCadastroComponent implements OnInit {
  model = new Empresa('','','','','','','');

  submitted = false;

  onSubmit(){
    this.empresaService.setDados(this.model);

    /*this.empresaService.setDados(this.model).subscribe((res)=>
    {
          alert("Cadastrado com Sucesso");
    });*/
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private empresaService: EmpresaService) {
   }

  ngOnInit() {
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
