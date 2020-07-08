function digitFilter(numbersArray, numbersFilter){
  var arr = []

 for(var i = 0; i < numbersArray.length; i++){
  var numToString = numbersArray[i].toString();
  var splitString = numToString.split(" ");

  var getLengthforEach = splitString[0].length;
  // console.log(splitString[0].length);

  if(getLengthforEach === numbersFilter){
    var result = parseInt(splitString);
    arr.push(result);
  }

 }
  console.log(arr)

}



digitFilter([23, 312, 24, 243, 43], 3) // -> [312, 243]
digitFilter([23, 315, 231, 54, 72], 2) // -> [23, 54, 72]
digitFilter([1, 4323, 23, 4565, 3, 4], 1) // -> [1, 3, 4]
