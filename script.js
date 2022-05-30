const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");
var munheco = document.querySelector(".container-munheco");
var h3 = document.querySelector(".container-h3");
var parrafo = document.querySelector(".container-parrafo");

function btnEncriptar(){
    ocultarSec()
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;    
}


function btnDesEncriptar(){
    const textoDesEncriptado = DesEncriptar(inputTexto.value);
    mensaje.value = textoDesEncriptado;    
}

function ocultarSec(){
    munheco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}


function btnCopiar() {
    content = document.querySelector(".input-text-area");  
    content.select();
    document.execCommand('copy'); 
}


function encriptar(textEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textEncriptar = textEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textEncriptar.includes(matrizCodigo[i][0])) {
            textEncriptar = textEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])            
        }               
    }
    return textEncriptar;    
}

function DesEncriptar(textDesEncriptar){
    let matrizCodigo2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o",],["ufat","u",]];
    textDesEncriptar = textDesEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo2.length; i++) {
        if(textDesEncriptar.includes(matrizCodigo2[i][0])) {
            textDesEncriptar = textDesEncriptar.replaceAll(matrizCodigo2[i][0],matrizCodigo2[i][1])            
        }               
    }
    return textDesEncriptar;

    
}
