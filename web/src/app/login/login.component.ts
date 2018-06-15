import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { ColaboradorService } from '../layout/service/colaborador.service';
import { GestorService } from '../layout/service/gestor.service';
import { Colaborador } from '../layout/model/colaborador';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
	dados = {
		email: "",
		senha: ""
	}
    constructor(public router: Router, private colaboradorService: ColaboradorService,private gestorService: GestorService) {}

    ngOnInit() {}

    onLoggedin() {
        this.colaboradorService.login(this.dados.email, this.dados.senha).subscribe((res=>{
        	
        	if(res['erro'] == undefined){

        		localStorage.setItem('isLoggedin', 'true');
        		localStorage.setItem('nome', res['Usuarios']['nome']);
        		localStorage.setItem('empresa', res['id_empresa']);
        		localStorage.setItem('colaborador', res['id_colaborador']);
        		localStorage.setItem('estabelecimento', res['id_estabelecimento']);
        		
        		this.gestorService.getDados(res['id_colaborador']).subscribe((resGestor =>{
        			localStorage.setItem('gestor', resGestor['id_gestor']);
        			localStorage.setItem('proprietario', resGestor['proprietario']);
        			this.router.navigate(["/reserva/lista"]);
        		}), error=>{
        			this.router.navigate(["/reserva/lista"]);
        		})

        		
        	}
        	else{
        		alert("Usuário ou Senha inválidos");
        	}
        }), error =>{
        	alert("Usuário ou Senha inválidos");
        	this.router.navigate(["/login"]);
        })
        //localStorage.setItem('isLoggedin', 'true');

    }
}
