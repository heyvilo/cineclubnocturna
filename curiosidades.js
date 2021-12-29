
//Efecto del botón

document.getElementById("button").onmouseover = function() {mouseOver()};
document.getElementById("button").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("button").style.color = "red";
}

function mouseOut() {
  document.getElementById("button").style.color = "black";
}

//Animaciones con Jquery, aparecen lentamente las cards

$(".analisisPelis").hide();

$(document).ready(function(){
    $("button").click(function(){
      $(".analisisPelis").fadeIn();
      $(".analisisPelis").fadeIn("slow");
      $(".analisisPelis").fadeIn(5000);
    });
  });