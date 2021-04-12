let express = require("express");
let productosNegocio = require("../negocio/productosNegocio.js");

let router = express.Router();

router.get("/productos", listarProductos);
router.get("/productos/categorias/:cat", listarProductosCategoria);

exports.router = router;

//LOGICA DE CONTROL/////////////////////////////////

function listarProductos(request, response){
    console.log("listarProductos");

    productosNegocio.buscarProductos()
    .then( productos => {
        response.status(200);
        response.json(productos);
    })
    .catch( error => {
        response.status(error.status);
        response.json(error);
    });

}

function listarProductosCategoria(request, response){
    console.log("listarProductosCategoria");
    
    let categoria = request.params.cat;
    
    productosNegocio.buscarProductos( { categoria:categoria })
    .then( productos => {
        response.status(200);
        response.json(productos);
    })
    .catch( error => {
        response.status(error.status);
        response.json(error);
    });
}