function kaliTerusRekursif (angka) {
  // you can only write your code here!
  var numStr = angka.toString()
  var result = 1
  for (var i = 0; i < numStr.length; i++) {
    result *= numStr[i]
  }
  var resultLength = result.toString().length
  if (resultLength === 1) {
    return result
  } else {
    return kaliTerusRekursif(result)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)) // 8 6*6,3*6,1*8,8
console.log(kaliTerusRekursif(3)) // 3
console.log(kaliTerusRekursif(24)) // 8
console.log(kaliTerusRekursif(654)) // 0
console.log(kaliTerusRekursif(1231)) // 6
