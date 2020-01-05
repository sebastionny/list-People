import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private loggingService:LoggingService,
    private personaService : PersonasService){}


  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }


  /*

  Me todo utilizado para agregar el elemento a la lista. Este metodo es utilizado por el emit

  onAddPersona(persona1:Persona){
    this.loggingService.enviarMensajeConsola(`Se agrego a ${persona1.nombre} a la lista de personas desde el componente padre`)
    //this.personas.push(persona1);
    this.personaService.addPersona(persona1);
  }

  */
}
