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

    encontrarPersona(i:number){
        let persona : Persona = this.personas[i];
        return persona;
    }

    modificarPersona(i:number, persona:Persona){
        let personaFound : Persona = this.personas[i];
        personaFound.nombre = persona.nombre;
        personaFound.apellido = persona.apellido;
    }


}