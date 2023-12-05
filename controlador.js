var colores = ["red", "blue", "green", "orange", "purple"]; // Puedes agregar más colores aquí
var indiceColor = 0;

function cambiarColorAutomaticamente() {
  var elemento = document.getElementById("texto");
  elemento.style.color = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}

// Cambiar automáticamente cada 3 segundos (3000 milisegundos)
setInterval(cambiarColorAutomaticamente, 100);


jQuery(function($) {
  $().jSnow();
  });



 
