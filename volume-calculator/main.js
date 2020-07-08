
function volumeCalculator(boxesArray){
  var total = 0;

  for(var i = 0; i < boxesArray.length; i++){
    var num = 1;

    for(var j = 0; j < boxesArray[i].length; j++){
      num*=boxesArray[i][j];
    }

    total += num;
  }
  console.log(total);
}

volumeCalculator([[3, 3, 3], [4, 4, 4], [5, 5, 5]]) // -> 216
volumeCalculator([[5, 1, 4], [8, 5, 4], [3, 1, 7]]) // -> 201
volumeCalculator([[5, 4, 2], [12, 15, 21], [7, 7, 7]]) // -> 4163
