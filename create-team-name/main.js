function createTeamName(nameArray) {
  var result = "";
  var arr = [];
  var arrSort;

  for(var i = 0 ; i < nameArray.length; i++) {
    arr.push(nameArray[i][0]);
  }
  arrSort = arr.sort();


  for(var j = 0; j < arrSort.length; j++) {
    result+= arrSort[j]
  }
  return result;

}


console.log(createTeamName(["John", "Mark", "Simon"])) // -> "JMS"
console.log(createTeamName(["Paul", "Duncan", "Leto", "Jessica"])) // -> "DJLP"
console.log(createTeamName(["Luke", "Anakin", "Leia", "Rey"])) // -> "ALLR"
