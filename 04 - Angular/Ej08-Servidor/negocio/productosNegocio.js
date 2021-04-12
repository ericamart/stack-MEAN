let Producto = require('../entidades/producto.js').Producto;

exports.buscarProductos = function( criterio ){

    if(!criterio){
        criterio = {};
    }

    return new Promise( function(resolve, reject){
            Producto.find(criterio)
            .then( productos => resolve(productos) )
            .catch( error => reject( { status:500, texto:'Madre mía, que castañazo' } ) );
    });

}





