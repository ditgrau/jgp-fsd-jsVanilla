/* 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
o no. Usa un switch para ello.*/

let diaSemana = prompt ('Introduce un dia de la semana');

switch (diaSemana) {
    case 'lunes':
        alert ('Los lunes son laborables')
        break;
    case 'martes':
        alert ('Los martes son laborables')
        break;
    case 'miercoles':
        alert ('Los miercoles son laborables')
        break;
    case 'jueves':
        alert ('Los jueves son laborables')
        break;
    case 'viernes':
        alert ('Los viernes son laborables')
        break;
    case 'sabado':
        alert ('Los sabados no son laborables')
        break;
    case 'domingo':
        alert ('Los domingos no son laborables')
        break;
    default:
        alert ('Introduzca un día válido')
        break;
}