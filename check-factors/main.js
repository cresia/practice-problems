function checkFactors (array, number) {

  var result = null;
  var arr = [];

  for(var i = 0; i < array.length; i++) {

    if(number % array[i] === 0 && number/ array[i] != array[i]) {
      result = "true";
      arr.push(result)

    } else {
      result = "false";
      arr.push(result)
    }
  }

  // return arr

  if(arr.includes("false")) {
    return false

  }
  return true
}


console.log(checkFactors([3, 4, 2], 12)) // -> true
console.log(checkFactors([5, 3, 10], 30)) // -> true
console.log(checkFactors([2, 7, 4], 8)) // -> false
