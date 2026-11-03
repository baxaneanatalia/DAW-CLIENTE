function agregarTarea() {

let nuevaTareaTexto = document.getElementById("nuevaTarea").value; // guardamos el valro que va ha haber en el imput, por eso ponemo .value

if(nuevaTareaTexto === "") {
    alert("Por favor, ingresa una tarea.");
    return;
}

let nuevaTarea = document.createElement("li"); // creamos un elemento li

nuevaTarea.textContent = nuevaTareaTexto + "  "; // le damos el valor que hemos guardado en la variable nuevaTareaTexto

let botonEliminar = document.createElement("button"); // creamos un boton para eliminar la tarea
botonEliminar.textContent = "Eliminar";
botonEliminar.onclick = function (){
    nuevaTarea.remove(); // eliminamos la tarea
}

nuevaTarea.appendChild(botonEliminar);// añadimos el boton al li

document.getElementById("listaTareas").appendChild(nuevaTarea); // añadimos la nueva tarea a la lista de tareas  

document.getElementById("nuevaTarea").value =""; // limpiamos el input

}