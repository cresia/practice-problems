
function accountNumberProtector(cardNumberString){
  var sliceDigits = cardNumberString.slice(11);
  var string1 = sliceDigits.replace(sliceDigits[0], '**');

  return string1;


//------ different solution ----
// return "**" + cardNumberString.slice(cardNumberString.length-4)

}



console.log(accountNumberProtector("5543223485638832")) // -> "**8832"
console.log(accountNumberProtector("8934235477210943"))// -> "**0943"
console.log(accountNumberProtector("7513635499320192")) // -> "**0192"
