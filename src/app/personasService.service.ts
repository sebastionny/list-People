import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Dataservices } from './data.service';

@Injectable()
export class PersonasService{

    personas: Persona[] = [];

    saludar = new EventEmitter<number>();


    constructor(private loginService : LoggingService,
                private data : Dataservices){}

    setPersonas(personas:Persona[]){
        this.personas = personas;
    }

    getPersonas(){
        return this.data.cargarPersonas();
    }

    addPersona(persona1:Persona){
        this.loginService.enviarMensajeConsola(`Agregamos persona ${persona1.nombre} ${persona1.apellido}`);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona1);
        this.data.guardarPersonas(this.personas);
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

    eliminarPersona(i:number){
        this.personas.splice(i,1);
    }


}