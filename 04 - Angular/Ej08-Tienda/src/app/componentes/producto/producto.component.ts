import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../entidades/producto';
import { Detalle } from '../../entidades/detalle';
import { PedidosService } from '../../servicios/pedidos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() public producto:Producto = new Producto();

  constructor(private pedidosService:PedidosService) { 
  }

  ngOnInit():void {
  }

  public comprar():void{
    let detalle:Detalle = new Detalle(1, this.producto.precio, this.producto);
    this.pedidosService.addDetallePedido(detalle);
  }

  public descomprar():void{
    
  }

}
