// Instalar el transpilador: npm install -g typescript
// Transpilarlo: tsc 01_TS_tipos.ts
// Ejecutarlo:   node 01_TS_tipos.js

//
// Lenguaje tipado pero es opcional (no es fuertemente tipado)
//

// -----------------------------------------------------
// Tipos
// -----------------------------------------------------
let numero:number = 5;
let texto:string = "Hola";
let activo:boolean = true;

// Como typescript se transpila en javascript podemos, sin ningún problema,
// definir variables sin indicar el tipo
let noseque = "nosecuantos";
// Si no queremos indicar el tipo pero queremos hacerlo en plan typescript
let movida:any = "movidon";


// -----------------------------------------------------
// Arrays (solo indexados)
// -----------------------------------------------------
let palabras:string[] = ['uno', 'dos', 'tres', 'cuatro'];

// -----------------------------------------------------
// Funciones
// -----------------------------------------------------

// tipo especial 'void'
function saludar():void {
    console.log("Hola radiola");
}
saludar();
//let x = saludar(); // esto no transpila (en realidad si pero el profe dice que no)


function sumar(s1:number, s2:number):number {
    return s1 + s2;
}
let r:number = sumar(5,7);
console.log("Resultado: " + r);


console.log("Fin");