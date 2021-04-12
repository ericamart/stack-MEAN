import { Component } from '@angular/core';
import { AppComponentService } from './servicios/app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // En el constructor de un componente o un servicio nos pueden inyectar
  // referencias a objetos del framework como por ejemplo:
  // - activateRoute
  // - router
  // - http
  // - .....
  // - referencias a clases nuestras (manejadas por el framework)
  // - servicios
  // - componentes (JAMÁS inyectaremos un componente en un servicio)
  
  constructor(private appComponentService:AppComponentService) {
    console.log("Creando AppComponent");
  }
}
