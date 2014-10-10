
$('.text').addClass('fade');
$('.tower').addClass('fade');
$('.circle').addClass('fade');
$('.star').addClass('fade');
$('.window').addClass('fade');
$textDude = $('.texthing');


window.setTimeout(function(){
  $('.signature').css({opacity: 1});
  $textDude.css({opacity: 1});
}, 1000);


window.setTimeout(function(){
  $('.window').css({opacity: 1});
  $textDude.append("Suzanne Duchamp Ipsum Dolar Etsum Marcel Broken And Restored Loremiplication what what ok now");
}, 2000);

window.setTimeout(function(){
  $('.star').css({opacity: 1});
  $textDude.append("Suzanne Duchamp Ipsum Dolar Etsum Marcel Broken And Restored Loremiplication what what ok now");
}, 3000);

window.setTimeout(function(){
  $('.tower').css({opacity: 1});
  $textDude.append("Suzanne Duchamp Ipsum Dolar Etsum Marcel Broken And Restored Loremiplication what what ok now");
}, 4000);

window.setTimeout(function(){
    var $circles = $('.circle');
  window.setInterval(function(){
    var circle = _.sample($circles);
    $(circle).css({opacity: Math.random()});
  }, 300);
  $textDude.append("Suzanne Duchamp Ipsum Dolar Etsum Marcel Broken And Restored Loremiplication what what ok now");
}, 5000);

window.setTimeout(function(){
  $('.text').css({opacity: 1});
  $textDude.append("Suzanne Duchamp Ipsum Dolar Etsum Marcel Broken And Restored Loremiplication what what ok now");
}, 6000);


window.setTimeout(function(){
  clickyStage();
  $textDude.append("Suzanne Duchamp Ipsum Dolar Etsum Marcel Broken And Restored Loremiplication what what ok now");
}, 10000);