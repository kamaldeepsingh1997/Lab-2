//https://www.codewars.com/kata/58880c6e79a0a3e459000004

function houseNumbersSum(inputArray) {

  
  var sum = 0;

  for(var i = 0 ; i < inputArray.length ; i++){

    if(inputArray[i] === 0){

      inputArray.length = i;

      return sum;

    }else{

      sum += inputArray[i];

    }

  }
}