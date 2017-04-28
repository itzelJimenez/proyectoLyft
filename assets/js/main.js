
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
// FUNCIONALIDAD SECCIÓN DE VIDEOS
var divsVideos = document.getElementsByClassName("videoDiv");

divsVideos[0].addEventListener("click",principal);
divsVideos[1].addEventListener("click",principal);
divsVideos[2].addEventListener("click",principal);

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
// TERMINA FUNCIONALIDAD VSECCIÓN VIDEOS
//Funcionalidad Header

var navBar1 = document.getElementById("block");
var navBar2 = document.getElementById("none");
var explore = document.getElementById("explore");
function showBar(){
  var countScroll = document.body.scrollTop;
    if(countScroll>106.6){
      showNavBar2()
    } else {
      showNavBar1()
    }
}
function showNavBar1(){
  navBar1.style.display="block";
  navBar2.style.display="none";
}
function showNavBar2(){
  navBar1.style.display="none";
  navBar2.style.display="block";
}
function removeEvent(){
  alert("estas fuera")
}

navBar1.addEventListener("mouseover", showNavBar2);
navBar2.addEventListener("mouseout", showNavBar1);
document.addEventListener("scroll", showBar);

//Termina funcionalidad Header
