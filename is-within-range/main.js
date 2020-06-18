
function isWithinRange(number, rangeObject){

  var min = rangeObject.min;
  var max = rangeObject.max;

  if(number >= min && number <= max){
    return true;
  }
  return false;

}

console.log(isWithinRange(5, { min: 1, max: 9 }) );
console.log(isWithinRange(12, { min: 15, max: 29 }));
console.log(isWithinRange(9, { min: 0, max: 9 }));
