var words = ["ground", "control", "to", "major", "tom"];

function mapLength(wordArray, calcFunction) {
  var lengthArray = [];
  for (var i = 0; i < wordArray.length; i++){
    lengthArray.push(calcFunction(wordArray[i]));
  }
  return lengthArray;
}

function findLength(word) {
  return word.length;
}

console.log(mapLength(words, findLength));