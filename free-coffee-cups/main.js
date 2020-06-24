
function freeCoffeeCups(coffeeCups){
  var freeCup = coffeeCups/6;

  if (coffeeCups % 6 === 1 || coffeeCups % 6 === 0 ){
    return coffeeCups + Math.floor(freeCup);
  } else {
    return coffeeCups;
  }
}

console.log(freeCoffeeCups(13));
console.log(freeCoffeeCups(18));
console.log(freeCoffeeCups(6));
console.log(freeCoffeeCups(5))
