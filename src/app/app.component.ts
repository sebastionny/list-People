import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Listado de Personas';
  
  
  constructor(){}

  ngOnInit(): void {
  
    firebase.initializeApp({
      apiKey: "AIzaSyCE0uBSkUbzsZkNlbRXac8G96AdXrGaKPo",
      authDomain: "listado-personas-33715.firebaseapp.com",
    });
  }

}
