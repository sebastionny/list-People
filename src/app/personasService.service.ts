import { Persona } from './persona.model';

export class PersonasService{

    personas: Persona[] = [
        new Persona ("Juan", "Perez"),
        new Persona ("Marha" , "Gonzalez")];


    addPersona(persona1:Persona){
        this.personas.push(persona1);
    }


}