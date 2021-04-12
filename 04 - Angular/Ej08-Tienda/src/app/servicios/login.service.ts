import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';
//
import { HttpHeaders } from '@angular/common/http';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario:Usuario;

  constructor(private http:HttpClient,
              private sesionService:SesionService) { }

  public getCabeceraAuth():HttpHeaders{
    return new HttpHeaders( 
      { Authorization : "Basic " + btoa(this.usuario.login+":"+this.usuario.pw) });
  }

  //Enviamos una petición para buscar el usuario con las credenciales aportadas
  //Devuelve una PROMESA
  //Si el usuario existe se lo queda en un atributo y ejecuta resolve
  //Si no ejecuta reject
  public login(usuario:Usuario){
    let cabeceras = new HttpHeaders( 
      { Authorization : "Basic " + btoa(usuario.login+":"+usuario.pw) });
    let url = "http://localhost:8000/usuarios/credenciales";
    
    return new Promise( (resolve, reject) => {      
      this.http.get(url, { headers:cabeceras } )
      //O ponemos el tipo en el parámetro o hacemos un cast
      //Las dos cosas juntas es pasarse
      .subscribe( (usr:Usuario) => { this.usuario = <Usuario> usr;                             resolve(); },
                  (error) => reject() );
    });
  
  }

  public getUsuario():Usuario{
    return this.usuario;
  }

  public logout(){
    //
  }

}
