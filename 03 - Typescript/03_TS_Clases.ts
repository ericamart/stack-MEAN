// Cada clase en un fichero

// tienen identidad/estado y funcionalidad separadas

class Barco {
    // si no escribimos nada, el atributo es público por defecto
    public    nombre:string; 
    protected eslora:number;
    private   trb:number;

    // solo existe un único constructor y debe llamarse 'constructor'
    constructor(nombre:string, eslora:number, trb:number) {
        console.log("Instanciando un barco");
        this.nombre = nombre;
        this.setEslora(eslora); // para no repetir la validación
        this.trb    = trb;
    }

    public setEslora(eslora:number):void {
        if (eslora<=0) {
            return;
        }
        this.eslora = eslora;
    }

    public getEslora():number {
        return this.eslora;
    }

    public toString():string {
        return this.nombre + ", " + this.eslora + ", " + this.trb;
    }

}

let barco1:Barco = new Barco('Calypso', 70, 300);
//barco1.nombre = "";
//barco1.eslora = 4; // no se puede pq es protected
//barco1.trb = 22; // tampoco se puede
console.log(barco1.toString());


// ----------------------------------------------
// Herencia
// ----------------------------------------------
class Portaaviones extends Barco {
    public aeronaves:number;

    constructor(nombre:string, eslora:number, trb:number, aeronaves:number) {
        // cascada de construtores
        super(nombre, eslora, trb);
        this.aeronaves = aeronaves;
    }

    public toString():string{
        return super.toString() + ", " + this.aeronaves;
    }
}

let nimitz:Portaaviones = new Portaaviones('US Nimitz', 330, 100000, 100);
console.log(nimitz.toString());


// ----------------------------------------------
// Declarando los atributos en el constructor
// ----------------------------------------------

class Persona {
    //public nombre:string; 
    //public direccion:string;
    //public telefono:string;

    constructor(public nombre:string, public direccion:number, public telefono:number) {
        //this.nombre = nombre;
        //this.direccion = direccion;
        //this.telefono = telefono;
    } 
}