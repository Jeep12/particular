"use strict"

let main = document.getElementById("main");

a

let btnInformacion = document.getElementById("btnInformacion");
btnInformacion.addEventListener("click", cargarInformacion);
function cargarInformacion() {
    fetch("http://localhost/particular/ApiRest/informacion.html").then(resultado => {
        resultado.text().then(resultadoEnTexto => {
            main.innerHTML = resultadoEnTexto;
        })
    })
}

cargarHome();
let btnHome = document.getElementById("btnHome");
btnHome.addEventListener("click", cargarHome);
function cargarHome() {
    fetch("http://localhost/particular/ApiRest/home.html").then(resultado => {
        resultado.text().then(resultadoEnTexto => {
            main.innerHTML = resultadoEnTexto;

        })
    })
}
