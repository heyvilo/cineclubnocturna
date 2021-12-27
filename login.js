//Aplicando Jquery en la página de login

$(document).ready(function(){
    $(".botonLogin").click(function(){
      $(".botonLogin").animate({left: '250px'});
    });
  });

let efectoLogin = $(".botonLogin");
console.log(efectoLogin);
