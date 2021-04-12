import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { SesionService } from '../../servicios/sesion.service';
import { Usuario } from '../../entidades/usuario';

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.component.html',
  styleUrls: ['./condiciones.component.css']
})
export class CondicionesComponent implements OnInit {

  constructor(private router:Router,
              private loginService:LoginService,
              private usuariosService:UsuariosService,
              private sesionService:SesionService) { }

  ngOnInit() {
  }

  public registrar():void{

    //Del tirón. A tope con el callback hell:
    let usuario:Usuario = this.sesionService.get("usuario");
    this.usuariosService.insertar(usuario).subscribe( 
      respuesta => {
        this.loginService.login(usuario).
          then( () => this.router.navigate( ['/principal']) ).
          catch( error => console.log(error) );
      },
      error => console.log(error));
  }

  /*
  public registrar():void{
    let usuario:Usuario = this.sesionService.get("usuario");
    this.usuariosService.insertar(usuario).subscribe( 
      respuesta => this.autenticarUsuario(usuario),
      error => console.log(error));
  }

  private autenticarUsuario(usuario:Usuario){
    this.loginService.login(usuario).subscribe( 
      usuario => {
        this.sesionService.add("usuario", usuario);
        this.router.navigate( ['/principal']);
      },
      error => console.log(error));    
  }
  */  




}
