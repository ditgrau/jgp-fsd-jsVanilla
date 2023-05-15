/* Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha
aprobado o no. */

let notaA = parseInt(prompt('Introduce la primera nota'));
let notaB = parseInt(prompt('Introduce la segunda nota'));
let notaC = parseInt(prompt('Introduce la tercera nota'));

let promedio = (notaA + notaB + notaC) / 3;
console.log (promedio);

// lo hago con el condicional : operador ternario
// condición ? expresión_verdadera : expresión_falsa;

(promedio <= 5) ? alert('Estás suspendidx') : alert('Estás aprobadx');

