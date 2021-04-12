//
// Una promesa recibe como parámetro una función que
// recibe dos parámetros que también son funciones
//
let promesa = new Promise( function(resolve, reject) {

    // Dentro de la función que le pasamos a la promesa colocamos
    // el código que ejecutará una tarea 'asíncronamente'
    // - leer un fichero
    // - hacer una consulta a la base de datos
    // - transformar una imagen de un formato a otro
    // - ordenar un array
    // - ......

    for (let i=0; i<100; i++) {

    }
    console.log("YA");

    // Una vez realizada la tarea sabremos si ha tenido éxito o no.
    // (hay tareas que antes o después terminarán pero que no fallarán
    // nunca, como por ejemplo ordenar un array)

    // Si tiene éxito invocamos 'resolve'
    // Si falla invocamos 'reject'
    let ok = true;
    if (ok) {
        resolve();
    } else {
        reject();
    }
});


// Usando la promesa

promesa.
then(function(){ console.log("OK") }).
catch(function(){ console.log("error") });

// si la usamos mas de una vez no ejecuta el código interno de la promesa.
// es como que ya se ha consumido y no vuelve a ejecutarse
// En este ejemplo el mensaje "YA" solo se muestra en una vez. 

promesa.
then(rellenarTabla).
catch(mostrarError);

promesa.
then(rellenarDesplegable).
catch(mostrarError);

function rellenarTabla() {
    console.log("Rellenando la tabla");
}

function rellenarDesplegable() {
    console.log("Rellenando desplegable");
}

function mostrarError() {
    console.log("Error");
}



///////////////////////////////////////////////////////
// Normalmente las pormesas se declaran en una función
///////////////////////////////////////////////////////

function encontrarMaximo(datos) {
    return new Promise( function(resolve, reject) {

        if (!datos || datos.length == 0) {
            reject('El array está vacío');
            return;
        }

        let max = Number.MIN_VALUE;
        for (let valor of datos) {
            if (valor > max) {
                max = valor;
            }
        }
        
        resolve(max);
    } );
}

let promesa2 = encontrarMaximo([-7, -6, -5, 4, -3, 0]);
promesa2.
then( function(max) { console.log("El máximo es " + max) }).
catch(mostrarError);


let promesa3 = encontrarMaximo([20, 6, -6, 0, 15000, 15, 0]);
promesa3.
then(mostrarMaximo).
catch(mostrarError);

let promesa4 = encontrarMaximo([]);
promesa4.
then(mostrarMaximo).
catch(error);

function mostrarMaximo(max) {
    console.log("MAX: " + max) ;
}

function error(error) {
    console.log("Error: " + error) ;
}

