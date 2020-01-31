//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion); //esta función retorna una tarea por hacer.
        console.log(tarea); // { descripcion: 'pasear al perro', completado: false }
        break;

    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        console.log('Tareas actualizadas');
        break;

    default:
        console.log('Comando no es encontrado');
}