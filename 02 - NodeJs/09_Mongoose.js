//npm install mongoose
let mongoose = require("mongoose");

//Esto hay que hacerlo una sola vez para toda la aplicación
mongoose.Promise = global.Promise;

//Conectamos con la base de datos (devuelve una promesa)
let url = "mongodb://localhost:27017/bbdd";
let promesa = mongoose.connect( url );
promesa.then( pruebas )
       .catch( error => console.log(error));
console.log("FIN");

function pruebas(){

    /*Definiendo el esquema
    Tipos
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
    Decimal128
    Map
    */
    let esquemaUsuario = new mongoose.Schema({
            //_id    : ObjectId,
            nombre : String,
            login  : String,
            pw     : String,
            mail   : String,
            direccion : String,
            telefono  : String,
            idioma    : String
        }); 

    //Obteniendo el modelo. 'usuarios' es el nombre de la colección
    Usuario = mongoose.model('usuarios', esquemaUsuario);


    let usuario = new Usuario();

    usuario.nombre = 'Ringo Starr';
    usuario.login = 'e';
    usuario.pw = 'e';

    //usuario.save();

    let usr = {
        nombre : 'Templeton Peck',
        login  : 'fenix',
        pw     : 'fenix'
    }

    insertar(usr)
    .then( ok => console.log(ok))
    .catch( error => console.log(error));

    buscar();


}//función pruebas

function insertar(usuario){

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

    console.log("1:"+usuario._id);
    usuario = new Usuario(usuario);
    return new Promise( function( resolve, reject ){
        usuario.save()
        .then( rs => {
            console.log("3:"+usuario._id);
            resolve({ status: 200, texto:'Usuario insertado' });
         } )
        .catch( error => { 
            reject({ status: 500, texto: 'Ay mamá' });
        } )
    } );
}

function buscar(){  

    Usuario.findOne( { login:'a', pw:'a' }, function(error, data){
        console.log("==================================");
        console.log(data);
    } );

    Usuario.findOne( { login:'b', pw:'b' })
    .then( datos => {
        console.log("==================================");
        console.log(datos)
    });
    
}

//
//Composición de esquemas
//

let esquemaProducto = new mongoose.Schema({
    //_id    : ObjectId,
    codigo      : String,
    nombre      : String,
    descripcion : String,
    precio      : Number,
    imagen      : String,
    categoria   : String
}); 

let Producto = mongoose.model('productos', esquemaProducto);

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

let Pedido = mongoose.model('pedidos', esquemaPedido);

function insertandoUnPedido(){

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


