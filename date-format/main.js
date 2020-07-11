function dateFormatter(date) {
  var daySplit = date.split("/");
  var year;

  if( daySplit[2] >= parseInt("00") && daySplit[2] <= 20 ) {
    year = "20";
  } else if (daySplit[2] >= 21 && daySplit[2] <= 99) {
    year = "19";
  }

  console.log( year + daySplit[2] + daySplit[1] + daySplit[0]);

}

//--------- different solution ----------
// function dateFormatter(date) {
//   var result = []
//   var word = ''
//   for (var i = 0; i <= date.length; i++) {
//     if (date[i] === '/' || !date[i]) {
//       result.push(word)
//       word = ''
//     } else {
//       word += date[i]
//     }
//   }
//   // We don't use the year variable in the code block because when it was
//   // parsed as an integer all leading and trailing zeros were removed.
//   var year = parseInt(result[2])
//   if (year <= 20 && year >= 0) {
//     result[2] = '20' + result[2]
//   } else {
//     result[2] = '19' + result[2]
//   }
//   return result[2] + result[1] + result[0]
// }


dateFormatter("05/22/46")// -> "19462205"
dateFormatter("09/23/82") // -> "19822309"
dateFormatter("03/15/88") // -> "19881503"
