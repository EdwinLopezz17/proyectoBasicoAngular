import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";
import {LoginService} from "./components/login/service/login.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private loginService:LoginService, ) {
  }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyAljTwfrrCwy8Xbqa4CeXcPm4h-Z7w5caE",
      authDomain: "curso-angular-b4d08.firebaseapp.com",
    })

  }

  estaLogeado(){
    return this.loginService.isLoged();
  }
  logOut(){
    this.loginService.logout();
  }


}
