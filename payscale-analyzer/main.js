
function payscaleAnalyzer(payList){
  var largest = Math.max.apply(Math, payList);
  var smallest = Math.min.apply(Math, payList)

  return largest - smallest

}


console.log(payscaleAnalyzer([28, 34, 21, 39])) // -> 18
console.log(payscaleAnalyzer([18, 22, 19, 26]))   // -> 8
console.log(payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]))  // -> 14.25
