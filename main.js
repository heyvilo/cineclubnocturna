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




