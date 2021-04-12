
let peliculas = [];
let contado = 1;

// añadimos unas películas para las pruebas
peliculas.push({ 'id'       : 1, 
                 'titulo'   : 'Die Hard',
                 'director' : 'John McTiernan',
                 'genero'   : 'Accion',
                 'year'     : 1989 });

peliculas.push({ 'id'       : 2, 
                 'titulo'   : 'Harry el sucio',
                 'director' : 'Don Spiegel',
                 'genero'   : 'Accion',
                 'year'     : 1972 });

peliculas.push({ 'id'       : 3, 
                 'titulo'   : 'Don erre que erre',
                 'director' : 'J.L. Saenz de Heredia',
                 'genero'   : 'Comedia',
                 'year'     : 1970 });

contador = 4;

exports.listar = function() {
    return peliculas;
}

exports.buscar = function(id) {
    for (let i=0; i<peliculas.length; i++) {
        let pelicula = peliculas[i];
        if (pelicula.id == id) {
            return pelicula;
        }
    }
    return null;
}

exports.insertar = function(pelicula) {
    if (!pelicula || !pelicula.titulo || pelicula.titulo.trim() == '') {
        return 'Título obligatorio';
    }
    pelicula.id = contador++;
    peliculas.push(pelicula);
    return 'OK';
}

exports.modificar = function(pelicula) {
    if (!pelicula.titulo || pelicula.titulo.trim() == '') {
        return 'Título obligatorio';
    }

    for (let i=0; i<peliculas.length; i++) {
        if (pelicula.id == peliculas[i].id) {
            peliculas[i] = pelicula;
            return "OK";
        }
    }
    return "La película no existe";
}

exports.borrar = function(id) {
    for (let i=0; i<peliculas.length; i++) {
        if (peliculas[i].id == id) {
            peliculas.splice(i,1);
            return "OK";
        }
    }    
    return "La película no existe";
}


