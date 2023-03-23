function ocultar() {
var ancla = document.getElementsByClassName('barra-nav');
for (var i = 0; i < ancla.length; i++){
    ancla[i].classList.toggle('ocultar');
}   
}