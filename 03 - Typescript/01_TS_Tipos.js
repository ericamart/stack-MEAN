// Instalar el transpilador: npm install -g typescript
// Transpilarlo: tsc 01_TS_tipos.ts
// Ejecutarlo:   node 01_TS_tipos.js
//
// Lenguaje tipado pero es opcional (no es fuertemente tipado)
//
// -----------------------------------------------------
// Tipos
// -----------------------------------------------------
var numero = 5;
var texto = "Hola";
var activo = true;
// Como typescript se transpila en javascript podemos, sin ningún problema,
// definir variables sin indicar el tipo
var noseque = "nosecuantos";
// Si no queremos indicar el tipo pero queremos hacerlo en plan typescript
var movida = "movidon";
// -----------------------------------------------------
// Arrays (solo indexados)
// -----------------------------------------------------
var palabras = ['uno', 'dos', 'tres', 'cuatro'];
// -----------------------------------------------------
// Funciones
// -----------------------------------------------------
// tipo especial 'void'
function saludar() {
    console.log("Hola radiola");
}
saludar();
//let x = saludar(); // esto no transpila (en realidad si pero el profe dice que no)
function sumar(s1, s2) {
    return s1 + s2;
}
var r = sumar(5, 7);
console.log("Resultado: " + r);
console.log("Fin");
