/*Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.*/

let radio = Number (prompt ('Introduce la medida del radio'));
const area = Math.pi*(radio**2);
// math.pi * math.pow (radio, 2)
alert (`el area es ${area}`);
