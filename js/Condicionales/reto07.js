/* Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además
el número. */

let numeroAleatorio = Math.floor (Math.random ()*20)

if (numeroAleatorio % 2 == 0) {
    alert (`El numero aleatorio ${numeroAleatorio} es par`)
} else {
    alert (`El numero aleatorio ${numeroAleatorio} es impar`)
}

/////////////////////////// EXPLICACION CON DESGLOSE

// math.random saca un valor aleatorio entre 0 y 1 (sin incluir el 1)
// let numeroRandom = (Math.random());
// console.log (numeroRandom); //0.3234336363112056

// multiplicamos por el numero tope, aunque este no saldrá, porque en el random no sale el 1
// let numMultiplicado = numeroRandom * 20;
// console.log (numMultiplicado); // 6.468672726224112

// math.florr redondea los numero decimales hacia abajo 
// let numRedondo = Math.floor (numMultiplicado);
// console.log (numRedondo); // 6

