import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personasService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  
  //@Output() personaCreada = new EventEmitter<Persona>();
  //@ViewChild('apellidoInp', {static: false}) apellidoInp: ElementRef;
  
  nombreInp:string;
  apellidoInp:string;
  indice:number;
  
  constructor(private logginService:LoggingService,
    private personaService : PersonasService,
    private router : Router,
    private route : ActivatedRoute) { 
      this.personaService.saludar.subscribe(
        (index: number) => alert(`El indice es: ${index}`)
        )
      }
      
  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    if(this.indice){
      let persona: Persona = this.personaService.encontrarPersona(this.indice);
      this.nombreInp = persona.nombre;
      this.apellidoInp = persona.apellido;
    }
  }

  eliminarPersona(){
    if(this.indice != null){
      this.personaService.eliminarPersona(this.indice);
    }
    this.router.navigate(['personas']);
  }

  onGuardarPersona(nombreInp:HTMLInputElement){
    let persona1 = new Persona (this.nombreInp, this.apellidoInp);
    if(this.indice){
      this.personaService.modificarPersona(this.indice, persona1)
    } else{
      this.personaService.addPersona(persona1);
    }
    this.router.navigate(['personas']);
    
    //this.logginService.enviarMensajeConsola(`Nombre: ${persona1.nombre} Apellido: ${persona1.apellido}`);

    //Metodo para enviar información a otro componente
    //this.personaCreada.emit(persona1);
    
    //this.nombreInp = "";
    //this.apellidoInp = "";

    // Formulario enviando el contenido con el servicio inyectado en el constructor.
  }

}
