
function makeArray(inputNumber, evensArray, oddsArray){
  var array = [];
  for (var i = 0; i <= inputNumber; i++){
    array[i] = i;
  }
  return array;
}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#input").val());
    var array = makeArray(inputNumber);

    });
  });
});
