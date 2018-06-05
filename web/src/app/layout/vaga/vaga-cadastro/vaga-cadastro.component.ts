import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga';
import { VagaService } from '../../service/vaga.service';
import { routerTransition } from '../../../router.animations';
import { SensorService} from '../../service/sensor.service';


@Component({
  selector: 'app-vaga-cadastro',
  templateUrl: './vaga-cadastro.component.html',
  styleUrls: ['./vaga-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class VagaCadastroComponent implements OnInit {

  model = new Vaga('2','','','','');

  submitted = false;


  onSubmit(){
    this.vagaService.setDados(this.model).subscribe((res)=>
    {
      var id = res['id_vaga'];
      var dados = {
        id_vaga: id
      }
        alert("Cadastrado com Sucesso");
    });
  }

  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private vagaService: VagaService , private sensorService: SensorService) {


   }

  ngOnInit() {   
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
