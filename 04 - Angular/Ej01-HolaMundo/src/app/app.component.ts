import { Component } from '@angular/core';
import { Libro } from './entidades/libro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = "Hola mundo";
  public libro:Libro;

  constructor() {
    this.libro = new Libro(1, 'La isla del tesoro', 'ABC', 'B123456Y');
  }

  public botonPulsado():void {
    console.log("Botón pulsado");
  }
  
  public funcionQueNoEsVoid(lugar:string):string {
    return "Siete caballos vienen de " + lugar;
  }

}
