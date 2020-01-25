/**
 * const fs = require ('express'); // libreria que no pertenece a node.js (externo)
 * const fs = require ('./fs'); // librarias creadas por nosotros para el proy node.js
 * const fs = require ('fs'); // es una libreria propia de node.js
 */
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 5;

console.log(process);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));
/* Node nos permite grabar esta información en un archivo de txt. */