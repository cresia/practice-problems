
function spellChecker(userWords, correctWords){
  // console.log(userWords);
  // console.log(correctWords)

  var wordsObject = {
    correct: [],
    incorrect: []
  };


  for(var i = 0; i < userWords.length; i++){
    if(userWords[i] === correctWords[i]){
      wordsObject.correct.push(correctWords[i])
    } else{
      wordsObject.incorrect.push(userWords[i])
    }

  }

  return wordsObject;

}


console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"])) // -> { correct: ["boy", "ice cream"], incorrect: ["duct", "sendwich"]}
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"])) // -> {correct: ["jam", "sound"], incorrect:["breat"]}
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"])) // -> {correct: ["java"], incorrect: ["CDS","HTMO"]}
