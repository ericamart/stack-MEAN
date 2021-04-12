import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { PedidosService } from '../../servicios/pedidos.service';
import { Detalle } from '../../entidades/detalle';
import { Pedido } from '../../entidades/pedido';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  public pedido:Pedido;

  constructor(private pedidoService:PedidosService) { 
    this.pedido = pedidoService.getPedido(); 
  }

  ngOnInit() {

  }

}
