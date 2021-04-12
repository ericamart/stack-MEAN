let fs = require("fs");

// Se pueden leer ficheros de manera síncrona o de manera asíncrona

// - Síncrona
//   Devuelve un objeto Buffer
console.log("============================");
let contenido = fs.readFileSync("./ficheros/datos.txt");
console.log(contenido.toString());

// - Asíncrona
console.log("============================");
fs.readFile("./ficheros/datos.txt", function(error, data) {
    console.log(data.toString());
});


console.log("Fin");