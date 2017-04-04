

var powerSet = function(string, idx) {

  if(idx < 0) {
    return [''];
  }
  if(idx === undefined) {
    idx = string.length - 1;
  }
  if(idx < string.length) {
    var addSubstr = string[idx];
    var result = powerSet(string, idx - 1);
    var resultCopy = result.slice();
    for (var i = 0; i < resultCopy.length; i++) {
      resultCopy[i] = resultCopy[i] + addSubstr;
    }
    result = result.concat(resultCopy);
    return result;
  }
}


