let http = require("http");


console.log("Hola mundo!");

/*
let server = http.createServer( function() {
    console.log("Petición recibida");
});

server.listen(2000);
*/

http.createServer( function(peticion, respuesta) {
    console.log("Petición recibida");

    // configuramos la cabecera de la respuesta
    respuesta.writeHead(200, { 'content-type' : 'text/html' } );
    // colocamos el contenido en el body de la respuesta
    //respuesta.end("<h1>HTML generado en el servidor</h1>");
    
    let datos = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]; 

    let html = "<html>" +
                "<head></head>" + 
                "<body>" +
                    "<h1 align='center'>HTML generado en el servidor</h1>" +
                    "<table align='center' border='1'>";

    for (var i=0; i<datos.length; i++) {
        html +=         "<tr><td>"+datos[i]+"</td></tr>";
    }

    html +=         "</table>" +
                "</body>" + 
               "</html>";

    respuesta.end(html);


} ).listen(2000);  // abrimos un puerto a la escucha
