
function freeCoffeeCups(coffeeCups){
  // var freeCup = coffeeCups/6;
  // if (coffeeCups % 6 === 1 || coffeeCups % 6 === 0 ){
  //   return coffeeCups + Math.floor(freeCup);
  // } else {
  //   return coffeeCups;
  // }


  // ---- or -----
  var freeCofee = 0;
  for(var i = 1; i <= coffeeCups; i++){
    if(i % 6 === 0){
      freeCofee++
    }
  }
  return coffeeCups + freeCofee;
}

console.log(freeCoffeeCups(13));
console.log(freeCoffeeCups(18));
console.log(freeCoffeeCups(6));
console.log(freeCoffeeCups(5))
