/* Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y
realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un
vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o
igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje
“El grosor para esta rueda es inferior al recomendado” */


///////////////////// primera parte 
//  Crea un script que pida diámetro de una rueda y grosor (en metros).

let diametro = Number (prompt('Introduzca el diametro de la rueda en metros'));
let grosor = Number (prompt('Introduzca el grosor de la rueda en metros'));

///////////////////// segunda parte 
/* Diámetro superior a 1.4 metros: “La rueda es para un vehículo grande”. 
Si es menor o igual a 1.4 m pero mayor que 0.8 “La rueda es para un vehículo mediano”. 
Si no: “La rueda es para un vehículo pequeño”.*/

if (diametro>1.4) {
    alert ('La rueda es para un vehículo grande')    
}else if (diametro>= 0.8) {
    alert ('La rueda es para un vehículo mediano')      
} else {
    alert ('La rueda es para un vehículo pequeño')
}

///////////////////// tercera parte 
/* Diámetro es superior a 1.4 con un grosor inferior a 0.4, 
o si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25,
“El grosor para esta rueda es inferior al recomendado” */

if (diametro>1.4 && grosor<0.4 || diametro<= 1.4 && diametro>= 0.8 && grosor<0.25) {
    alert ('El grosor para esta rueda es inferior al recomendado')
}