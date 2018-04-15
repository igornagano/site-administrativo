import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
/*
  Generated class for the ClienteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ClienteServiceProvider Provider');
  }


  	apiUrl = 'http://localhost:8000/cliente/usuario/teste2@teste.com';

  	getUsers() {
	 	return  this.http.get(this.apiUrl).pipe(
            map(res=>res)
        )
	      	
	}
}
