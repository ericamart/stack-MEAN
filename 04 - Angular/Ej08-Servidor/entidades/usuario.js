let mongoose = require("mongoose");

let esquemaUsuario = new mongoose.Schema({
    //_id    : ObjectId,
    nombre : String,
    login  : String,
    pw     : String,
    mail   : String,
    direccion : String,
    telefono  : String,
    idioma    : String,
    rol       : String
}); 

//Obteniendo el modelo. 'usuarios' es el nombre de la colección
exports.Usuario = mongoose.model('usuarios', esquemaUsuario);




