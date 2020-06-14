
function decimalPlaceCounter(stringNumber){

  if(stringNumber.indexOf(".") !== -1){
    var numSplit = stringNumber.split(".")[1].length;
    return numSplit;
  }
  return 0;

}

console.log(decimalPlaceCounter("127.245"))
console.log(decimalPlaceCounter("145"));
console.log(decimalPlaceCounter("23.00"));
