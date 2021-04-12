let Pedido = require('../entidades/pedido.js').Pedido;

exports.listarPedidosUsuario = function(id, usuario){

    if( id != usuario._id){
        return new Promise( function(resolve, reject){
            reject( { status:403, texto:'Solo puedes listar tus pedidos, imbécil' } );
        });        
    }

    return new Promise(function(resolve, reject){
        Pedido.find( { 'usuario._id' : id } )
        .then( pedidos => resolve(pedidos) )
        .catch( error => reject( { status:500, texto:'Fallo al buscar los pedidos' } ));
    });
    
}

exports.insertarPedido = function(pedido, usuario){

    if(pedido.usuario._id != usuario._id){
        return new Promise( function(resolve, reject){
            reject( { status:403, texto:'De que vas, eh? DE QUE VAS!?' } );
        });
    }

    let pedidoMG = new Pedido( pedido );
    pedidoMG.codigo = "PED-"+Math.round(Math.random()*10000)

    return new Promise( function(resolve, reject){
        pedidoMG.save()
        .then( rs => resolve(rs) )
        .catch( error => reject( { status:500, texto:'Catapún' } ));
    });

}



