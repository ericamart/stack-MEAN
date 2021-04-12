import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfiguracionService } from "./configuracion.service";
import { LoginService } from "./login.service";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    constructor( private http:HttpClient,
                 private cfg:ConfiguracionService,
                 private loginService:LoginService ){

    }
    
    public listarProductos():Observable<any>{
        let cabeceras:HttpHeaders = this.loginService.getCabeceraAuth();
        return this.http.get(this.cfg.url+"/productos", 
                             { headers:cabeceras});
    }
    
    public listarProductosCategoria(categoria:string):Observable<any>{
        let cabeceras:HttpHeaders = this.loginService.getCabeceraAuth();
        return this.http.get(this.cfg.url+"/productos/categorias/"+categoria, 
                             { headers:cabeceras});
    }

}