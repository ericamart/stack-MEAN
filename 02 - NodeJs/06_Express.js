let express = require('express');

// se invoca la función express y nos devuelve un objeto
let app = express(); 
console.log("Inicializando");

// le decimos donde van a estar los recursos estáticos
app.use(express.static('05_RecursosEstaticos'));

// app es el que tiene las fucniones que nos interesan
// se le proporciona un puerto y una función (función opcional)
// esta función NO es la que se ejecuta al llegar una petición
// la función que se ejecuta ya la tienen ellos programada
app.listen(5000, function() {
    console.log("Esperando peticiones...");
});


// -----------------------------------------------------
// petición de tipo GET (url, función)
// -----------------------------------------------------
// con '/' no le indicamos recurso, mostraría la página de inicio
/*app.get("/", function(request, response) {
    response.send("<marquee><h2>Inicio</h2></marquee>");
});*/

// lo mismo pero enviando un fichero
let path = require("path");
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/05_RecursosEstaticos/listadoPeliculas.html'));
});

// -----------------------------------------------------
// petición GET que recibe parámetros
// -----------------------------------------------------
// http://localhost:5000/sumar?s1=5&s2=5
app.get("/sumar", function(request, response) {
    // accedemos a los parámetros con la propiedad 'query' del objeto request
    let s1 = request.query.s1;
    let s2 = request.query.s2;
    response.send("La suma es: " + (parseInt(s1) + parseInt(s2)));
});


// -----------------------------------------------------
// petición GET que recibe parámetros en la URL
// -----------------------------------------------------
// http://localhost:5000/peliculas/directores/Amenabar/generos/accion
app.get("/peliculas/directores/:idDirector/generos/:idGenero", function(request,response) {
    let idDirector = request.params.idDirector;
    let idGenero   = request.params.idGenero;
    response.send("Películas del director " + idDirector + " y del género " + idGenero);
});


// -----------------------------------------------------
// obteniendo el body
// -----------------------------------------------------
// nuestro servicio REST va a recibir en el body un JSON, por lo que le decimos
// a nuestra aplicación que lo parsee a ese objeto directamente.
let bodyParser = require("body-parser");
app.use(bodyParser.json());

// http://localhost:5000/formularioPeliculas.html --> botón Insertar
app.post("/peliculas", function(request, response) {
    let pelicula = request.body; // nos da un objeto, no un json
    console.log("Insertando la película: " + pelicula.titulo);
    response.status(201);
});


// -----------------------------------------------------
// colocando un JSON en la respuesta
// -----------------------------------------------------
// http://localhost:5000/coche/5
app.get('/coche/:idCoche', function(request, response) {
    let id = request.params.idCoche;
    let coche = { 'marca'     : 'Seat',
                  'modelo'    : 'Ibiza',
                  'matricula' : '5447 KJH' };

    //response.writeHead(200, { 'content-type' : 'application/json' });
    //response.end(JSON.stringify(coche));
    response.json(coche);
});