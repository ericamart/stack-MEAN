let express = require('express');
let negocioUsuarios = require('../negocio/usuariosNegocio.js');

let router = express.Router();

router.get('/usuarios/credenciales', buscarPorLogin);
router.post('/usuarios', insertar);

exports.router = router;

/**************************************/
/* Funciones con la lógica de control */
/**************************************/

function buscarPorLogin(request, response){
    let login = request.query.login;
    let pw    = request.query.pw;

    negocioUsuarios.buscarPorLogin(login, pw).
    then( function(usuario){
        response.json(usuario);
    } ).
    catch( function(){
        response.status(404);
        response.send("Credenciales incorrectas");
    });

    /*
    let usuario = negocioUsuarios.buscarPorLogin(login, pw);
    if( usuario ){
        response.json(usuario);
    } else {
        response.status(404);
        response.send("Credenciales incorrectas");
    }
    */
}

function insertar(request, response){
    let usuario = request.body;
    negocioUsuarios.insertar(usuario)
    .then( () => response.send("Usuario insertado"))
    .catch( mensaje => {
        response.status(400);
        response.send(mensaje);
    });

}




