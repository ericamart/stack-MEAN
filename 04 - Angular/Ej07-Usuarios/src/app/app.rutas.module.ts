import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CondicionesComponent } from './componentes/condiciones/condiciones.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

let rutasPrincipal = [
  { path : 'inicio',
    component : InicioComponent }, 
  { path : 'perfil',
    component : PerfilComponent }   
];

let rutas = [
  { path : '',
    component : LoginComponent },
  { path : 'login',
    component : LoginComponent },
  { path : 'registro',
    component : RegistroComponent },
  { path : 'condiciones',
    component : CondicionesComponent },
  { path : 'principal',
    component : PrincipalComponent,
    children  : rutasPrincipal }      
];

@NgModule({  
  imports: [
    RouterModule.forRoot( rutas )
  ],
  exports: [ RouterModule ]
})
export class AppRutasModule { }
