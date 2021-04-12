import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../entidades/pedido';
import { Router } from '@angular/router';
import { PedidosService } from '../../servicios/pedidos.service';
import { SesionService } from '../../servicios/sesion.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  public pedido:Pedido;

  constructor(private router:Router,
              private pedidosService:PedidosService,
              private loginService:LoginService ) { 
    
    this.pedido = pedidosService.getPedido();
    //colocamos la direccion del usuario en el pedido
    let usuario = loginService.getUsuario();
    this.pedido.direccion = usuario.direccion;

  }

  ngOnInit() {
  }

  public finalizarCompra(){

    this.pedidosService.realizarPedido()
    .then( () => this.router.navigate( ['/principal/pedidos'] ) )
    .catch( error => console.log(error) );

  }

}
