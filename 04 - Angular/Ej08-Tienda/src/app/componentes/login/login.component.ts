import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario;
  public mensaje:string = null;

  constructor(private router:Router,
              private loginService:LoginService,
              private sesionService:SesionService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  public login(){
    //LoginService se encarga de mantener el usuario
    //Los componentes no saben que el usuario está en sesionService
    this.loginService.login(this.usuario).
      then( () => this.router.navigate(['/principal'])).
      catch( () => this.mensaje = 'Credenciales incorrectas' );
  }

}
