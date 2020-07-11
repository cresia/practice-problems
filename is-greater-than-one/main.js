function isGreaterThanOne(fraction) {
 var arrSplit = fraction.split("/");
 var result = arr[0] / arr[1];

  if(result > 1) {
    return true;
  }
  return false;
}


console.log(isGreaterThanOne("7/5"))     // -> "true"
console.log(isGreaterThanOne("3/4"))   // -> "false"
console.log(isGreaterThanOne("13/11"))     // -> "true"
