const fs = require('fs');

let listadoPorHacer = []; //arreglo vacio

//este const guardarDB sirve para almacenar la informacion una vez ejecutado
// crear en la app.js ya que sino la información se perdería.
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const crear = (descripcion) => {
    let porHacer = { //objeto.
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer); // hace push dentro del listadoPorHacer creado fuera de la función

    guardarDB();
    return porHacer; //confirmamos que retorna un objeto 
}

module.exports = {
    crear
}