interface Coche {
    marca:string,
    modelo:string,
    potencia:number 
};

// ya podemos declarar variables de tipo 'Coche'

let coche1:Coche = {
    marca    : 'Opel',
    modelo   : 'Corsa',
    potencia : 90
}

function insertarCoche(coche:Coche):void {
    console.log("Insertando coche " + coche.marca + " " + coche.modelo);
}
insertarCoche(coche1);

// en este caso no le ponemos el tipo
let coche2 = {
    marca    : 'Opel',
    modelo   : 'Corsa',
    potencia : 90
}
insertarCoche(coche2);
// si le quitamos alguna propiedad a coche2, no deja llamar a 'insertarCoche'

