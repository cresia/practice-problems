function pocketChangeCalculator(changeArray, itemCost){
  var quarter = 0.25;
  var dimes = 0.10;
  var nickles =  0.05;
  var pennies = 0.01;

  for(var i= 0; i< changeArray[i]; i++){
    var result1 = changeArray[0] * quarter;
    var result2 = changeArray[1] * dimes;
    var result3 = changeArray[2] * nickles;
    var result4 = changeArray[3] * pennies;
    var total = result1 + result2 + result3 + result4;

    if(total >= itemCost){
     return true
    }
    return false;
  }

}


console.log(pocketChangeCalculator([10, 5, 5, 4], 2.50)) // -> true
console.log(pocketChangeCalculator([15, 4, 20, 15], 7.25)) // -> false
console.log(pocketChangeCalculator([6, 20, 10, 6], 4.00)) // -> true
