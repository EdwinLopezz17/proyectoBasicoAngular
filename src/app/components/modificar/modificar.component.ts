import {Component, OnInit} from '@angular/core';
import {Heroe} from "../../heroe.model";
import {AlertaService} from "../../services/alerta.service";
import {HeroesService} from "../../services/heroe/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{

  titulo = "Informacion de heroe seleccionado";
  heroes: Heroe[]=[]
  constructor(private miServicio:AlertaService,
              private heroesService: HeroesService,
              private roueter:Router,
              private route:ActivatedRoute,) {

    this.heroes=this.heroesService.heroes;
  }

  ngOnInit(): void {

    this.indice = this.route.snapshot.params['id'];

    let her:Heroe=this.heroesService.getEmpleado(this.indice);

    this.fNombre = her.nombre;
    this.fAlias = her.alias;
    this.fPoder = her.poder;
    this.fNivel = her.nivelPoder;
    this.action=this.route.snapshot.queryParams['action'];

    this.inicar();
  }

  fNombre:string="";
  fAlias:string="";
  fPoder:string="";
  fNivel:number=0;

  indice:number;
  action:number;

  inicar(){
    if(this.action == 1){
      this.titulo="Vas a modificar este Heroe";
    }
    if(this.action ==2 ){
      this.titulo="Vas a eliminar este Heroe";
    }
  }
  modificarHeroe(){
    let her = new Heroe(
      this.fNombre, this.fAlias, this.fPoder, this.fNivel
    );

    this.heroesService.modificaHeroe(this.indice, her);
    this.volverHome();
  }
  eliminarHeroe(){
    this.heroesService.eliminarHeroe(this.indice);
    this.volverHome();
  }


  volverHome(){
    this.roueter.navigate(["/home"]);
  }




}
