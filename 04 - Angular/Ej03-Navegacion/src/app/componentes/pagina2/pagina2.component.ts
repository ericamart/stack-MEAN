import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  private dato1:number;
  private dato2:number;

  constructor(private route:ActivatedRoute) {
    console.log("Creando Pagina2Component");
    this.dato1 = route.snapshot.params['dato1'];
    this.dato2 = route.snapshot.params['dato2'];
  }

  ngOnInit() {
  }

}
