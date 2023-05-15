// 2. Pedir dos números y decir cual es el mayor.


let numA = Number(prompt('Introduce un primer numero'));
let numB = Number(prompt('Introduce un segundo numero'));


if (numA == numB) {
    alert(`Ambos numeros son iguales`)
} else if (numA > numB) {
    alert(`${numA} es mayor que ${numB}`)
} else {
    alert(`${numB} es mayor que ${numA}`)
}