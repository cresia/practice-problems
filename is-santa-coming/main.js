
function isSantaComing (dateObject){

  var santaComing = new Date(2001, 11, 24);
  var year = santaComing.getFullYear()
  var month = santaComing.getMonth();
  var date = santaComing.getDate();

  if(dateObject.getFullYear() === year && dateObject.getMonth() === month && dateObject.getDate() === date) {
    return true;
  }
  return false;
}

console.log("2001, 11, 24:", isSantaComing(new Date(2001, 11, 24))) // true
console.log("2018, 7, 4:", isSantaComing(new Date(2018, 7, 4))) // false
console.log("1995, 11, 23, 23, 59, 59:", isSantaComing(new Date(1995, 11, 23, 23, 59, 59))) // false
