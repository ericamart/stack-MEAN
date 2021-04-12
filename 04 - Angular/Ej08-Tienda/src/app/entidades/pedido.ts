import { Usuario } from "./usuario";
import { Detalle } from "./detalle";

export class Pedido{

    constructor( public  _id   :string = undefined,
                 public  codigo:string = null,
                 public  fecha :string = null,
                 public  total :number = 0,
                 public  direccion:string   = null,
                 public  usuario  :Usuario  = null,
                 private detalles :Detalle[]= []){
    }

    public addDetalle(detalle:Detalle):void{
        let encontrado:boolean = false;
        for(let detalleAux of this.detalles){
            if(detalleAux.producto._id == detalle.producto._id){
                detalleAux.cantidad++;
                encontrado = true;
                break;
            }
        }        
        if(!encontrado){
            this.detalles.push(detalle);
        }
        this.calcularTotal();
    }
    
    public eliminarDetalle(detalle:Detalle):void{
        for(let a=0; a<this.detalles.length; a++){
            let detalleAux:Detalle = this.detalles[a];
            if(detalleAux.producto._id == detalle.producto._id){
                detalleAux.cantidad--;
                if(detalleAux.cantidad == 0){
                    this.detalles.splice(a,1);
                }
                break;
            }
        }        
        this.calcularTotal();
    }

    private calcularTotal():void{
        let total:number = 0;
        for(let detalle of this.detalles){
            console.log(detalle.cantidad+":"+detalle.precio);
            total = total+(detalle.cantidad*detalle.precio);
        }
        this.total = total;
    }

    public getDetalles():Detalle[]{
        return this.detalles;
    }

}