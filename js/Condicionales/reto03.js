// 3. Pedir un número y decir si es un número negativo, si es positivo o cero.

let num = Number(prompt('Introduce un numero'));

if (num==0) {
    alert (`El numero es igual a 0`)
}else if (num<0) {
    alert (`El numero es negativo`)   
}else {
    alert (`El numero es positivo`) 
}