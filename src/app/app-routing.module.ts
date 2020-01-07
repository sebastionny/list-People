import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormComponent } from './personas/form/form.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '' , component: PersonasComponent},
  {path: 'personas', component: PersonasComponent, children: [
    {path: 'agregar', component: FormComponent},
    {path: ':id',     component: FormComponent}
  ]},
  {path: '**', component: ErrorComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
