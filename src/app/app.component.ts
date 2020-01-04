import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona[] = [new Persona ("Juan", "Perez"), new Persona ("Marha" , "Gonzalez")];
  nombreImp:string;
  apellidoImp:string;

  onAddPersona(){
    let persona1 = new Persona (this.nombreImp, this.apellidoImp);
    this.personas.push(persona1);
  }
}
