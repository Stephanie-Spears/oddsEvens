
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

    var inputNumber = parseInt($("#input").val());
    var evensArray = [];
    var oddsArray = [];
    makeArray(inputNumber, evensArray, oddsArray);

  });
});
