//Almacenar datos de contacto - DOM

function contactar(){
    let nombre = document.getElementById ("nombre");
    let email = document.getElementById ("email");
    let tel = document.getElementById ("tel");
    let mensaje =document.getElementsByClassName ("inputMensaje");

    console.log(nombre.value)
    console.log(email.value)
    console.log(tel.value)
    console.log(mensaje.value)

    alert("Mensaje enviado")

}