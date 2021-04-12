import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../entidades/pelicula';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  public pelicula:Pelicula;
  public mensaje:string;

  constructor(private srv:PeliculasService,
              private activateRouter:ActivatedRoute,
              private router:Router) {

    let id:number = activateRouter.snapshot.params['id'];
    this.vaciarFormulario();
    if (typeof id != 'undefined') {
      this.buscar(id);
    }
  }

  ngOnInit() {
  }

  public insertar():void {
    let that = this;
    this.srv.
      insertar(this.pelicula).
        subscribe(function(response) {
                    sessionStorage.setItem("mensaje", response);
                    that.router.navigate(["listado"]);
                  },
                  function(error) {
                    that.mensaje = error.error;
                  });
  }

  public buscar(id:number):void {
    let that = this;
    this.srv.
      buscar(id).
        subscribe(function(data) {
                    that.pelicula = data;
                  },
                  function(error) {
                    that.mensaje = error.error;
                  });

  }

  public modificar():void {
    let that = this;
    this.srv.
      modificar(this.pelicula).
        subscribe(function(response) {
                    sessionStorage.setItem("mensaje", response);          
                    that.router.navigate(["listado"]);
                  },
                  function(error){
                    that.mensaje = error.error;
                  });
  }

  public borrar():void {
    let that = this;
    this.srv.
      borrar(this.pelicula).
        subscribe(function(response) {
                    sessionStorage.setItem("mensaje", response);                    
                    that.router.navigate(["listado"]);
                  },
                  function(error){
                    that.mensaje = error.error;
                  });
  }

  public vaciarFormulario() {
    this.pelicula = new Pelicula(null, null, null, null, null);
  }

}
