import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Heroe} from "../../heroe.model";
import {LoginService} from "../../components/login/service/login.service";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {

  constructor(private httpClient:HttpClient,
              private loginService:LoginService) {

  }
  guardarHeroes(array:Heroe[]){
    this.httpClient.put('https://curso-angular-b4d08-default-rtdb.firebaseio.com/datos.json',
      array).subscribe(response=>console.log("Se guardo el heroe"+response),
      error => console.log("Error: "+error),
      )};

  getAllHeroes(){

    let token = this.loginService.getIdToken();
    return this.httpClient.get('https://curso-angular-b4d08-default-rtdb.firebaseio.com/datos.json?auth='+token);

  }
  actualizarHeroe(i:number, her:Heroe){
    let url='https://curso-angular-b4d08-default-rtdb.firebaseio.com/datos/'+i+'.json';

    this.httpClient.put(url,her).subscribe(response=>console.log(
      "Se modificado el heroe"+response),
        error => console.log("Error: "+error),
      )};

  eliminarHeroe(i:number){
    let url='https://curso-angular-b4d08-default-rtdb.firebaseio.com/datos/'+i+'.json';

    this.httpClient.delete(url).subscribe(response=>console.log(
        "Se elimino el heroe"+response),
      error => console.log("Error: "+error),
    )};




}
