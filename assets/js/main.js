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
