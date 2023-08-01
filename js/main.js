"user strict"
const url = "https://64c6e2580a25021fde91fca5.mockapi.io/usuarios"
let main = document.getElementById("main");



let btnContacto = document.getElementById("btnContacto");
btnContacto.addEventListener("click", cargarContacto);

function cargarContacto() {
    fetch("http://localhost/particular/ajaxyjuego/contacto.html").then(resultado => {
        resultado.text().then(resultadoEnTexto => {
            main.innerHTML = resultadoEnTexto;
            let nombre = document.getElementById("nombre")



        })
    })
}



let btnInformacion = document.getElementById("btnInformacion");
btnInformacion.addEventListener("click", cargarInformacion);

function cargarInformacion() {
    fetch("http://localhost/particular/ajaxyjuego/informacion.html").then(resultado => {
        resultado.text().then(resultadoEnTexto => {
            main.innerHTML = resultadoEnTexto;
        })
    })
}

//ni bien carga el index.html llamo a al metodo cargarHome asi ya se carga cuando se abre por primer vez
cargarHome();

let btnHome = document.getElementById("btnHome");
btnHome.addEventListener("click", cargarHome);

function cargarHome() {
    fetch("http://localhost/particular/ajaxyjuego/home.html").then(resultado => {
        resultado.text().then(resultadoEnTexto => {
            main.innerHTML = resultadoEnTexto;

            // Inicializar el juego después de cargar home.htm  
        })
    })
}
function cargarJuego(event) {
    let inputRango = document.getElementById("rango");
    let perdidas = document.getElementById("perdidas");
    let ganadas = document.getElementById("ganadas");
    let resultado = document.getElementById("resultado");
    let inputEleccion = document.getElementById("numeroElegido");

    const maxRango = 25;
    const minRango = 1;
    let contadorPerdidas = 0;
    let contadorGanadas = 0;
    let contadorJuegos = 0;

    let btnJugar = document.getElementById("btn-jugar");
    btnJugar.addEventListener("click", jugar);

    function jugar() {

        numeroElegido = parseInt(inputEleccion.value);
        rangoElegido = parseInt(inputRango.value);

        if (!(rangoElegido >= minRango && rangoElegido <= maxRango)) {
            alert("El rango no está entre lo permitido, 1 y 25");
            return;
        }
        if (!(numeroElegido >= minRango && numeroElegido <= rangoElegido)) {
            alert("El número elegido está fuera del rango.");
            return;
        }
        let numeroAleatorio = Math.floor(Math.random() * rangoElegido) + 1;
        console.log(numeroAleatorio);

        if (contadorJuegos < 20) {
            contadorJuegos++;
            if (numeroElegido == numeroAleatorio) {
                contadorGanadas++;
                ganadas.innerHTML = contadorGanadas;
                resultado.innerHTML =
                    `<div class="alert alert-success" role="alert">
                    <h5>Felicidades, ¡Ganaste!</h5>
                    Salio el numero: ${numeroAleatorio} y eligio ${numeroElegido}
                </div>`;
            } else {
                contadorPerdidas++;
                perdidas.innerHTML = contadorPerdidas;
                resultado.innerHTML =
                    `<div class="alert alert-danger" role="alert">
                    <h5>Perdiste</h5>
                    Salio el numero: ${numeroAleatorio} y eligio ${numeroElegido}
                </div>`;
            }
        } else {
            alert("Llegó al máximo de juegos");
        }
    }

    let btnReiniciar = document.getElementById("reiniciar").addEventListener("click", () => {
        contadorGanadas = 0;
        contadorPerdidas = 0;
        perdidas.innerHTML = contadorPerdidas;
        ganadas.innerHTML = contadorGanadas;
        resultado.innerHTML = "";
        contadorJuegos = 0;
    });
}
getUserAwait();
async function getUserAwait() {
    try {
        let res = await fetch(url);
        let json = await res.json();
        console.log(json);

    } catch (error) {
        console.log(error);
    }
}


