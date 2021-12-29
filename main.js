//Esta función verifica si se registra una película disponible en el día ingresado de Noviembre. 

let fecha1 = 12
let fecha2 = 26


const hayPelicula = () =>{

    let chequearFecha = prompt("Ingrese la fecha que desea chequear");

    if(chequearFecha == fecha1 || chequearFecha == fecha2){
        alert('¡Hurra! Ese día de Octubre hay función a las 22.00 y a las 00.00 hs.');
        return;
    }
   
    else alert('Lo sentimos, ese día no hay ninguna función disponible.');
        return;
    }


//Esta función verifica si el evento es simple o doble función en base a la duración en horas. 


const evento = (cantidadHoras) =>{
    if(cantidadHoras > 2){
        console.log('Este evento es doble función.');
        return true;

    } else if (cantidadHoras <= 2)
    console.log('Este evento es función simple.');
        return false;
    }


//Evento que crea un efecto sobre "Ver fechas disponibles"

document.getElementById("fechasEfecto").onmouseover = function() {mouseOver()};
document.getElementById("fechasEfecto").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("fechasEfecto").style.color = "red";
}

function mouseOut() {
  document.getElementById("fechasEfecto").style.color = "black";
}


//Array de ciclos hasta el momento


    let ciclosNocturna = [

        {
            director: "John Carpenter",
            primerFuncion:"Escape from New York",
            segundaFuncion:"Vampires"
        },
        {
            director: "Joe Dante",
            primerFuncion:"Piranha",
            segundaFuncion:"The Howling"
        },
        {
            director: "Dario Argento",
            primerFuncion:"El Gato de las Nueve Colas",
            segundaFuncion:"Terror en el Opera"
        },

        {
            director: "David Lynch",
            primerFuncion:"Corazón Salvaje",
            segundaFuncion:"Terciopelo Azul"
        }
        
    ]

console.log(ciclosNocturna);

//Aplicando Jquery en la sección de directores, cambia de color el separador entre cada director

$(".listado:even").css("color" , "red");

//Aplicando Jquery en la sección de directores, agregando directores... por alguna razón me lo pone desordenado
//Tampoco sé como darle el mismo css 


$(".listado").append(`<p>WILLIAM FRIEDKIN •</p>`);

$(".listado").append(`<p>ED WOOD JR.</p>`);


//Efecto del botón

document.getElementById("button").onmouseover = function() {mouseOver()};
document.getElementById("button").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("button").style.color = "red";
}

function mouseOut() {
  document.getElementById("button").style.color = "black";
}


//Pidiendo datos API con Ajax

let url = "http://hp-api.herokuapp.com/api/characters"

$("#button").click(function(){

    $.get( url, function(datos){

    for( let personajesHP of datos){
    $("body").append(`<div> 
                        <h4> ${personajesHP.name}</h4>
                        </div>`);
    }     
    console.log(datos)
    })
})




//ESTA NO ME FUNCIONA, NO ENTIENDO PORQUE ME DICE NO AUTORIZADO


let urlDos = "https://superheroapi.com/api/1222151908272497/character-id"

$("#button2").click(function(){

    $.get (urlDos, function(datosDos){
    console.log(datosDos)
    })
})