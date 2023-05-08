import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  name ="Edwin";
  lastname="Lopez";
  edad = 22;
  commpany ="Google"

  cambiaEmpresa(event:Event){
    this.commpany= (<HTMLInputElement>event.target).value;
  }
  getedad(){
    return this.edad
  }
  situacion(){
    return (this.edad >= 18 ) ? "Mayor de edad":"Menos de edad";
  }
  llamaEmpresa(value:string){

  }

  habilitacionCuadro = false;
  usuRegistrado = false;
  textoDeRegistro="El usuario no se registro";

  setusuarioRegistrado(event:Event){
    //alert("Se registro un esclavo");
    if ((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro = "El usuario ya se registro";
    }
    if ((<HTMLInputElement>event.target).value=="no") {
      this.textoDeRegistro = "El usuario no se registro";
    }
  }

  constructor() {
  }
  ngOnInit(){

  }
}
