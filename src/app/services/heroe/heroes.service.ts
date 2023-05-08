import { Injectable } from '@angular/core';
import {Heroe} from "../../heroe.model";
import {AlertaService} from "../alerta.service";
import {DataService} from "../data/data.service";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class HeroesService {

  heroes: Heroe[]=[];
  constructor(private ventanaAlert:AlertaService,
              private dataService:DataService) {

  }

  /*heroes: Heroe[]=[
    new Heroe("Batman","Caballero","Murcielago",55),
    new Heroe("Super Man","Fuerte","Volar",100),
    new Heroe("Goku","Kakaroto","Volar",1000000),
  ];*/

  setHeroes(her:Heroe[]){
    this.heroes=her;
  }

  agregarHeroe(her:Heroe){

    this.heroes.push(her);
    //agrega a data service
    this.dataService.guardarHeroes(this.heroes);

    this.ventanaAlert.muestraAlerta("Se agrego correctamente" +
    her.nombre);


  }
  getEmpleado(indice:number){
    return (this.heroes[indice]);
  }
  modificaHeroe(indice:number, her:Heroe){
    this.heroes[indice].nombre=her.nombre;
    this.heroes[indice].alias=her.alias;
    this.heroes[indice].poder=her.poder;
    this.heroes[indice].nivelPoder=her.nivelPoder;

    this.dataService.actualizarHeroe(indice,this.heroes[indice]);
  }
  eliminarHeroe(indice:number){
    this.heroes.splice(indice,1);

    this.dataService.eliminarHeroe(indice);

    if(this.heroes !=null) {
      this.dataService.guardarHeroes(this.heroes);
    }
  }

  //De FIRE BASE
  obtenerHeroes(){
    return this.dataService.getAllHeroes();
  }


}
