function dayFinder(stringDate){
  var newDate = new Date(stringDate);
  var month = newDate.getMonth();
  var date = newDate.getDate();
  var year = newDate.getFullYear();
  var day = newDate.getDay(); // return day as an integer from 0 -6

  switch(day){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    default:
      day = "Saturday";
  }

  return day;

// ----- or --- using if else statement ------
  // if(day === 0 ){
  //   return "Sunday"
  // } else if (day === 1) {
  //   return "Monday"
  // } else if( day === 2) {
  //   return "Tuesday"
  // } else if (day === 3) {
  //   return "Wednesday"
  // } else if( day === 4) {
  //   return "Thursday"
  // } else if (day === 5) {
  //   return "Friday"
  // } else {
  //   return "Saturday"
  // }


}


console.log(dayFinder("05/22/1946")) // -> "Wednesday"
console.log(dayFinder("01/20/2001")) // -> "Saturday"
console.log(dayFinder("03/15/1988")) // -> "Tuesday")
