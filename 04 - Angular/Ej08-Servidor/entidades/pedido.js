let mongoose = require("mongoose");
let Usuario = require("./usuario.js").Usuario;
let Producto = require("./producto.js").Producto;

let esquemaPedido = new mongoose.Schema({
    //_id    : ObjectId,
    codigo    : String,
    fecha     : String, //cobarde
    total     : Number,
    direccion : String,

    usuario   : Usuario.schema,

    detalles  : [{
                    cantidad : Number,
                    precio   : Number,
                    producto : Producto.schema
                 }]
})

exports.Pedido = mongoose.model('pedidos', esquemaPedido);

/*
let mongooseUtil = require("../util/mongooseUtil.js");

mongooseUtil.conectar()
.then( pruebas )
.catch( error => console.log(error));

function pruebas(){

    let pedido = new Pedido( );
    pedido.codigo = "PED-0";
    pedido.direccion = "C/Falsa, 123";    
    pedido.fecha = "Hoy";

    detalles = [];

    Usuario.findById("5b31f3f17316bc3d3cdb8078")
    .then( usr => {
        pedido.usuario = usr;
        return Producto.findById("5b34b67c72ec8b3e24f6ab8a");
    })
    .then( prod => {
        detalles.push( { cantidad:1, 
                         precio:25,
                         producto: prod  });
        return Producto.findById("5b34b67c72ec8b3e24f6ab8b");
    })
    .then( prod => {
        detalles.push( { cantidad:2, 
                         precio:50,
                         producto: prod  });
        pedido.detalles = detalles;

        return pedido.save();
    })    
    .then( rs => console.log("YA"))
    .catch( error => console.log(error) );

}
*/

