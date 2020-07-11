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


dateFormatter("05/22/46")// -> "19462205"
dateFormatter("09/23/82") // -> "19822309"
dateFormatter("03/15/88") // -> "19881503"
