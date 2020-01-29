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

const argv = require('./config/yargs').argv; //primero requerimos el archivo yargs.js y luego sólo recuperamos .argv del archivo


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]

//console.log(argv);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite) //si pusieramos solo base no funcionaria. ya que ahora el let se llama argv.
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no encontrado');
}

// console.log(process); //información de la máquina
// console.log(process); //ubicaciones de node y de la app.

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


/*
let argv2 = process.argv; //comprobar el code: node app listar --help
console.log('Limite', argv.limite); 
*/

//YARGS
//console.log(argv2); //PROCESOS

/* Node nos permite grabar esta información en un archivo de txt. */
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));