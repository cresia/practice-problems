function giftCalculator(numberOfDays) {
  var total = 0;
  var result = 0;
  var arr = [];

  for(var i = 1; i <= numberOfDays; i++) {
    total+= i;
    result+=total;
    arr.push(result)

  }

  console.log(arr.pop())

}


giftCalculator(12) // -> 364
giftCalculator(5) // -> 35
giftCalculator(20) // -> 1540
