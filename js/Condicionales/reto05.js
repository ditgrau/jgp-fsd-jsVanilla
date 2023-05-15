/* Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres
números y determinar si el promedio es mayor que cinco.*/

let numA = parseInt(prompt('Introduce un primer numero'));
let numB = parseInt(prompt('Introduce un segundo numero'));
let numC = parseInt(prompt('Introduce un tercer numero'));

let promedio = (numA + numB + numC) / 3

if (promedio >= 5) {
    alert(`El promedio de ${numA}, ${numB} y ${numC} es mayor o igual a 5`)
} else {
    alert(`El promedio de ${numA}, ${numB} y ${numC} es menor de 5`)
}