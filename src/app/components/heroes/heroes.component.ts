import {Component, OnInit} from '@angular/core';
import {Heroe} from "../../heroe.model";
import {AlertaService} from "../../services/alerta.service";
import {HeroesService} from "../../services/heroe/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  titulo = "Listado de Heroes";

  fNombre:string="";
  fAlias:string="";
  fPoder:string="";
  fNivel:number=0;
  heroes: Heroe[]=[]
  constructor(private miServicio:AlertaService,
              private heroesService: HeroesService) {

    //this.heroes=this.heroesService.heroes;
  }
  ngOnInit(): void {
    //this.heroes=this.heroesService.heroes;

    this.heroesService.obtenerHeroes().subscribe(
      misHeroes=> {
        console.log(misHeroes);

        this.heroes=Object.values(misHeroes);

        this.heroesService.setHeroes(this.heroes);
      });

  }


  agregarHeroe(){
    let her = new Heroe(
      this.fNombre, this.fAlias, this.fPoder, this.fNivel
    );

    this.heroesService.agregarHeroe(her);
  }


}

