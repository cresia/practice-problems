function pocketChangeCalculator(changeArray, itemCost){
  var quarter = changeArray[0] * 0.25;
  var dimes = changeArray[1] * 0.10;
  var nickles = changeArray[2] * 0.05;
  var pennies = changeArray[3] * 0.01;

  var total = quarter + dimes + nickles + pennies;

    if(total >= itemCost){
     return true
    }
    return false;
}


console.log(pocketChangeCalculator([10, 5, 5, 4], 2.50)) // -> true
console.log(pocketChangeCalculator([15, 4, 20, 15], 7.25)) // -> false
console.log(pocketChangeCalculator([6, 20, 10, 6], 4.00)) // -> true
