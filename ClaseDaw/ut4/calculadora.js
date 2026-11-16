function calculadora () { //creo la funcion calculadora


const numeros = [];//creo un array para guardar los numeros introducidos por el usuario
numeros [0]= parseFloat (prompt("introduce el primer número:"));
numeros [1]= parseFloat (prompt("introduce el segundo número:"));
numeros [2]= parseFloat (prompt("introduce el tercer número:"));
numeros [3]= parseFloat (prompt("introduce el cuarto número:"));

//calculo la suma de los numeros introducidos por el usuario
let suma = 0;

for(let m of numeros){
    suma +=m;
}
//muestro el resultado de la suma en la consola y en el html
console.log("la suma de los numeros es : " + suma);
document.getElementById("suma").textContent = `La suma es: ${suma}`;

//calculo el numero maximo de los numeros introducidos por el usuario
let maximo = numeros[0];
for( let m of numeros ){
    if( m > maximo){
        maximo = m;
    }
}
//muestro el resultado del maximo en la consola y en el html
console.log("el numero máximo es : " + maximo);
document.getElementById("maximo").textContent = `El máximo es: ${maximo}`;

//calculo el numero minimo de los numeros introducidos por el usuario
let minimo =numeros[0];
for (let m of numeros){
    if (m < minimo){
        minimo = m;
    }
}
//muestro el resultado del minimo en la consola y en el html
console.log ("el numero minimo es : " + minimo);
document.getElementById("minimo").textContent = `El mínimo es: ${minimo}`;

//calculo el promedio de los numeros introducidos por el usuario
let promedio =suma /numeros.length;
//muestro el resultado del promedio en la consola y en el html
console.log ("el numero promedio es : " + promedio);
document.getElementById("media").textContent = `El promedio es: ${promedio}`;


}
//llamo a la funcion calculadora cuando el contenido del DOM se haya cargado    
window.addEventListener("DOMContentLoaded", calculadora);
