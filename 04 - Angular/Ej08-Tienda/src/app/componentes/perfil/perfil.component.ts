import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario:Usuario;

  constructor(private loginService:LoginService,
              private usuariosService:UsuariosService) {
    this.usuario = loginService.getUsuario();
  }

  ngOnInit() {
  }

  public guardar():void{

    this.usuariosService.modificar(this.usuario)
    .subscribe( rs => console.log(rs),
                error => console.log(error) );


  }

}
