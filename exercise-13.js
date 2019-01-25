function sorting (arrNumber) {
  // code di sini
  for (var i = 1; i < arrNumber.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arrNumber[i] < arrNumber[j]) {
        var tmp = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = tmp
      }
    }
  }
  return arrNumber
}

function getTotal (arrNumber) {
  if (arrNumber.length === 0) {
    return '\n'
  }
  // code di sini
  var obj = {}
  var result = 0
  for (var i = 0; i < arrNumber.length; i++) {
    if (obj[arrNumber[i]] === undefined) {
      obj[arrNumber[i]] = 0
    }
    {
      obj[arrNumber[i]]++
    }
  }
  var jumlah = 0
  for (key in obj) {
    if (key > jumlah) {
      jumlah = obj[key]
      result = key
    }
  }
  return `angka paling besar adalah ${result} dan jumlah kemunculan sebanyak ${jumlah} kali`
}

function mostFrequentLargestNumbers (arrNumber) {
  var listSort = sorting(arrNumber)
  var countHighest = getTotal(listSort)
  return countHighest
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
)
// // 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]))
// // 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]))
