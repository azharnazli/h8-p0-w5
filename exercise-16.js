function totalDigitRekursif (angka) {
  // you can only write your code here!
  var numStr = angka.toString()
  var first = numStr[0]
  var last = numStr.slice(1)

  if (last.length === 0) {
    return Number(first)
  }

  return Number(first) + totalDigitRekursif(last)
}

// TEST CASES
console.log(totalDigitRekursif(512)) // 8
console.log(totalDigitRekursif(1542)) // 12
console.log(totalDigitRekursif(5)) // 5
console.log(totalDigitRekursif(21)) // 3
console.log(totalDigitRekursif(11111)) // 5
