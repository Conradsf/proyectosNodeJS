let nombre = 'Deadpool';
let real = 'Wade Winston';

/* ANTES */
let nombreCompleto = nombre + ' ' + real;

/* AHORA */
let nombreTemplate = `${ nombre } ${ real }`;

/* COMPROBACIÓN */ 
console.log(nombreCompleto === nombreTemplate);

/* FUNCIONA = EN FUNCIONES */

function getNombre (){
    return `${ nombre } ${ real }`;
}
console.log(`El nombre de: ${ getNombre() }`);