
const titulo = document.getElementById('1');
const colores = ['red', 'blue', 'green', 'orange', 'purple']; 

let indiceColor = 0;

function cambiarColor() {
  titulo.style.color = colores[indiceColor];
  indiceColor = (indiceColor ++) % colores.length; 
}

setInterval('cambiarColor()', 1000);

 
