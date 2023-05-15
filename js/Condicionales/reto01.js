// Pedir dos números y decir si son múltiplos o no.

let numA = Number (prompt('Introduce un primer numero'));
let numB = Number (prompt('Introduce un segundo numero'));

if (numA % numB === 0){
    alert (` ${numA} es multiplo de ${numB}`);
} else {
    alert (` ${numA} no es multiplo de ${numB}`);
}

if (numB % numA === 0){
    alert (` ${numB} es multiplo de ${numA}`);
} else {
    alert (` ${numB} no es multiplo de ${numA}`);
}
