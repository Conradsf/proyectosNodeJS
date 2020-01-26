/**
 * ESTE ARCHIVO SE HA APRENDIDO MUCHO SOBRE YARGS,
 * UNA HERRAMIENTA PARA PODER USAR LA APP Y QUE LAS
 * "SUBCONSULTAS" "--asdas" SE LES PUEDA ASIGNAR
 * ALIAS, LIMITE, ETC. Y, SOBRETODO, 
 * A LA HORA DE EJECUTAR LA APP RECONOZCA
 * QUE --BASE = BASE, etc. EVITANDO PROBELMAS
 * DE CRUZADO DE VALORES O NO IDENTIFICAR BIEN
 * EL ARGUMENTO. VER VIDEO 33.
 */

/**
 * const fs = require ('express'); // libreria que no pertenece a node.js (externo)
 * const fs = require ('./fs'); // librarias creadas por nosotros para el proy node.js
 * const fs = require ('fs'); // es una libreria propia de node.js
 */

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //obligatorio? si.
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

// console.log(process); //información de la máquina
// console.log(process); //ubicaciones de node y de la app.

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let argv2 = process.argv;

console.log('Limite', argv.limite); //YARGS
//console.log(argv2); //PROCESOS
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));
/* Node nos permite grabar esta información en un archivo de txt. */