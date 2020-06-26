
function zipCodeValidator(zipToValidate){
  // more accurate solution tor remove all spaces
  const removeSpace = zipToValidate.trim();
  if (removeSpace.length === 5 && !isNaN(removeSpace)){
    return true
  }
  return false;


  // ----- another solution -----
  // doesn't have to check the space bc it's already checking if it contains a number or not
  // if (zipToValidate.length === 5 && !isNaN(zipToValidate)) {
  //   return true
  // }
  // return false;


  // -------- diffrent way to solve ---------
  // if(zipToValidate.length != 5 || !Number(zipToValidate)){
  //   return false
  // }
  // return true;

}


console.log(zipCodeValidator("21594")) // -> true
console.log(zipCodeValidator("3Eds32"))// -> false
console.log(zipCodeValidator("21e 4"))// -> false
console.log(zipCodeValidator("9123465")) // -> false
