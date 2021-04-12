import { Coche } from "../entidades/coche";

export class ServicioCoches {

    private coches:Coche[] = [];
    private contador:number;

    constructor() {
        this.coches.push(new Coche(1, 'SEAT', '124 Sport', 115, 'Coupe'));
        this.coches.push(new Coche(2, 'Citroen', '2CV', 30, '5 puertas'));
        this.coches.push(new Coche(3, 'Renault', '9', 70, '4 puertas'));
        this.contador = 4;
        //this.coches.push(new Coche(1, '', '', 115, 'Coupe'));
        //this.coches.push(new Coche(1, '', '', 115, 'Coupe'));
    }

    public listar():Coche[] {
        return this.coches;
    }

    public insertar(coche:Coche):void {
        coche.id = this.contador++;
        this.coches.push(coche);
    }

    public buscar(id:number):Coche {
        console.log(id);
        for (let coche of this.coches) {
            if (coche.id == id) {
                return coche;
            }            
        }
        return null;
    }
}