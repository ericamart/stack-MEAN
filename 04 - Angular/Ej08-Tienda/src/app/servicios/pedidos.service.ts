import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfiguracionService } from "./configuracion.service";
import { LoginService } from "./login.service";
import { Detalle } from "../entidades/detalle";
import { SesionService } from "./sesion.service";
import { Pedido } from "../entidades/pedido";
import { Usuario } from "../entidades/usuario";
import { Observable } from "rxjs";

//Este lo damos de alta en el módulo porque si
//@Injectable({
//    providedIn: 'root'
//})
@Injectable()
export class PedidosService {

    constructor( private http:HttpClient,
                 private cfg:ConfiguracionService,
                 private loginService:LoginService,
                 private sesion:SesionService ){
        
        sesion.add("pedido", new Pedido() );

    }

    //Añade un detalle al pedido que está en 'sesionService'
    //Solo PedidosService sabe donde está el pedido
    public addDetallePedido( detalle:Detalle ){
        let pedido:Pedido = this.sesion.get("pedido");        
        //pedido.detalles.push(detalle); anemia total
        pedido.addDetalle(detalle);

        console.log(pedido);

    }

    public eliminarDetallePedido( detalle:Detalle ){
        let pedido:Pedido = this.sesion.get("pedido");        
        //pedido.detalles.push(detalle); anémico total
        pedido.eliminarDetalle(detalle);
    }

    public getPedido():Pedido{
        return this.sesion.get("pedido");
    }

    public realizarPedido(){
        let usuario:Usuario = this.loginService.getUsuario();
        let pedido:Pedido = this.sesion.get("pedido");
        pedido.usuario = usuario;

        return new Promise( (resolve, reject) => {
            this.http.post(this.cfg.url+"/pedidos", pedido, { responseType : 'text', headers: this.loginService.getCabeceraAuth() })
            .subscribe( rs => {
                this.sesion.add("pedido", new Pedido());
                resolve();
            },
            error => reject(error));
        });
    }

    public listarPedidos():Observable<any>{
        let usuario:Usuario = this.loginService.getUsuario();
        return this.http.get(this.cfg.url+"/pedidos/usuarios/"+usuario._id,
                             { headers:this.loginService.getCabeceraAuth() });
    }

}