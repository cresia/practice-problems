// console.log("hello");

function phAnalyzer(ph){
  if(ph === 12){
    return "alkaline";
  } else if (ph === 4 ){
    return "acidic";
  } else if (ph === 7){
    return "neutral";
  } else if(ph === 25){
    return "invalid pH value";
  }
}

console.log(phAnalyzer(7));
console.log(phAnalyzer(4));
console.log(phAnalyzer(12));
console.log(phAnalyzer(25));
