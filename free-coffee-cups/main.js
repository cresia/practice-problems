
function freeCoffeeCups(coffeeCups){
  var freeCup = 0;

  if(coffeeCups % 6 === 1){
    freeCup+=2;
    return coffeeCups + freeCup;
  } else if(coffeeCups % 6 === 0){
    freeCup++;
    return coffeeCups + freeCup;
  }
  else {
    return coffeeCups;
  }

}

console.log(freeCoffeeCups(13));
console.log(freeCoffeeCups(6));
console.log(freeCoffeeCups(5))
