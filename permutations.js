//return array with all permutations of string

//ex
/*
abc
bac
bca
cba
cab
acb
abc







*/

var permutations = function(string) {
  var strArray = string.split('');
  var resultStr = '';
  var resultArray = []
  resultArray.push(string);
  var counter = 0;
  while(resultStr !== string) {
  var j = 1;
  var i = 0;
    while(j < strArray.length) {
      var temp = strArray[i];
      strArray[i] = strArray[j];
      strArray[j] = temp;
      j++; i++
      resultStr = strArray.join('');
      if(resultStr !== string) {
      resultArray.push(resultStr);
    }
    }
    counter++
  }
  return resultArray;
}

function permut(string) {

    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];
        console.log(53);
        if (string.indexOf(char) != i) {
            console.log(54)
            continue;
        }
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length);
        for (var subPermutation of permut(remainingString)) {
            console.log(58, string, char, subPermutation, remainingString);
            permutations.push(char + subPermutation)
          }
    }
    console.log(62, permutations);
    return permutations;
}

console.log(permut('abc'));

