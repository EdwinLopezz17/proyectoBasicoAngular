import {Component, Input} from '@angular/core';
import {Heroe} from "../../../heroe.model";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  //tsconfig.json -> poner "compilerOptions": {
  //     "strictPropertyInitialization": false,

  @Input() hero:Heroe;
  @Input() indice:number;


}
