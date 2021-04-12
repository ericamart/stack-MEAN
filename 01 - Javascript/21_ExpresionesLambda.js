// También llamadas funciones flecha

// simulamos una función subscribe del observable
function subscribe(exito, fallo, siempre) {

    //
    // se envia la petición ajax.....
    //
    let datos = '{ "nombre":"Bart" }';
    exito(datos);

    let error = '{ "status":"400", "mensaje":"blablabla" }';
    fallo(error);

    siempre();
}


subscribe(function(datos) {
            console.log(JSON.parse(datos));
          }, 
          function(error) {
            console.log(JSON.parse(error));
          }, 
          function() {
            console.log("YA");
          });



// al poner la flecha se quita la palabra 'function'

// si solo recibe un parámetro se pueden quitar los paréntesis
// si la función no recibe parámetros, es obligatorio colocar los paréntesis
// si la función recibe mas de un parámetro, los paréntesis son obligatorios

// si el cuerpo de la función solo tiene una línea, se pueden quitar las flechas

let f1a = function(datos) {
    console.log(JSON.parse(datos));
}
let f1b = datos => console.log(JSON.parse(datos)); 

// --------------------------------------------------

let f2a = function() {
    console.log("YA");
};
let f2b = () => console.log("YA");

// --------------------------------------------------

subscribe(datos => console.log(JSON.parse(datos)), 
          error => console.log(JSON.parse(error)), 
          () => console.log("YA"));



// -------------------------------------------------
// Return
// -------------------------------------------------
function crearCodigoFactura(formatear) {
    // obtener el número de la factura
    let numero = 101;

    let codigo = formatear(numero);
    return codigo;
}

// FAC-XXX
let f3a = function(numero) {
    return "FAC-" + numero;
}

// - si el cuerpo de la función tiene solo una línea, el RETURN va implícito
// - si la función tiene mas de una línea ya tenemos que colocar las llaves
//   y el RETURN lo tienemos que escribir explicitamente
// - let f3b = numero => RETURN "FAC-" + numero; --> Error sintáctico
let f3b = numero => "FAC-" + numero;

let codigo = crearCodigoFactura(f3b);
console.log(codigo);



// -------------------------------------------------
// this en expresiones lambda
// -------------------------------------------------
let persona = { nombre : 'venancio' ,
                saludar : funcion1 };


function funcion1() {
    // aqui this es el objeto al que se le asigna 'funcion1' como valor de una propiedad
    console.log(this.nombre);
    let that = this;

    let fa = function() {
        // dentro de esta función 'this' no es el mismo que en la función
        // 'funcion1' y por eso usamos (entre otras posibilidades) el 
        // truco del 'that'
        console.log(that.nombre); // venancio
        console.log(this.nombre); // undefined
    }
    fa();

    // dentro de una expresión lambda this tiene el mismo valor que el de 
    // la función que lo contiene
    // con expresiones lambda nos ahorramos el truco del that
    let fb = () => {
        console.log(that.nombre); // venancio
        console.log(this.nombre); // venancio 
    }
    fb();
}

persona.saludar();