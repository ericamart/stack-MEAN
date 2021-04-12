let express = require('express');
let bodyParser = require('body-parser');
let usuariosRest = require('./rest-apis/usuariosRest.js');

let app = express();

app.disable('x-powered-by');

//Para el cross origin:
//Incluye configuración para BASIC AUTHENTICATION
app.use(function( request, response, next){
    console.log("Petición recibida:"+request.path);
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next(); 
});

app.use(bodyParser.json());

app.use('/', usuariosRest.router);

app.listen(8000, function(){ 
    console.log('Esperando peticiones...');
});

