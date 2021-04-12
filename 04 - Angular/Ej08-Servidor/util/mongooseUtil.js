let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.conectar = function(){       
    return new Promise( function(resolve, reject){
        mongoose.connect( 'mongodb://localhost:27017/bbdd' )  
        .then( rs => resolve('ok') )
        .catch( error => reject('no se pudo conectar') )
    });
}

