// función para botón que muestra datos de contacto.
function mostrarcontacto(){
    document.getElementById('Contacto').style.display = 'block';
}
function ocultarcontacto(){
    document.getElementById('Contacto').style.display = 'none';
}

// función para botón que muestra datos de Experiencia laboral
function mostrarexperiencia(){
  document.getElementById('Experiencia-laboral').style.display = 'block';
}
function ocultarexperiencia(){
  document.getElementById('Experiencia-laboral').style.display = 'none';
}


//función para botón de Ir hacia arriba
let mybutton = document.getElementById("myBtn");

// Cuando el usuario se desplaza 20px desde la parte superior del documento, mostrar el boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando el usuario hace click en el boton, desplazar hacia la parte superior del documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
