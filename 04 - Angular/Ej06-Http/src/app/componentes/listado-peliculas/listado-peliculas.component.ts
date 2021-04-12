import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../entidades/pelicula';
import { PeliculasService } from '../../servicios/peliculas.service';

// Hasta algular 4.2
//import { Http } from '@angular/http';

// Desde angular 4.3
/*
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // rxjs es otra librería que no es angular
*/

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  public peliculas:Pelicula[];
  public mensaje:string;

  //constructor(private http:HttpClient) { }
  constructor(private srv:PeliculasService) {
    this.getPeliculas();
    // buscamos un posible mensaje en el session storage
    // si existe lo colocamos en el atributo mensaje para que se muestre en 
    // la página
    let mensaje:string = sessionStorage.getItem("mensaje");
    if (mensaje) {
      this.mensaje = mensaje;
      sessionStorage.removeItem("mensaje");
    }
  }

  ngOnInit() {
  }

  public getPeliculas() {
    
    /*
    // nos guardamos la referencia al componente
    let that:ListadoPeliculasComponent = this;
    // Llamamos al servicio REST que creamos en el Ej0-RestExpress.js
    let observable = this.http.get('http://localhost:7000/peliculas');

    // hasta que no nos suscribimos no se llama al método ajax
    observable.subscribe( function(data:Pelicula[]) { // si todo ha ido bien
                            that.peliculas = data;                        
                          },
                          function(error) {console.log(error)},  // si algo ha fallado
                          function() {console.log("YA")} );      // se ejecuta siempre
    */                     

    /*
    let that = this;
    let observable = this.srv.getPeliculas();
    observable.subscribe(function(data) {
                           that.peliculas = data;
                         },
                         function(error) {
                           that.mensaje = error.error;
                         } );
    */

    // con expresiones lambda
    this.srv.getPeliculas().
    subscribe( data  => this.peliculas = data,
               error => this.mensaje = error );
  }

}
