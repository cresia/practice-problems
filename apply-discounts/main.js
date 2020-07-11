function applyDiscounts(priceArray, discount) {
  var arr = [];

  for(var i = 0; i < priceArray.length; i++) {
    // console.log(priceArray[i]);
    var result = priceArray[i] * parseFloat(discount)/100;
    // console.log(result);
    var newPrice  = priceArray[i] - result;
    arr.push(newPrice)
  }
  console.log(arr)

}



applyDiscounts([10, 20, 30], "50%") // -> [5, 10, 15]
applyDiscounts([50, 60, 25], "25%") // -> [37.5, 45, 18.75]
applyDiscounts([24, 33, 60], "33%") // -> [16.08, 22.11, 40.2]
