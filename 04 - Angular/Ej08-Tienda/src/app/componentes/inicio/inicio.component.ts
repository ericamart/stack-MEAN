import { Component, OnInit } from '@angular/core';
import { Producto } from '../../entidades/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public productos:Producto[] = [];
  public categoria:string;

  constructor( private productosService:ProductosService) {
    productosService.listarProductos()
      .subscribe( productos => this.productos=productos,
                  error => console.log(error) );
  }

  ngOnInit() {
  }
  
  public buscarProductos():void{

    this.productosService.listarProductosCategoria(this.categoria)
      .subscribe( productos => this.productos=productos,
                  error => console.log(error) );

  }

}
