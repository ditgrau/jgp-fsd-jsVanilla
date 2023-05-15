/* 10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.*/

// let numVentas = Number (prompt ('Introduzca numero de ventas'));
// let sumaVentas = 0;
// let precioVenta = 0;

// for (let i = 0; i< numVentas; i++) {
//     precioVenta = Number (prompt('Introduzca el precio de la venta'));
//     sumaVentas += precioVenta;
// }

// alert (sumaVentas);

let numVentas = Number (prompt ('Introduzca numero de ventas'));
let sumaVentas = 0;

for (let i = 0; i< numVentas; i++) {
    sumaVentas += Number (prompt('Introduzca el precio de la venta'));
}

alert (sumaVentas);