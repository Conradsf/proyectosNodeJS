let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function () { /* SE PUEDE NO ESCRIBIR ": function" */
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log(deadpool.getNombre());

/* SACAR VALORES DENTRO DE UN ARRAY */

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poider = deadpool.poder;

/* DESTRUCTURACION */

// let { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);

/* MODIFICAR NOMBRE VARIABLE DE UNA DESTRUCTURACION */

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);