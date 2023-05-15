/* 6. Lee un número por teclado que pida el precio de un producto 
(puede tener decimales) y calcule el precio final con IVA. 
El IVA será una constante que sera del 21% */

let precio = Number(prompt('Introduce el precio'));
const iva = 0.21; 
let precioIva = precio += (precio*iva);
alert (precioIva);