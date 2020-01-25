let empleados = [{
    id:1,
    nombre: 'Conrad'
},{
    id:2,
    nombre: 'Melissa'
},{
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

/*EJERCICIO 1 DE PROMESAS*/
/* 
Las promises siempre tienen dos parametros resolve and reject
los resolve solo pueden tener 1 parámetro
*/

let getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {

        let empleadoDB = empleados.find( empleado => empleado.id === id )
    
        if ( !empleadoDB ){
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB);
        }
    }); 
}

// la parte positiva: es que puedes equivocarte y poner varios resolve iguales.
// sólo los leerá una vez

let getSalario = (empleado) => {
    return new Promise( (resolve,reject) => {

        let salarioDB = salarios.find( salario => salario.id === empleado.id )

        if  ( !salarioDB ){
            reject(`El empleado ${ empleado.nombre } no tiene un salario asignado`)

        } else { 
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

/* Sigue habiendo un problema si vamos anidando promesas....*/

// getEmpleado(1).then( empleado => {
//     getSalario(empleado).then( resp => {
//         console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
//     }, err => console.log(err));

// }, (err) => console.log(err));

/* Disparar promesas en cadena */
getEmpleado(1).then( empleado => {

    return getSalario(empleado);

    })
    .then ( resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    })
    .catch( err => {
        console.log(err);
    })
/* pese a que todo esta funcionando aun se podría mejorar la visualización del código.
por ejemplo el return getSalario (empleedo); ver async-await.js*/