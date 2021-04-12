let express = require('express');
let negocio = require("./05_NegocioPeliculas.js");
let bodyParser = require("body-parser");
let path = require("path");

let app = express(); 

app.use(express.static('05_RecursosEstaticos'));
app.use(bodyParser.json());

// Para que no incluya en la cabecera que la aplicación está hecha con Node Express
app.disable('x-powered-by');

//Para el cross origin:
//Incluye configuración para BASIC AUTHENTICATION
//Todas las peticiones que entren ejecutarán esta función. Para que se acepte el cross origin las peticiones
//tienen que tener en el response esta información
app.use(function( request, response, next){
    console.log("Petición recibida:"+request.path);
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next(); //tira, arrea palante
});


app.get("/peliculas", function(request, response) {
     let peliculas = negocio.listar();
     response.json(peliculas);
});

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/05_RecursosEstaticos/listadoPeliculas.html'));
});
app.get("/peliculas", listar);
app.get("/peliculas/:id", buscar);
app.post("/peliculas", insertar); 
app.put("/peliculas/:id", modificar);
app.delete("/peliculas/:id", borrar);

app.listen(7000, function() {
    console.log("Esperando peticiones...");
});

function listar(request, response) {
    let peliculas = negocio.listar();
    response.json(peliculas);
}

function buscar(request, response) {
    let id = request.params.id;
    let pelicula = negocio.buscar(id);
    if (pelicula == null) {
        response.status(404);
        response.send();
    } else {
        response.json(pelicula);
    }
}

function insertar(request, response) {
    let pelicula = request.body;
    let mensaje = negocio.insertar(pelicula);
    console.log(mensaje);
    if (mensaje == 'OK') {
        response.status(201);
        response.send("Se ha insertado una nueva película");
    } else {
        response.status(400);
        response.send(mensaje);
    }
}


function modificar(request, response) {
    let pelicula = request.body;
    pelicula.id = request.params.id;
    let mensaje = negocio.modificar(pelicula);
    if (mensaje == 'OK') {
        // response.status(200);
        response.send("Película modificada");
    } else {
        response.status(404);
        response.send(mensaje);
    }
}


function borrar(request, response) {
    let id = request.params.id;
    console.log(id);
    let mensaje = negocio.borrar(id);
    if (mensaje == 'OK') {
        response.status(200);
        response.send("La película ha sido eliminada");
    } else {
        response.status(404);
        response.send(mensaje);    
    }
}


