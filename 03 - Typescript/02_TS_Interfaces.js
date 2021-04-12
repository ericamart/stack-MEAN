;
// ya podemos declarar variables de tipo 'Coche'
var coche1 = {
    marca: 'Opel',
    modelo: 'Corsa',
    potencia: 90
};
function insertarCoche(coche) {
    console.log("Insertando coche marca " + coche.marca);
}
insertarCoche(coche1);
