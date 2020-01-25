/* VAR ================================= */
/*
var nombre = 'Conrad';

if ( true ){
    var nombre = 'Magneto';
}

console.log(nombre);
si ejecutamos el programa nos daremos cuenta que var que se ha utilizado en el if 
afecta al var nombre de fuera del condicional. 

var === modifica su valor por el que esté el valor del var escrito más "abajo"*/

/* LET ================================= */
/*
let nombre = 'Conrad';

if ( true ){
    let nombre = 'Magneto';
}
console.log(nombre);
let mantiene la condicional fuera del condicional if 
si estas trabajando en let y quieres modificar el valor de la variable
se puede quitar el let de dentro del if y guardará el valor Magneto */

for( var i = 0; i <= 5; i++ ){
    console.log(`i: ${ i }`);
}

console.log(i);

/* una forma de demostrarlo si usamos VAR en un FOR el valor de 6 cuando termine
de hacer los bucles será igual a i = 6; */

/* si usaramos el let i  de buenas a primeras no funcionaria
porque la variable no esta inicializada FUERA del bucle*/

i = 0;
for( let i = 0; i <= 5; i++ ){
    console.log(`i: ${ i }`);
}

console.log(i);

/* ahroa si, ya es = a 5 la i de console log al salir del bucle for */