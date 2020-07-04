
function fogClearer(stringToClear){

var splitString = stringToClear.split("");

if(splitString[0] === 'f' && splitString[1] === 'f'){
  console.log(stringToClear.substring(3,7))
} else if (splitString[0] === 'f' && splitString[1] === 'o') {
  console.log(stringToClear.substring(12,15))
} else {
  console.log("It is a clear day!")
}



// console.log(splitString);
// check if it contains 'fog'
// if(stringToClear.indexOf('f') != -1 || stringToClear.indexOf('o') != -1 || stringToClear.indexOf('g') != -1){
//   console.log(stringToClear.substring(3,7))
//   console.log(stringToClear.substring(12, 15));
// }
// else {
//   console.log('It is a clear day!');
//   }
}


fogClearer("fffdarkooooooggggggg") // -> "dark"
fogClearer("I like nice trees") // -> "It's a clear day!"
fogClearer("foogooooffffhuhooofff") // -> "huh"
