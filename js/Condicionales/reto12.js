
/* Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
pagar, teniendo en cuenta las siguientes consideraciones: si el vehículo es “coche”, el precio
por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5. */

const coche = 0.1;
const moto = 0.2;
const autobus = 0.5;
let precio = 0;

let vehiculo = prompt ('Introduzca en que vehiculo viajaba (moto, coche, autobus)');
let kilometros = prompt ('Introduzca cuantos km ha recorrido');

if (vehiculo ==='moto') {
    precio = (kilometros * moto);
    alert (precio);
    
}else if (vehiculo === 'coche') {
    precio = (kilometros * coche);
    alert (precio);

}else if (vehiculo === 'autobus') {
    precio = (kilometros * autobus);
    alert (precio);
    
} else {
    alert ('Introduzca un valor valido')
}