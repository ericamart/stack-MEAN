import { Injectable } from '@angular/core';
import { Pelicula } from '../entidades/pelicula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // rxjs es otra librería que no es angular
import { ConfiguracionService } from './configuracion.service';

// Llamamos al servicio REST que creamos en el Ej0-RestExpress.js

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 
  constructor(private http:HttpClient,
              private cfg:ConfiguracionService) {}

  public getPeliculas():Observable<any> {
    return this.http.get(this.cfg.url + '/peliculas');
  }

  public buscar(id:number):Observable<any> {
    return this.http.get(this.cfg.url+"/peliculas/"+id);
  }

  public insertar(pelicula:Pelicula):Observable<any> {
    return this.http.post(this.cfg.url+"/peliculas/", pelicula, { responseType : 'text' });
  }

  public modificar(pelicula:Pelicula):Observable<any> {
    return this.http.put(this.cfg.url+"/peliculas/"+pelicula.id, pelicula, { responseType : 'text' });
  }

  public borrar(pelicula:Pelicula):Observable<any> {
    return this.http.delete(this.cfg.url+"/peliculas/"+pelicula.id, { responseType : 'text' });
  }
}
