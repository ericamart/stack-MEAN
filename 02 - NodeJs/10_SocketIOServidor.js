// npm install socket.io

let http = require("http");
let express = require("express");
let socketIO = require("socket.io");

let app = express(); // se crea un objeto express
let server = http.createServer(app); // se crea un servidor pasándole el objeto express
let io = socketIO(server);

app.use(express.static("./10_RecursosEstaticos"));
app.use(function( request, response, next) {
    //Para el cross origin:
    //Incluye configuración para BASIC AUTHENTICATION
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

}); 

server.listen(9000, () => console.log("Experando conexiones..."));

// Socket.io funciona con eventos.
// Los eventos son cadenas de texto.
// Se asocia el nombre de un evento a una función.
// Esta función recibirá por parámetro un valor que depende de las circustancias
//io.on("evento", funcion(xxx){});

// Hay eventos cuyo nombre está predefinido, así como el valor del
// parámetro que recibe la función
// Por ejemplo, al conectarse un cliente nos entregan el socket
//io.on('connection', function(socket){})

io.on('connection', socket => {
    console.log("Cliente conectado. Socket.id: " + socket.id);

    socket.on('identificador', identificador => {
        console.log(socket.id + ': ' + identificador);
        // le añadimos la propiedad identificador al socket para saber quien emite los mensajes
        socket.identificador = identificador;

        // a todos excepto al socket
        socket.broadcast.emit('identificador', identificador) ;
    });

    socket.on('mensaje', mensaje => {
        console.log(socket.id + ": " + mensaje);

        let difusion = { identificador : socket.identificador,
                         mensaje       : mensaje };

        //io.emit envía un mensaje a todos los websockets
        io.emit('mensaje', JSON.stringify(difusion));

        // si alguien no escribe en 4 segundos enviamos aviso

        setTimeout(function() {
            let aviso = { identificador : "SERVIDOR",
                          mensaje       : "Escribe algo" };
            socket.emit('aviso', JSON.stringify(aviso));
        }, 4000);  
    });

    socket.on('disconnect', () => {
        console.log(socket.identificador + " se ha desconectado");
    });


});


