var buton1 = document.getElementById('botonLogin')
var buton2 = document.getElementById('botonRegistro')
var botonComprar = document.getElementById('botoncompra')
var cerrar = document.getElementById('imagendecerrar2')
var registroBoton = document.getElementById('botoncompra2')
var pipilin = document.getElementById('botoncompra2')





function cambiar2() {

    window.location.href = "Cuenta.html";

}

function cambiar3() {

    window.location.href = "Registro.html";

}

function cambiar4() {

    window.location.href = "Compra.html";


}






function cambiar5() {
    window.location.href = "index.html";
}



function cambiarLogin() {

    window.location.href = "index.html";




}





buton1.addEventListener('click', cambiar2, true);
buton2.addEventListener('click', cambiar3, true);

botonComprar.addEventListener('click', cambiar4, true);


cerrar.addEventListener('click', cambiar5, true);


pipilin.addEventListener('click', cambiarLogin, true);