let mongoose = require("mongoose");

let esquemaProducto = new mongoose.Schema({
    //_id    : ObjectId,
    codigo      : String,
    nombre      : String,
    descripcion : String,
    precio      : Number,
    imagen      : String,
    categoria   : String
}); 

exports.Producto = mongoose.model('productos', esquemaProducto);
