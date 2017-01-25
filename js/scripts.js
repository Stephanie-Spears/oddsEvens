
function makeArray(inputNumber, evensArray, oddsArray){
  var array = [];
  for (var i = 0; i <= inputNumber; i++){
    array[i] = i;
    if((array[i] % 2) === 0){
      evensArray.push(array[i]);
    }
    else{
      oddsArray.push(array[i]);
    }
  }
  return array;
}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#oddsList li,#evensList li").remove();
    var inputNumber = parseInt($("#input").val());
    var evensArray = [];
    var oddsArray = [];
    makeArray(inputNumber, evensArray, oddsArray);
    for (var i=0; i < evensArray.length; i++){
      // $("ul#evensList").append("<li class='animated bounceOutDown'>" + evensArray[i] + "</li>");
      $("ul#evensList").append("<li>" + evensArray[i] + "</li>");
      $("#evensList li").addClass('animated bounceInRight');
    }
    for (var x=0; x < oddsArray.length; x++){
      // $("ul#oddsList").append("<li class='animated bounceOutDown'>" + oddsArray[x] + "</li>");
      $("ul#oddsList").append("<li>" + oddsArray[x] + "</li>");
      $("#oddsList li").addClass('animated bounceInLeft');
    }
    $("#reset").click(function(){
      $("#evensList li,#oddsList li").removeClass();
      $("#evensList li ,#oddsList li ").addClass('animated bounceOutDown');
    });
  });
});
