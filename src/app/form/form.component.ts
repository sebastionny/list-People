import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInp:string;
  apellidoInp:string;

  constructor() { }

  onAddPersona(){
    let persona1 = new Persona (this.nombreInp, this.apellidoInp);
    //Metodo para enviar información a otro componente
    this.personaCreada.emit(persona1);
    this.nombreInp = "";
    this.apellidoInp = "";
  }

}
