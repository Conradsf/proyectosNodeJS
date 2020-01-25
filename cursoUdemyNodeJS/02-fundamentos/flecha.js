/* FUNCION NORMAL */

// function sumar(a, b){
//     return a + b;
// }
// console.log( sumar(10,20));

/* FUNCION FLECHA */

// let sumar = (a,b) => {
//     return a + b;
// }
// console.log( sumar(10,20));

/* FUNCION FLECHA ABREVIDA */

// let sumar = (a,b) => a + b;
// console.log( sumar(10,20));

/* EJEMPLO CONVERTIR FUNCION */

// function saludar() {
//     return 'Hola Mundo';
// }
// console.log(saludar());

// let saludar = (String) => 'Hola Mundo' ;
// console.log(saludar(String));

/* No hace falta poner String como argumento */

// let saludar = () => 'Hola Mundo' ;
// console.log(saludar());

/* FUNCION DE FLECHA + TEMPLATE-STRING */

//let saludar = nombre => `Hola ${ nombre }` 
//console.log(saludar('Conrad'));

// let saludar = (nombre) => `Hola ${ nombre }` 
//console.log(saludar('Conrad'));
/* Se pueden poner o no los () a la hora de definir el parámetro */

/* TRANSFORMAR FUNCTION DEL ARRAY CON UNA FUNCION DE FLECHA */
/* ANTES */
// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneracion',
//     getNombre: function () {
//         return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
//     }
// };
// console.log(deadpool.getNombre());

/*ASI ES COMO "LOGICAMENTE" ESCRIBIRIAMOS BIEN LA FUNCION FLECHA PERO TIENE UN FALLO*/
// console.log(deadpool.getNombre());
// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneracion',
//     getNombre: () => { /* se le quita la palabra function y se le añade => */
//         return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
//     }
// };
// console.log(deadpool.getNombre());
/*Falla al ejecutar la funcion (salen todos los valores "undefined") 
porque el objeto this.* apunta FUERA de la funcion y no encuentra valores
de los objetos this.*: nombre, apellido. Ahora mismo apuntaa un objeto vacio */

/*SOLUCION AL FALLO*/
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){ /* Se quita la flecha los ":" y la "=>" */
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};
console.log(deadpool.getNombre());