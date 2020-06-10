// console.log("hello");

function phAnalyzer(ph){
  if(ph >= 8 && ph <= 14){
    return "alkaline";
  } else if (ph < 7){
    return "acidic";
  } else if (ph === 7){
    return "neutral";
  } else {
    return "invalid pH value";
  }
}

console.log(phAnalyzer(7));
console.log(phAnalyzer(4));
console.log(phAnalyzer(12));
console.log(phAnalyzer(25));
