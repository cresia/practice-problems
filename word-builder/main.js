
function wordBuilder(wordToSpell){

  var stringWord = "";
  var arr= [];

  for(var i = 0; i < wordToSpell.length; i++){
    stringWord += wordToSpell[i];
    arr.push(stringWord);
  }
  return arr;
}

console.log(wordBuilder("Javascript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
