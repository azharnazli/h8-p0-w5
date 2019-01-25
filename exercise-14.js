function changeVocals (str) {
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'
  var vocal = 'aiueo'
  var result = ''
  for (var i = 0; i < str.length; i++) {
    var check = false
    for (var j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j] || vocal[j].toUpperCase() === str[i]) {
        check = true
        for (var k = 0; k < alphabets.length; k++) {
          if (
            alphabets[k] === str[i] ||
            alphabets[k].toUpperCase() === str[i]
          ) {
            result += alphabets[k + 1]
          }
        }
      }
    }
    if (check === false) {
      result += str[i]
    }
  }
  return result
}

function reverseWord (str) {
  // code di sini
  var result = ''
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function setLowerUpperCase (str) {
  // code di sini
  var result = ''
  var upper = ''
  var lower = ''
  for (var i = 0; i < str.length; i++) {
    upper = str[i].toUpperCase()
    lower = str[i].toLowerCase()
    var tmp = ''
    if (str[i] === upper) {
      tmp = str[i].toLowerCase()
      result += tmp
    } else if (str[i] === lower) {
      result += str[i].toUpperCase()
    }
  }
  return result
}

function removeSpaces (str) {
  // code di sini
  result = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i]
    }
  }
  return result
}

function passwordGenerator (name) {
  // code di sini
  if (name.length < 6) {
    return "'Minimal karakter yang diinputkan adalah 5 karakter'"
  }
  var changer = changeVocals(name)
  var reversed = reverseWord(changer)
  var upLowCase = setLowerUpperCase(reversed)
  var remove = removeSpaces(upLowCase)

  return remove
}

console.log(passwordGenerator('Sergei Dragunov')) // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')) // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')) // 'JFXFLb'
console.log(passwordGenerator('Alex')) // 'Minimal karakter yang diinputkan adalah 5 karakter'
