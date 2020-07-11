function giftCalculator(numberOfDays) {
  var total = 0;
  var result = 0;
  var arr = [];

  for(var i = 1; i <= numberOfDays; i++) {
    total+= i;
    result+=total;
    arr.push(result)

  }

  // console.log(arr.pop());
  console.log(arr[arr.length-1]);

}


// ---- different solution ----

function giftCalculator(numberOfDays) {
  var giftTotal = null;
  var multiplier = numberOfDays;
  for (var index = 1; index <= numberOfDays; index++) {
    giftTotal += (index * multiplier);
    multiplier--
  }
  console.log(giftTotal);
}


giftCalculator(12) // -> 364
giftCalculator(5) // -> 35
giftCalculator(20) // -> 1540
