
export class Heroe{

  constructor(nombre:string, alias:string, poder:string, nivelPoder:number) {
    this.nombre=nombre;
    this.alias=alias;
    this.poder=poder;
    this.nivelPoder=nivelPoder;
  }

  nombre:string="";
  alias:string="";
  poder:string="";
  nivelPoder:number=0;
}
