/* 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
aritmético (String), según este último se realizará la operación correspondiente. Al final
mostrará el resultado en un cuadro de diálogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.*/



function suma (num1, num2){
    return num1 + num2;
}

function resta (num1, num2){
    return num1 - num2;
}

function producto (num1, num2){
    return num1 * num2;
}

function division (num1, num2){
    return num1 / num2;
}

function potencia (num1, num2){
    return num1 ** num2;

}
function modulo (num1, num2){
    return num1 % num2;
    
}

// empieza el programa

let numA = Number(prompt('Introduce el primer numero'));
let numB = Number(prompt('Introduce el segundo numero'));
let operacion = prompt ('Introduce el simbolo de la operacion a realizar: + - * / ** %');
switch (operacion) {
    case '+':
        alert (suma (numA, numB));
        break;
    case '-':
        alert (resta (numA, numB));
        break;
    case '*':
        alert (producto (numA, numB));
        break;
    case '/':
        alert (division (numA, numB));
        break;
    case '**':
        alert (potencia (numA, numB));
        break;
    case '%':
        alert (modulo (numA, numB));
        break;
    default:
        alert ('Initroduzca simbolo valido');
        break;
};
