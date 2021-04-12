let mongoose = require("mongoose");
let Usuario = require("../entidades/usuario.js").Usuario;

mongoose.connect("mongodb://localhost:27017/bbdd", function(error, db){
    if(error){
        console.log(error);
        process.exit(1);
    }

    Usuario.findById("5b28c24ecae43a22441e4007")
    .then( usr => {
        console.log(usr);
        
        usr.nombre = 'Harry Callahan!!!!!!!';
        usr.direccion = "C/Tal";
        return usr.save();
    })
    .then( x => {        
        return mongoose.disconnect();
    })
    .then( rs => console.log("FIN"));


});