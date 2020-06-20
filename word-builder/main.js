
function wordBuilder(wordToSpell){

  var newWords = [];
  var wordSplit = wordToSpell.split("");
  var emptyString = "";

  for(var i = 0; i < wordSplit.length; i++){
    newWords.push(emptyString+= wordSplit[i]);
  }
  return newWords;

}

console.log(wordBuilder("Javascript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
