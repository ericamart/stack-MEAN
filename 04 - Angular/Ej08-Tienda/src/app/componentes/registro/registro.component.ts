import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario:Usuario = new Usuario();
  public confirmacionPW:string;
  public errorLogin:String = '';
  public estiloLogin:String = '';

  constructor(private router:Router,
              private sesionService:SesionService,
              private usuariosService:UsuariosService ) {
  }

  ngOnInit() {
  }

  public comprobarLogin():void{
    this.usuariosService.comprobarSiElLoginExiste(this.usuario.login)
      .subscribe( rs => { this.errorLogin = ': Login repetido';
                          this.estiloLogin = 'is-invalid' },
                  error => { this.errorLogin = ''; 
                             this.estiloLogin = '' } );
  }

  public siguiente():void{
    //Validar
    this.sesionService.add("usuario", this.usuario);
    this.router.navigate( [ '/condiciones' ] );
  }

}
