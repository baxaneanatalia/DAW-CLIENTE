//las fechas en javascript se manejan con el objeto Date
//para crear un objeto de tipo fecha se utiliza la palabra reservada new y la clase Date   
//var fecha = new Date("2024-06-15"); // se puede crear una fecha especifica
//var fecha = new Date(2024, 5, 15); // se puede crear una fecha especifica (mes inicia en 0)



//var fecha = new Date("2026/06/15"); // creo una fecha  especifica con string

//alert("la fecha de hoy es " + fecha);

var fecha =new Date(2026, 5, 15);// configuro fecha especifica año + mes + dia + hora + minuto
//funciones especiales de fecha
var dia = fecha.getDate(); // me devuelve el dia del mes de la fecha que tenemos configurado arriba
var mes = fecha.getMonth() + 1; //el mes inica en 0 por eso se le suma 1
var anio = fecha.getFullYear();
var diaSemana = fecha.getDay(); // me devuelve el dia de la semana 0 domingo 1 lunes 2 martes 3 miercoles 4 jueves 5 viernes 6 sabado

switch (diaSemana) {
    case 0:
    diaSemana = "domingo";
    break;

    case 1:
    diaSemana = "lunes";
    break;

    case 2:
    diaSemana = "martes";
    break;

    case 3:
    diaSemana = "miercoles";
    break;

    case 4:
    diaSemana = "jueves";
    break;

    case 5:
    diaSemana = "viernes";
    break;

    case 6:
    diaSemana = "sabado";
    break;
    
}
alert(" la fecha es " + " dia " + dia + " mes " + mes + " año " + anio + " dia de la semana " + diaSemana);