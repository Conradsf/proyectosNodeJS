const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    //si la base recibe un limite si es = a 3 ... solo hace base * 1, base *2, base * 3
    // limite = 10 (valor por defecto en los parámetros)
    console.log('========================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${i} = ${ base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${ base}" no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}