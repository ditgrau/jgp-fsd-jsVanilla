/* Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
debemos indicarlo.*/

let numA = Number(prompt ('Introduce un numero'));

if (numA%2==0) {
    alert (`${numA} es un numero par`);
}else {
    alert (`${numA} es un numero impar`);
}