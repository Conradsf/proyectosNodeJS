/**
 * const fs = require ('express'); // libreria que no pertenece a node.js (externo)
 * const fs = require ('./fs'); // librarias creadas por nosotros para el proy node.js
 * const fs = require ('fs'); // es una libreria propia de node.js
 */
const { crearArchivo } = require('./multiplicar/multiplicar');

// console.log(process); //información de la máquina
// console.log(process); //ubicaciones de node y de la app.

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));
/* Node nos permite grabar esta información en un archivo de txt. */