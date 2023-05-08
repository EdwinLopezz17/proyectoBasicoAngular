import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import {FormsModule} from "@angular/forms";
import { RegistroComponent } from './components/registro/registro.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import {AlertaService} from "./services/alerta.service";
import {HeroesService} from "./services/heroe/heroes.service";
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SomosComponent } from './components/somos/somos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {RouterModule, Routes} from "@angular/router";
import { ModificarComponent } from './components/modificar/modificar.component';
import { ErrorComponent } from './components/error/error.component';
import {DataService} from "./services/data/data.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import {LoginService} from "./components/login/service/login.service";
import {CookieService} from "ngx-cookie-service";

const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'somos', component:SomosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'modificar/:id', component:ModificarComponent},
  {path:'login', component:LoginComponent},



  {path:'**', component:ErrorComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    RegistroComponent,
    HeroesComponent,
    HeroeComponent,
    HomeComponent,
    ProyectosComponent,
    SomosComponent,
    ContactoComponent,
    ModificarComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    AlertaService,
    HeroesService,
    DataService,
    LoginService,
    CookieService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
