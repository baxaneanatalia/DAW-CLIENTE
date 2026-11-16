class Alumno{ 
    //creamos el constructor de la clase Alumno
constructor(nombre,edad,nota){

    this.nombre = nombre;
    this.edad= edad;
    this.nota =nota ;
}

}
//creamos un array para guardar los alumnos
const alumnos = [];
//creamos un bucle para introducir los datos de los alumnos
for (let i=0; i<3; i++){
    alumnos[i] = new Alumno(
        //pedimos al usuario que introduzca los datos del alumno
prompt("introduce el nomnre del alumno: "),
parseInt(prompt("introduce la edad del alumno: ")),
parseFloat(prompt("introduce la nota del alumno: "))
);
}

//creo una variable para guardar el alumno con la nota mas alta
let notaAlta = alumnos[0];

// uso un bucle para recorrer el array de alumnos y comparar las notas
for (let al of alumnos){
    if (al.nota > notaAlta.nota){
    notaAlta = al;
    }
}

//muestro el resultado  en el html
document.getElementById("notaAlta").textContent = 
`la nota mas alta es ${notaAlta.nombre} con una nota de ${notaAlta.nota}`


//creo una variable para guardar el alumno con el promedio de las noras
let promedio =0;

//uso un bucle para recorrer el array de alumnos y sumar las notas
for(let al of alumnos){
    promedio = promedio + al.nota;
}
//calculo el promedio de las notas
promedio = promedio /alumnos.length;

//muestro el resultado en el html y limito el numero de decimales a 2 
document.getElementById("promedio").textContent= 
`El promedio de las notas es ${promedio.toFixed(2)}`;