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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find( empleado => empleado.id === id )
    
    if ( !empleadoDB ){
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB)
    } 
}

/* EJERCICIO 1 */
getEmpleado(1, (err,empleado) =>{

    if (err) {
        return console.log(err);
    }

    console.log(empleado);
});

/* EJERCICIO 2 */
let getSalario = (empleado, callback) => {
    
    let salarioDB = salarios.find( salario => salario.id === empleado.id )

    if  ( !salarioDB ){
        callback(`El empleado ${ empleado.nombre } no tiene un salario asignado`)
    } else {
        callback(null,{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(3, (err,empleado) =>{

    if (err) {
        return console.log(err);
    };

    getSalario(empleado, (err, resp) =>{
        if (err){
            return console.log(err);
        };

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    });
});
/* fijate que se ha puesto getSalario dentro de getEmpleo. Si por cada callback
se tubiera que anidar de esta forma acabariamos viendo un dibujo parecido a una ">",
ficil de mantener y visualmente incómodo de trbajar.*/