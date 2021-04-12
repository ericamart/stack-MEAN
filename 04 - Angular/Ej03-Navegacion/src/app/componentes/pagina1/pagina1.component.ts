import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  //
  // Inyección de dependencias
  //

  constructor(private router:Router) { 
    console.log("Creando Pagina1Component");
  }

  ngOnInit() {
  }

  public navegacionProgramatica():void {
    // para navegar programáticamente necesitamos el objeto 'router'
    console.log("Navegación programática");
    this.router.navigate(['pagina2', '333', '444']);
  }

}
