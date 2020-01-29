const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs') //llamar el modulo de YARGS. No es un path relativo es un paquete dentro de los modulos de node.
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts) //forma optimizada
    .command('listar', 'Imprime en consola la tabla de multiplicar', { //.command viene incluido en el modulo de YARGS. Permite poner mas "--" (argumentos) para la app.
        base: { //--base
            demand: true, //obligatorio? si.
            alias: 'b' //alias puedes escribir o bien "--base" or "-b"
        },
        limite: { //--limite
            alias: 'l',
            default: 10
        }
    })
    .help() //saldra "el manual" de lo que hace la ppp
    .argv;

module.exports = {
    argv
}