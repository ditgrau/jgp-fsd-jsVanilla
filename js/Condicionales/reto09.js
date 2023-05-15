/* Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
El usuario introduce marca y modelo y el programa saca el descuento correspondiente por
pantalla.*/

let marca = prompt('introduzca la marca');
let modelo = prompt('introduzca el modelo');

let marcaModelo = (marca + modelo).toLowerCase(); // acuerdate del FOKIN PARENTESIS en los metodos! 
alert(marcaModelo);

if (marcaModelo === fordfiesta) {
    alert('Tu descuento es del 5%')
} else if (marcaModelo === fordfocus) {
    alert('Tu descuento es del 10%')
} else {
    alert('Introduce marca y modelo válidos')
}