import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../../servicios/app-component.service';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css'],
  providers: [ AppComponentService ] // si declaramos el servicio en el componente, el ámbito es el del componente
})
export class Padre2Component implements OnInit {

  constructor(private appComponentService:AppComponentService) { 
    console.log("Creando Padre2Component");
  }

  ngOnInit() {
  }

}
