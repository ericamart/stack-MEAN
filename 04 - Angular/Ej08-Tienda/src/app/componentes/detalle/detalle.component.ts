import { Component, OnInit, Input } from '@angular/core';
import { Detalle } from '../../entidades/detalle';
import { PedidosService } from '../../servicios/pedidos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() public detalle:Detalle = new Detalle();

  constructor(private pedidosService:PedidosService) { 
  }

  ngOnInit():void {
  }

  public comprar():void{
    let detalle:Detalle = new Detalle(1, this.detalle.producto.precio, this.detalle.producto);
    this.pedidosService.addDetallePedido(detalle);
  }
  
  public descomprar():void{
    let detalle:Detalle = new Detalle(1, this.detalle.producto.precio, this.detalle.producto);
    this.pedidosService.eliminarDetallePedido(detalle);    
  }

}
