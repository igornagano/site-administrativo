import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../../model/estabelecimento';
import { EstabelecimentoService } from '../../service/estabelecimento.service';
import { ColaboradorService } from '../../service/colaborador.service';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estab-altera',
  templateUrl: './estab-altera.component.html',
  styleUrls: ['./estab-altera.component.scss'],
  animations: [routerTransition()]
})
export class EstabAlteraComponent implements OnInit {

  model = {}
  valores = {}
  constructor(private estabelecimentoService: EstabelecimentoService, private colaboradorService: ColaboradorService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  	this.estabelecimentoService.getDados(id).subscribe(
                      data => this.model = data);

    this.estabelecimentoService.getPreco(id).subscribe(
      (valor=>{
        this.valores = valor[0];
        var hora = parseInt(this.valores['hora']);
        this.valores['hora'] = this.stringHora(Math.floor(hora/60))+":"+this.stringHora(hora%60);
        this.valores['valor'] = this.numberToReal(this.valores['valor']);
      }), error=>{
        alert("Ocorreu um erro ao carregar os valores")
      });
  }

  numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
 }
 stringHora(numero){
  var str = "" + numero;
  var pad = "00";
  var ans = pad.substring(0, pad.length - str.length) + str;
  return ans
 }
  onSubmit(){

        if(confirm("Confirmar a Alteração?")){
        this.estabelecimentoService.putDados(this.model).subscribe(data=>{
        this.estabelecimentoService.putPreco(this.valores).subscribe(valor=>{
            alert("Dados alterados com sucesso");
            this.router.navigate(["/estabelecimento/lista"]);
      }, error=>{
                alert("Ocorreu um erro")
    })
    }, error=>{
                alert("Ocorreu um erro")
    });
    }
  }
  deletar(){
    if(confirm("Deseja deletar esse Estabelecimento?")){
      this.estabelecimentoService.deletar(this.model['id_estabelecimento']).subscribe(res=>{
          this.colaboradorService.getEstabelecimento(this.model['id_estabelecimento']).subscribe(colaboradores=>
          {
            for(var colab in colaboradores){
               this.colaboradorService.deletar(colaboradores[colab]['id_colaborador']).subscribe(res=>{
                
                },error=>{
                  
                })
            }
          }, error=>{

          })

          alert("Estabelecimento deletado com sucesso");
            this.router.navigate(["/estabelecimento/lista"]);
      }, error=>{
        alert("Ocorreu um erro")
      })
    }
  }
}
