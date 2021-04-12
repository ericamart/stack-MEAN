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

  constructor(private http:HttpClient,
              private sesionService:SesionService) { }

  public getCabeceraAuth():HttpHeaders{
    let usuario:Usuario = this.sesionService.get("usuario");
    return new HttpHeaders( 
      { Authorization : "Basic " + btoa(usuario.login+":"+usuario.pw) });
  }

  public login(usuario:Usuario):Observable<any>{

    let cabeceras = new HttpHeaders( 
      { Authorization : "Basic " + btoa(usuario.login+":"+usuario.pw) });

    let url = "http://localhost:8000/usuarios/credenciales";
    return this.http.get(url, { headers:cabeceras } );
  }

  public logout(){
    //
  }

}
