function isTheAverageWhole(numbersArray){
  var num = 0;
  var result;

  for(var i = 0; i < numbersArray.length; i++){
    num += numbersArray[i];
  }
  result = num/numbersArray.length;

  if(result % 1 === 0){
    return true;
  }
  return false;
}


console.log(isTheAverageWhole([1,3,4,4]));
console.log(isTheAverageWhole([3,4]));
console.log(isTheAverageWhole([5,5,5]))
