import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{

    personas: Persona[] = [
        new Persona ("Juan", "Perez"),
        new Persona ("Marha" , "Gonzalez")];

    saludar = new EventEmitter<number>();


    constructor(private loginService : LoggingService){}

    addPersona(persona1:Persona){
        this.loginService.enviarMensajeConsola(`Agregamos persona ${persona1.nombre} ${persona1.apellido}`);
        this.personas.push(persona1);
    }


}