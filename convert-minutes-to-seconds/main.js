function convertMinutesToSeconds(timeToConvert){
  var firstDigit = timeToConvert.slice(0,2);
  var secondDigit = parseInt(timeToConvert.slice(3));

  var calcFirstDigit = parseInt(firstDigit) * 60;
  var result =  calcFirstDigit + secondDigit;

  return result;

}


console.log(convertMinutesToSeconds("15:34")) // -> 934
console.log(convertMinutesToSeconds("02:45")) // -> 165
console.log(convertMinutesToSeconds("08:21"))// -> 501
