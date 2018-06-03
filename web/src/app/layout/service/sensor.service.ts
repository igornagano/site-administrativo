import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Sensor } from '../model/sensor';
import { Conf } from "./conf";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SensorService {
	
	sensor = {};
	
	resultado = '';
	private handleError(error: any){
		if(error instanceof Response) {
			return Observable.throw(error.json()['error'] || 'backend server error');
		}
		return Observable.throw(error || 'backend server error');
	}

  constructor(private http: HttpClient, private conf: Conf) { 

  }

 getDados(id) {
    return this.http.get(this.conf.url + "/sensor/"+id)
    	.pipe(
            map(res=>res)
        )
 } 
 putDados(sensor){
 	this.sensor = sensor;
 	return this.http.put(this.conf.url + "/sensor/"+this.sensor['id_sensor'], this.sensor,httpOptions).pipe(
            map(res=>res)
        )
 }    
 setDados(sensor){
 	this.sensor = sensor
 	return this.http.post(this.conf.url + "/sensor",  this.sensor).pipe(
            map(res=>res)
        )
	}
}
