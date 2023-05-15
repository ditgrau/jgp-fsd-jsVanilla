// 4. Pedir un string y determinar si tiene cinco caracteres o más.

let string = prompt('Introduzca una palabra');

/* .lenght es una funcion de los arrays. 
En este caso los strings funcionan como arrays de caracteres. 
Lo que hace el .lenght es contar cuantos elementos hay.*/ 

if (string.length > 5 && string.length != 5) { // podria haber sido >=6
    alert('La palabra introducida tiene más de 5 carácteres');

} else if (string.length == 5) { // recuerda == para comparacion, si no es asignacion
    alert('La palabra introducida tiene 5 carácteres');

} else {
    alert('La palabra introducida tiene menos de 5 carácteres');
}