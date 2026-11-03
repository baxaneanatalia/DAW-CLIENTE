
// Obtiene el elemento con el id "mensaje" del DOM
let mensaje = document.getElementById("mensaje"); 

// Agrega un evento de clic al botón con el id "boton"
document.getElementById("boton").addEventListener("click", function() { 

// Cambia el contenido del elemento "mensaje" al hacer clic en el botón
mensaje.textContent = "¡Hola! Has hecho clic en el botón."; 
});