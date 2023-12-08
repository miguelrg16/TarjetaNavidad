var colores = ["red", "blue", "green", "orange", "purple", "yellow"]; // Puedes agregar más colores aquí
var indiceColor = 0;

function cambiarColorAutomaticamente() {
  var elemento = document.getElementById("texto");
  elemento.style.color = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}

// Cambiar automáticamente cada 3 segundos (3000 milisegundos)
setInterval(cambiarColorAutomaticamente, 200);



  
  $(document).ready( function(){
      $.fn.snow();
  });

  let newPage = null;

  document.getElementById('openButton').addEventListener('click', function() {
    if (newPage === null || newPage.closed) {
      // Si la página no está abierta o está cerrada, la abrimos
      newPage = window.open('', '_blank');
      newPage.document.write('<html><head><title>Nueva Página</title></head><body></body></html>');
    } else {
      // Si la página está abierta, la cerramos
      newPage.close();
      newPage = null;
    }
  });
  

 
