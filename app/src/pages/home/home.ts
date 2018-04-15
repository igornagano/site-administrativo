import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClienteServiceProvider } from '../../providers/cliente-service/cliente-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 providers: [ClienteServiceProvider]
})

export class HomePage {

  constructor(public navCtrl: NavController, public clienteServiceProvider: ClienteServiceProvider) {
  	this.getCliente();
  }

  cliente: any;

  getCliente() {
  this.clienteServiceProvider.getUsers()
  .subscribe(data => {
    this.cliente = data;
  });
}

}
