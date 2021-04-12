
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SesionService {

    private sesion:any[] = [];
    
    public add(clave:string,objeto:any):void{
        this.sesion[clave] = objeto;
    }

    public get(clave:string):any{
        return this.sesion[clave];
    }

}


