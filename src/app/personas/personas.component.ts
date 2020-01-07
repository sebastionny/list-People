import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personasService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService:LoggingService,
    private personaService : PersonasService,
    private router : Router){}


  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
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
