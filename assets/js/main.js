var inputTel = document.getElementById('telefono1');
var formulario1 = document.getElementById('forma');
var formulario2 = document.getElementById("forma2");

//muestra la parte oculta del formulario
function mostrarFormulario (){
  if(formulario1.style.display == "block"){
        formulario1.style.display = "none";
    }else{
        formulario2.style.display = "block";
        var labelTel = document.getElementById("labTel");
        labelTel.classList.add("active");
        inputTel.classList.add('textoInput');
    };
};
inputTel.addEventListener("click",mostrarFormulario);

var inputs = document.getElementsByClassName('inputs');

for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', textoInputs)
};

//modifica los imputs y hace chicos los labels
function textoInputs(){
  this.classList.add('textoInput');
  this.previousElementSibling.classList.add('active');
};

// REPRODUCE PRIMER VIDEO

var imagenVideo1= document.getElementById("imagenVideo1");
imagenVideo1.addEventListener("click", reproducirVideo1);

function reproducirVideo1(){
  this.style.display = "none";
  var video1 = this.nextElementSibling;
  video1.style.display = "inline-block";
  video1.src += "?autoplay=1";
  var imagenReproducir =  video1.nextElementSibling;
  imagenReproducir.style.display = "none";
}


//Esta función es la del vídeo de la seccion de Monse//
var video3=document.getElementById('tercerVideo');
video3.addEventListener("click", reproducirvideo3);

function reproducirvideo3(){
  var imagenvideo3 = document.getElementById("imagensenor");
  imagenvideo3.style.display= "none";
  var video3= document.getElementById("video3");
  video3.style.display="inline-block"
  video3.src+="?autoplay=1";
}
//Aquí termina la funcion de Monse//

// Funcionalidad 2da sección de video
var div2 = document.getElementById("divV2");

div2.addEventListener("click",principal);

function principal() {
  console.log(this.id);
  // Se obtiene el frame del video
  var video = this.lastElementChild;
// Se obtienen los hermanos del video
  var circulo = this.firstElementChild;
  var img = video.previousElementSibling;
  reproducir(video);
  ocultar(video,circulo, img);
}
// FUnción que reproduce el video
function reproducir(video) {
  video.src += "?autoplay=1";
}
// Función que oculta/muestra elementos
function ocultar(video, circulo, img) {
  // Se olcultan/muestran elementos obtenidos en la función principal
    circulo.style.display = "none";
    img.style.display = "none";
    video.style.display = "block";
}
//Termina 2da sección de video 

//Funcionalidad Header
