let usuarios = [];
usuarios.push( {
    id     : 1,
    nombre : 'Harry Callahan',
    login  : 'a',
    pw     : 'a'
} );
usuarios.push( {
    id     : 2,
    nombre : 'Bud Spencer',
    login  : 'b',
    pw     : 'b'
} );
let contador = 2;


exports.buscarPorLogin = function(login, pw){    
    
    return new Promise( function(resolve, reject){
        for(let a=0; a<usuarios.length; a++){
            let usuario = usuarios[a];
            if( usuario.login == login && usuario.pw == pw ){
                resolve(usuario);
                return;
            }
        }
        reject();
    });
    
}

exports.insertar = function(usuario){
    
    return new Promise( function( resolve, reject ){

        if(!usuario.nombre || usuario.nombre.trim()==''){
            reject("Nombre obligatorio");
            return;
        }
        
        usuario.id = ++contador;
        usuarios.push(usuario);
        resolve();

    } );   
    
    
}










