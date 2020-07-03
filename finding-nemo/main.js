function findingNemo(sentence){
  var splitSentece = sentence.split(" ");

  var findIndexOfNemo = splitSentece.indexOf("Nemo") + 1;
  return findIndexOfNemo;

}


console.log(findingNemo("I am Nemo"))// -> 3
console.log(findingNemo("Where is Nemo my son?")) // -> 3
console.log(findingNemo("Nemo is my name")) // -> 1
