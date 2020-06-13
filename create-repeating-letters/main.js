
function createRepeatingLetters(word, numOfRepeats){
  var result = "";
  for(var i = 0; i < word.length; i++){
    result += word[i].repeat(numOfRepeats);
    // console.log(result)
  }
  return result;
}

console.log(createRepeatingLetters("John", 3));
console.log(createRepeatingLetters("car", 4));
console.log(createRepeatingLetters("howdy", 1));
