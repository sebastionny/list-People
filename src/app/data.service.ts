import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class Dataservices{
    constructor(
        private http: HttpClient
    ){}


    // Recuperar los datos
    cargarPersonas(){
        return this.http.get('https://listado-personas-33715.firebaseio.com/datos.json');
    }



    // Guardar Personas
    guardarPersonas(personas : Persona[]){
        this.http.put('https://listado-personas-33715.firebaseio.com/datos.json', personas)
            .subscribe(
                response => {
                    console.log(`Resultado despues de guardar ${response}`);
                },
                error => {
                    console.error(`Error al guardar personas ${error}`);
                }
            );
    }

    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-33715.firebaseio.com' + '/datos/' + index + '.json';
        console.log("url de modificarPersona:" + url);
        this.http.put( url, persona)
            .subscribe(
                (response) => {
                    console.log("resultado modificar Persona: " + response);
                },
                (error) => console.log("Error en modificar Persona: " + error)
            );
    }

    eliminarPersona(index:number){
        let url: string;
        url = 'https://listado-personas-33715.firebaseio.com' + '/datos/' + (index) + '.json';
        console.log("url de eliminarPersona:" + url);
        this.http.delete( url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Persona: " + response);
                },
                (error) => console.log("Error en eliminar Persona: " + error)
            );
    }


}  