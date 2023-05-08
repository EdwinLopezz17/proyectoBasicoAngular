import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  constructor(private roueter:Router) {

  }


  volverHome(){
    this.roueter.navigate(['/home'])
  }
  agregar(){
    alert("Fue agregado");
    this.volverHome();
  }
}
