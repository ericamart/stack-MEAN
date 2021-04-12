let mongo = require("mongodb");
let Usuario = require("../entidades/usuario.js").Usuario;

exports.buscarPorLoginYPassword = function(login, pw){    
    let promesa = new Promise( function( resolve, reject ){
        //let bbdd = mongoDBUtil.getConexion();
        //bbdd.collection("usuarios").findOne( { login:login, pw:pw } )

        Usuario.findOne( { login:login, pw:pw } )   
        .then( datos => { 
            if( datos!=null){
                resolve(datos) 
            } else {
                reject( { status:404, texto:'Credenciales incorrectas' } );
            }
        } )
        .catch( error => { 
            reject( { status:500, texto:'Nos hemos marcado un padre Carras' } );
        } );    
    });    
    return promesa;

}

//El objeto usuario que nos envía sale directamente del json
//recibido en el servicio rest
exports.insertar = function(usuario){

    if( typeof usuario._id != 'undefined' ){
        return new Promise( function(resolve, reject){
            reject({ status: 400, texto: 'No se puede insertar con _id' });
        });                        
    }
    
    if ( !usuario.nombre || usuario.nombre.trim()=='' ||
         !usuario.login  || usuario.login.trim()==''  ||
         !usuario.pw     || usuario.pw.trim()=='' ){
        return new Promise( function(resolve, reject){
            reject( { status: 400, texto: 'Datos incorrectos' });
        });               
    }

    usuario = new Usuario(usuario);
    return new Promise( function( resolve, reject ){
        usuario.save()
        .then( rs => resolve({ status: 200, texto:'Usuario insertado' }) )
        .catch( error => { 
            reject({ status: 500, texto: 'Ay mamá' });
        } )
    } );
}

exports.modificar = function(usuarioAModificar, usuarioQueModifica){

    //AUTORIZACION (falta e  l ROL)
    if( usuarioAModificar._id != usuarioQueModifica._id){
        return new Promise( function(resolve, reject){
            reject( { status: 403, texto: 'No tienes permiso' } );
        });         
    }

    //VALIDACION
    if ( !usuarioAModificar.nombre || usuarioAModificar.nombre.trim()=='' ||
         !usuarioAModificar.login  || usuarioAModificar.login.trim()==''  ||
         !usuarioAModificar.pw     || usuarioAModificar.pw.trim()=='' ){
        return new Promise( function(resolve, reject){
            reject( { status: 400, texto: 'Datos incorrectos' } );
        });       
    }

    //new
    return new Promise( function(resolve, reject){

        console.log("=================================");
        console.log(usuarioAModificar._id);
        console.log(usuarioAModificar);

        Usuario.findByIdAndUpdate( usuarioAModificar._id, usuarioAModificar)
        .then( rs => resolve(rs))
        .catch( error => reject( { status: 500, texto: 'Fostión' }) );
    });

}

exports.borrar = function(usuario){
    let bbdd = mongoDBUtil.getConexion();
    return bbdd.collection("usuarios").deleteOne( { _id: mongo.ObjectID(usuario._id) } );
}

exports.buscar = function(id){
    let bbdd = mongoDBUtil.getConexion();
    return bbdd.collection("usuarios").findOne( { _id : mongo.ObjectId(id) } );
}

exports.listar = function(){
    let bbdd = mongoDBUtil.getConexion();
    return bbdd.collection("usuarios").find();
}

exports.buscarPorLogin = function(login){

    return new Promise( function( resolve, reject ){
        
        mongoDBUtil.getConexion().collection("usuarios")
            .findOne({ login:login })
        .then( usr => {
            if( usr ){
                resolve(usr);
            } else {
                reject( { status:404, mensaje:'No existe un usuario con ese login'} )
            }
        } )
        .catch( error => { reject( { status:500, mensaje:'Abandona ese cuerpo'} )} )        

    });

}















