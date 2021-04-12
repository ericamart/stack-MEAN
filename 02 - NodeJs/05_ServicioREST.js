let fs = require("fs");
let http = require("http");
let negocio = require("./05_NegocioPeliculas.js");

let servidor = http.createServer( function(request, response) {
    let metodo  = request.method.toUpperCase();
    let url = request.url; // no se comprueba las minúsculas o mayúsuculas porque la llamada es case-sensitive
    console.log("Petición recibida: " + request.url);

    // GET peliculas
    // GET peliculas/{id}
    // POST peliculas
    // PUT peliculas/{id} --> sustituir un recurso por otro (PATCH --> modificar un recurso que ya existe)
    // DELETE peliculas/{id}


    if (metodo == 'GET' && url == '/peliculas') { 
        listar(request, response);

    } else if (metodo == 'GET' && url.match('^/peliculas/[0-9]+$')!=null) { 
        buscar(request, response);

    } else if (metodo == 'POST' && url == '/peliculas') { 
        insertar(request, response);
        
    } else if (metodo == 'PUT' && url.match('^/peliculas/[0-9]+$')!=null) {
        modificar(request, response);

    } else if (metodo == 'DELETE' && url.match('^/peliculas/[0-9]+$')!=null) { 
        borrar(request, response);

    } else { 
        leerRecursoEstatico(request, response);

    }  
} );
servidor.listen(4000);


function leerRecursoEstatico(request, response) {
    if (request.method.toUpperCase() != 'GET') {
        crearError(405, response);
        return;
    }

    let recurso = request.url;
    let extension = recurso.split('.')[1];
    if (typeof extension == 'undefined') {
        // respuesta 400 - Bad request
        crearError(400, response);
        return;
    }

    fs.readFile("./05_RecursosEstaticos"+recurso, function(error, data) {
        if (error != null) {
            // respuesta 404 - No existe
            crearError(404, response);
            return;
        }

        let contentType = '';
        switch(extension) {
            case 'html' : contentType : 'text/html';
                          break;
            case 'css'  : contentType : 'text/css';
                          break;
            case 'js'   : contentType : 'text/javascript';
                          break;
            case 'txt'  : contentType : 'text/plain';
                          break;
                          
        }

        response.writeHead(200, { 'content-type' : contentType });
        response.end(data.toString());
    });
}

//
// Función para crear un error como respuesta
//
function crearError(codigo, response) {
    response.writeHead(codigo, { 'content-type' : 'text/html' });
    let html = "<h1>"+codigo+"</h1>";
    switch (codigo) {
        case 405 : html += "<h2>Solo aceptamos peticiones GET</h2>";
                   break;
        case 400 : html += "<h2>Peticion incorrecta</h2>";
                   break;
        case 404 : html += "<h2>Recurso no encontrado</h2>";
                   break;
    }
    response.end(html);
}


/////////////////////////////////////////////////////////////////////////////
// LÓGICA DE CONTROL DEL SERVICIO REST
/////////////////////////////////////////////////////////////////////////////

// 1-extraer de la petición la información necesaria
// 2-transformar esa información en algo que entienda la lógica de negocio
// 3-llamar a la función de negocio adecuada
// 4-si la lógica de negocio devuelve algo, transformarla en lo que espera
//   el cliente y colocarlo en el body
// 5-si se ha producido un error devolver el mensaje http adecuado

function listar(request, response) {
    // falta un control de errores
    let peliculas = negocio.listar();
    response.writeHead(200, { 'content-type' : 'application/json' });
    response.end(JSON.stringify(peliculas));
}

function insertar(request, response) {
    // para leer el contenido del body, por si es muy grande y te quedas sin
    // memoria, en vez de darte todo te dan un stream para que lo vayas leyendo

    // leer el body es asíncrono
    request.on('data', function(body) {
        console.log(body.toString());
        let pelicula = JSON.parse(body.toString());
        let mensaje = negocio.insertar(pelicula);
        if (mensaje == 'OK') {
            response.writeHead(201, { 'content-type' : 'text/plain' });
            response.end("Se ha insertado una nueva película");

        } else {
            response.writeHead(400, { 'content-type' : 'text/plain' });
            response.end(mensaje);    
        }

    });
}

function buscar(request, response) {
    let id = request.url.split("/")[2];
    let pelicula = negocio.buscar(id);

    if (pelicula == null) {
        response.writeHead(404, { 'content-type' : 'text/plain; charset=utf-8' });
        response.end("Película no encontrada");    

    } else {
        response.writeHead(200, { 'content-type' : 'application/json' });
        response.end(JSON.stringify(pelicula));            
    }
}

function modificar(request, response) {
    let id = request.url.split("/")[2];

    request.on('data', function(body) {        
        let pelicula = JSON.parse(body.toString());
        pelicula.id = id;  // <------------------
        let mensaje = negocio.modificar(pelicula);
        if (mensaje == 'OK') {
            response.writeHead(200, { 'content-type' : 'text/plain; charset=utf-8' });
            response.end("La película ha sido modificada");

        } else {
            response.writeHead(404, { 'content-type' : 'text/plain; charset=utf-8' });
            response.end(mensaje);    
        }
    });
}

function borrar(request, response) {
    let id = request.url.split("/")[2];
    let mensaje = negocio.borrar(id);
    if (mensaje == 'OK') {
        response.writeHead(200, { 'content-type' : 'text/plain; charset=utf-8' });
        response.end("La película ha sido eliminada");

    } else {
        response.writeHead(404, { 'content-type' : 'text/plain; charset=utf-8' });
        response.end(mensaje);    
    }
}