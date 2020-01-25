/* ejecuta una funcion2 dentro de una funcion1 la cual limita el tiempo que va 
a tardar en ejecutar la funcion2 */

/* FUNCION NORMAL */
// setTimeout( function() { 
//     console.log('Hola Mundo');
// }, 3000);

/*FUNCION FLECHA*/
// setTimeout( () => { 
//     console.log('Hola Mundo');
// }, 3000); /* 1000 = 1seg */

/* VIDEO 19*/
let getUsuarioById = ( id, callback ) => {
    let usuario = {
        nombre: 'Conrad',
        id
        /*si el valor es = al de la propieta id = id, es redundante, 
        se puede eliminar id: id*/
    }
    if (id === 20){
        callback(`El usuario con id ${ id }, no existe en la base de datos`);
    } else {
        callback(null,usuario); /* queremos devolver el usuario de la base de datos */
    }    
}

getUsuarioById(10, (err, usuario) => {
    if (err){
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});
/* MANUAL */
// 1. Primer creamos la función getUsuarioById que recibe id y un callback como parámetro.
// 2. Se le añaden los parametro a traves de un objeto usuario. con nombre y id
// 3. Si creamos un if: se añade un callback diciendo el error
// 4. else: ejecutamos un callback que envie una id null, i el nombre de usuario.
// 4.1 si no se pone null ejuctará el if(err) por falta de añadir un valor al param.
// 4.2 en consecuencia estará bien pero no validará correctamente.
// 5. Ahora si, ejecutamos la funcion getUsuarioById con una id=10, err=null, usuario=Conrad

