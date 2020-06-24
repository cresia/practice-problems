
function oddUpEvenDown(array){
  var result = [];

  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      result.push (array[i] - 1);
    } else {
      result.push(array[i] + 1);
    }
  }
  // console.log(result)
  return result;
}


console.log(oddUpEvenDown([1, 2, 3, 4, 5])) // -> [2, 1, 4, 3, 6]
console.log(oddUpEvenDown([23, 15, 18, 14, 32])) // -> [24, 16, 17, 13, 31]
console.log(oddUpEvenDown([72, 212, 77, 124, 53])) // -> [71, 211, 78, 123, 54]
