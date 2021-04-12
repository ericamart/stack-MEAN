import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { SesionService } from '../../servicios/sesion.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario:Usuario;

  constructor(private sesionService:SesionService,
              private usuariosService:UsuariosService) {
    this.usuario = sesionService.get("usuario");
  }

  ngOnInit() {
  }

  public guardar():void{

    this.usuariosService.modificar(this.usuario)
    .subscribe( rs => console.log(rs),
                error => console.log(error) );


  }

}
