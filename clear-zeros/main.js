function clearZeros(numberString) {
  console.log(Number(numberString).toString())

}

clearZeros("00032.2000") // -> "32.2"
clearZeros("32.07210") // -> "32.0721"
clearZeros("02100.001200") // -> "2100.0012"
