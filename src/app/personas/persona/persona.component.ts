import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() index: number;

  constructor(private personaService : PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.index);
  }

}
