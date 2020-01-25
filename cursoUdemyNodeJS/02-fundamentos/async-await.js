/**
 * Async Await
 */
/* DE NORMAL */

//  let getNombre = () => {
//      return 'Conrad'
//  }
//  console.log(getNombre());

/* ASYNC */

let getNombre = async() => {
    //return 'Conrad';
    
    /*forzar error:*/
    //undefined.nombre;
    return 'Conrad';
    
    /*uso correcto para lanzar un sms de error*/
    throw new Error('No existe un nombre para ese usuario');
};

/* devuelve una promesa que resuelve 'Conrad' */

/* async() === a: */
// let getNombre = () => {
//     return new Promise( (resolve, reject) => {
//         resolve ('Conrad');
//     });
// }

getNombre().then( nombre => {
    console.log(`Tu nombre es ${ nombre }`);
    })
    .catch( e => {
        console.log('error de ASYNC', e); // la e hace referencia a Error line 21
    })

/** VER EL PODER DEL ASYNC PARTE 2*/

let getApellido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Soler');
        }, 3000);
    });
}

let saludo = async () => {
    let apellido = await getApellido(); // No se va seguir corriendo el programa si no obtiene una respuesta de await.

    return `Tu apellido es ${ apellido }`;
}

saludo().then(mensaje => { // recibimos el mensaje producto de la llamada de let saludo.
    console.log(mensaje);
    })
    .catch(e=>{
        console.log('Error de ASYNC',e);
    })