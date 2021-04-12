let fs = require("fs");

console.log("======================================");
let data = fs.readFileSync("./ficheros/fichero1.txt");
let segundoFichero = data.toString();

data = fs.readFileSync("./ficheros/"+segundoFichero);
let tercerFichero = data.toString();

data = fs.readFileSync("./ficheros/"+tercerFichero);
console.log(data.toString());


console.log("======================================");
// aquí tenemos un ejemplo de callback hell
fs.readFile("./ficheros/fichero1.txt", function(error, data) {
    let segundoFichero = data.toString();
    fs.readFile("./ficheros/"+segundoFichero, function(error, data) {
        let tercerFichero = data.toString();
        fs.readFile("./ficheros/"+tercerFichero, function(error, data) {
            console.log(data.toString());
        });
    });
});