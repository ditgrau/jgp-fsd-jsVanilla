
/*Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
código responda cuántos días tiene ese mes.*/
// enero, marzo, mayo, julio, agosto, octubre y diciembre - 31dias

let mes = Number(prompt('Introduce el numero del mes del año que quieras (entre 1 y 12)'));

if (mes > 7 && mes % 2 == 0) {
    alert(`El mes ${mes} tiene 31 días`)
} else if (mes < 8 && mes % 2 !== 0) {
    alert(`El mes ${mes} tiene 31 días`)
} else {
    alert(`El mes ${mes} tiene 30 días`)
}