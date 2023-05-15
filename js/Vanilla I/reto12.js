/* 12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
condición de salida (3 intentos y si acierta sale, aunque le queden intentos).*/

let passwordDef = 'juditen';
let newPassword = '';
let i=0;
do {
    newPassword = prompt('Introduce una contraseña'); 
    if (newPassword === passwordDef) {
        alert ('Enhorabuena');
        break;
    }else {
        i++
        alert (`contraseña incorrecta te quedan ${i} intentos`);
    }
} while (i < 3);