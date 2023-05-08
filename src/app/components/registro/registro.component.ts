import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  title = "Registro de Usuarios";
  message ="";
  isRegistred = false;
  nombre ="";
  apellido ="";
  cargo:string="";

  entradas:any;
  constructor() {
    this.entradas=[
      {titulo:"Python cada dia más presente", description:"aqui descripcion"},
      {titulo:"Java es muy antiguo"},
      {titulo:"C++ es un gran lenguaje"},
      {titulo:"C# es similar a c++"},
      {titulo:"Mathlab es matematico"},
      {titulo:"css y html permiten hacer paginas web"},

    ];
  }

  registrarUsuario(){
    this.isRegistred = true;
    this.message="Usuario registrado";

  }
}
