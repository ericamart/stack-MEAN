// Cada clase en un fichero
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// tienen identidad/estado y funcionalidad separadas
var Barco = /** @class */ (function () {
    // solo existe un único constructor y debe llamarse 'constructor'
    function Barco(nombre, eslora, trb) {
        console.log("Instanciando un barco");
        this.nombre = nombre;
        this.setEslora(eslora); // para no repetir la validación
        this.trb = trb;
    }
    Barco.prototype.setEslora = function (eslora) {
        if (eslora <= 0) {
            return;
        }
        this.eslora = eslora;
    };
    Barco.prototype.getEslora = function () {
        return this.eslora;
    };
    Barco.prototype.toString = function () {
        return this.nombre + ", " + this.eslora + ", " + this.trb;
    };
    return Barco;
}());
var barco1 = new Barco('Calypso', 70, 300);
//barco1.nombre = "";
//barco1.eslora = 4; // no se puede pq es protected
//barco1.trb = 22; // tampoco se puede
console.log(barco1.toString());
// ----------------------------------------------
// Herencia
// ----------------------------------------------
var Portaaviones = /** @class */ (function (_super) {
    __extends(Portaaviones, _super);
    function Portaaviones(nombre, eslora, trb, aeronaves) {
        var _this = 
        // cascada de construtores
        _super.call(this, nombre, eslora, trb) || this;
        _this.aeronaves = aeronaves;
        return _this;
    }
    Portaaviones.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ", " + this.aeronaves;
    };
    return Portaaviones;
}(Barco));
var nimitz = new Portaaviones('US Nimitz', 330, 100000, 100);
console.log(nimitz.toString());
// ----------------------------------------------
// Declarando los atributos en el constructor
// ----------------------------------------------
var Persona = /** @class */ (function () {
    //public nombre:string; 
    //public direccion:string;
    //public telefono:string;
    function Persona(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        //this.nombre = nombre;
        //this.direccion = direccion;
        //this.telefono = telefono;
    }
    return Persona;
}());
