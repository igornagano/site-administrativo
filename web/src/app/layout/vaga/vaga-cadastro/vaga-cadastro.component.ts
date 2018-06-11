import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga';
import { VagaService } from '../../service/vaga.service';
import { routerTransition } from '../../../router.animations';
import { SensorService} from '../../service/sensor.service';
import "rxjs/add/operator/map"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaga-cadastro',
  templateUrl: './vaga-cadastro.component.html',
  styleUrls: ['./vaga-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class VagaCadastroComponent implements OnInit {

  model = new Vaga('2','','','','');
  model = new Vaga('3','','','','');

  submitted = false;


  onSubmit(){
    /*this.vagaService.setDados(this.model).subscribe((res)=>
    {
      var id = res['id_vaga'];
      var dados = { id_vaga: id }
            alert("Cadastrado com Sucesso");
    });*/

    if(confirm("Confirmar o Cadastro?")){
      this.vagaService.setDados(this.model).subscribe((res)=>
      {
        var id = res['id_vaga'];
        var dados = { id_vaga: id }
        alert("Cadastro realizado");
        this.router.navigate(["/estabelecimento/dados"]);
      }, error => {
          alert("Ocorreu um erro!");
          //this.router.navigate(["/estabelecimento/lista"]);
      })
    }
  }

   


  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private vagaService: VagaService , private sensorService: SensorService, private route: ActivatedRoute,  private router: Router)
  {


   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
