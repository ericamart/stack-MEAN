 mongo = require('mongodb');

let url = "mongodb://localhost:27017";

// Todas las funciones del módulo 'mongo' son asíncronas

//////////////////////////////////////////////
// Obteniendo / cerrando una base de datos  //
//////////////////////////////////////////////

// Podemos hacerlo con callback o con promesas

// -----------------------------------------------------
// Con callback:
// connect (url, función de callback)
mongo.connect(url, function(err, client) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Conexión establecida 1");
    client.close();
});


// -----------------------------------------------------
// Con promesas
// Si invocamos las funciones del módulo sin el segundo
// parámetros nos devuelven una promesa
mongo.connect(url)
.then( function(client) { 
    console.log("Conexión establecida 2");
    client.close();
} )
.catch( function(error) { 
    console.log(error) 
} );


// -----------------------------------------------------
// lo mismo con expresiones lambda
mongo.connect(url)
.then( client =>  { console.log("Conexión establecida 3");
                    client.close() } )
.catch( error => console.log(error) );

console.log("FIN");


//////////////////////////////////////////////
// Obteniendo / creando una colección       //
//////////////////////////////////////////////

// -----------------------------------------------------
mongo.connect(url, function(error, client) {
    if (error) {
        console.log(error);
        return;
    }

    // a la conexión le pedimos una base de datos 
    let bbdd = client.db("bbdd");

    // si no existe la crea, y si existe la entrega
    bbdd.createCollection("bicicletas", function(error, coleccion) {
        if (error) {
            console.log(error);
            return;
        }
        //console.log(coleccion);
        client.close();
    });

});

// -----------------------------------------------------
// si la colección ya existe, es mas corto el proceso
mongo.connect(url, function(error, client) {
    if (error) {
        console.log(error);
        return;
    }

    // a la conexión le pedimos una base de datos 
    let bbdd = client.db("bbdd");

    // cuidado que si escribimos mal el nombre nos dan una nueva colección
    // que todavía no existe en la base de datos
    let bicicletas = bbdd.collection("bicicletas");
    client.close();
});

//////////////////////////////////////////////
// Insertando documentos en una colección   //
//////////////////////////////////////////////

// -----------------------------------------------------
// Insertando un documento
mongo.connect(url, function(error, client) {
    if (error) {
        console.log(error);
        return;
    }
    
    let bbdd = client.db("bbdd");
    let bicicletas = bbdd.collection("bicicletas");
    let bicicleta = {
        marca : 'BH',
        modelo : 'Bicicross'
    };
    bicicletas.insertOne(bicicleta, function(error, resultado){
        if (error) {
            console.log(error);
            return;
        }
        console.log("Bicicleta insertada con el id: " + resultado.insertedId);
        client.close();
    });
});

// -----------------------------------------------------
// Insertando varios documentos
mongo.connect(url, function(error, client) {
    if (error) {
        console.log(error);
        return;
    }
    
    let bbdd = client.db("bbdd");
    let bicicletas = bbdd.collection("bicicletas");
    let objetos = [
        { marca : 'BH', modelo : 'Bicicross' },
        { marca : 'Orbea', modelo : 'Furia' },
        { marca : 'GAC', modelo : 'Crosetta' }];
    bicicletas.insertMany(objetos, function(error, resultado){
        if (error) {
            console.log(error);
            return;
        }
        console.log("Bicicletas insertadas: " + resultado.insertedIds);
        client.close();
    });

    
});


//////////////////////////////////////////////
// Búsqueda de documentos                   //
//////////////////////////////////////////////

// -----------------------------------------------------
// Buscar un documento
mongo.connect(url, function(error, client) {
    if (error) {
        console.log(error);
        return;
    }
    
    let bbdd = client.db("bbdd");
    let coleccion = bbdd.collection("bicicletas");
    coleccion.findOne({ "marca" : "BH" } , function(error, datos) {
        console.log(datos);
        client.close();
    } );
    
})

// lo mismo con promesas
mongo.connect(url)
.then( client => { 
    let bbdd = client.db("bbdd");
    return bbdd.collection("bicicletas").findOne({ "marca" : "BH" } ) 
})
.then( bicicleta => console.log(bicicleta) )  // este then es lo que devuelve la promesa del findOne
.catch( error => console.log(error) );