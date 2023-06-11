function encriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado correctamente";
        parrafo.textContent = "";
        munheco.src= "img/encriptado.png";
    } else {
        munheco.src= "img/munheco.png";
        alert("Debes ingresar algún texto");
    }
    document.getElementById("boton-encriptar").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";

}

function desencriptar() {

    let textoCifrado = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");

    let textoDesencriptado = textoCifrado
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (textoCifrado.length != 0) {
        document.getElementById("texto").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado correctamente";
        parrafo.textContent = "";
        munheco.src= "img/munheco.png";
    } else {
        munheco.src= "img/text-not-found.png";
        alert("No hay texto para desencriptar");
    }
    
    let botonEncriptar = document.getElementById("boton-encriptar");
    let botonDesencriptar = document.getElementById("boton-desencriptar");
    let botonCopiar = document.getElementById("boton-copiar");

    if (botonEncriptar.style.display === "none" && botonDesencriptar.style.display === "none") {
        botonEncriptar.style.display = "block";
        botonDesencriptar.style.display = "block";
        botonCopiar.style.display = "none";
    } else {
        botonEncriptar.style.display = "none";
        botonDesencriptar.style.display = "none";
        botonCopiar.style.display = "block";
    }
    
}

function copiar() {
    let textoCifrado = document.getElementById("texto").value;
    navigator.clipboard.writeText(textoCifrado);
    alert("Texto copiado al portapapeles");

    cambiarBotones();

}

function cambiarBotones() {
    var botonEncriptar = document.getElementById("boton-encriptar");
    var botonDesencriptar = document.getElementById("boton-desencriptar");
    var botonCopiar = document.getElementById("boton-copiar");
  
    if (botonEncriptar.style.display === "none") {
      botonEncriptar.style.display = "block";
      botonDesencriptar.style.display = "block";
      botonCopiar.style.display = "none";
    } else {
      botonEncriptar.style.display = "none";
      botonDesencriptar.style.display = "none";
      botonCopiar.style.display = "block";
    }
  }