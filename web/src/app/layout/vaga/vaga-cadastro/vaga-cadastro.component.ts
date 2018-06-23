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

  estabelecimento = localStorage.getItem("estabelecimento");
  model = new Vaga(this.estabelecimento,'','','','');

  submitted = false;


  onSubmit(){

    if (this.validador() == false){
        return false
      }

    if(confirm("Confirmar o Cadastro?")){
      this.vagaService.setDados(this.model).subscribe((res)=>
      {
        var id = res['id_vaga'];
        var dados = { id_vaga: id }
        alert("Cadastro realizado");
        this.router.navigate(["/vaga/lista"]);
      }, error => {
          alert("Ocorreu um erro!");
          //this.router.navigate(["/estabelecimento/lista"]);
      })
    }
  }

   
  pegardados(){
    return JSON.stringify(this.model);
  }

  constructor(private vagaService: VagaService , private sensorService: SensorService, 
    private route: ActivatedRoute, private router: Router){
   }

  ngOnInit() {   
  }

  validador(){
    if (this.model.setor == "") {
      alert("Preencha o campo Setor");
      return false
    }
    if (this.model.numero == "") {
      alert("Preencha o campo Número da Vaga");
      return false
    }
    if (this.model.tipo == "") {
      alert("Preencha o campo Tipo");
      return false
    }
  }

  print(){
    console.log(JSON.stringify(this.model));
  }

}
