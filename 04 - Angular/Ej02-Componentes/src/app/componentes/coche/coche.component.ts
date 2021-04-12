import { Component, OnInit } from '@angular/core';
import { Coche } from '../../entidades/coche';
import { ServicioCoches } from '../../servicios/servicioCoches';
import { ServicioCarrocerias } from '../../servicios/servicioCarrocerias';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  private servicioCoches:ServicioCoches = new ServicioCoches();;
  private servicioCarrocerias:ServicioCarrocerias = new ServicioCarrocerias();

  public coche:Coche;
  public coches:Coche[];
  public carrocerias:String[];

  constructor() { 
    //this.coche = new Coche(null, null, null, null, '0');
    this.vaciar();

    this.carrocerias = this.servicioCarrocerias.listar();
    this.coches = this.servicioCoches.listar();
  }

  ngOnInit() {
  }

  public insertar():void {
    this.servicioCoches.insertar(this.coche);
    this.vaciar();
  }
  
  public vaciar():void {
    this.coche = new Coche(null, null, null, null, '0');
  }

  public seleccionar(id:number):void {
    this.coche = this.servicioCoches.buscar(id);
  }
}
