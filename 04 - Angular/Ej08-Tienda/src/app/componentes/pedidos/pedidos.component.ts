import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../servicios/pedidos.service';
import { Pedido } from '../../entidades/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public pedidos:Pedido[];

  constructor(private pedidosService:PedidosService) { 
    pedidosService.listarPedidos().
      subscribe( pedidos => this.pedidos=pedidos,
                 error => console.log(error) );
  }

  ngOnInit() {
  }

}
