import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }
  muestraAlerta(mensaje:string){
    alert(mensaje);
  }

}
