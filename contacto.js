//Almacenar datos de contacto - DOM

function contactar(){
    let nombre = document.getElementsByClassName("inputForm");
    let email = document.getElementsByClassName ("inputForm");
    let tel = document.getElementsByClassName ("inputForm");
    let mensaje =document.getElementsByClassName ("inputMensaje");

    alert("Mensaje enviado")



    console.log(nombre.value)
    console.log(email.value)
    console.log(tel.value)
    console.log(mensaje.value)


}
