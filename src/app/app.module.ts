import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormComponent } from './form/form.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personasService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
