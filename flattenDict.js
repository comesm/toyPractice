// {
//   'Key1': '1',
//   'Key2': {
//     'a' : '2',
//     'b' : '3',
//     'c' : {
//       'd' : '3',
//       'e' : '1'
//       }
//     }
// }
// Output:
// {
//   'Key1': '1',
//   'Key2.a': '2',
//   'Key2.b' : '3',
//   'Key2.c.d' : '3',
//   'Key2.c.e' : '1'
// }
/*
smallest substring of all characters
arr: [x,y,z] str 'xyyxyxyx'
The "Smallest Substring of All Characters" Problem

Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

Example:
arr: [x,y,z], str: xyyzyzyx
result: zyx




Implement your solution and analyze the runtime complexity

*/

// var obj = {
//   'Key1': '1',
//   'Key2': {
//     'a' : '2',
//     'b' : '3',
//     'c' : {
//       'd' : '3',
//       'e' : '1'
//       }
//     }
// }
//Output:
// {
//   'Key1': '1',
//   'Key2.a': '2',
//   'Key2.b' : '3',
//   'Key2.c.d' : '3',
//   'Key2.c.e' : '1'
// }

// function flatten(obj, parentKey, resultObj) {
//   resultObj =  resultObj || {};
//   parentKey = parentKey || '';
//   for(var key in obj) {
//     if(typeof obj[key] === 'object') {

//       flatten(obj[key], parentKey + key +'.', resultObj);
//     } else {

//       resultObj[parentKey + key] = obj[key];
//     }
//   }
//   //console.log(resultObj);
//   return resultObj;
// }

// console.log(flatten(obj));
// smallest substring of all characters
// arr: [x,y,z] str 'xyyxyxyx'
// The "Smallest Substring of All Characters" Problem

// Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

// Example:
// arr: [x,y,z], str: xyyzyzyx
// result: zyx

function subStr1(arr, str) {
  var arrObj = {};
  arr.forEach(v => arrObj[v] = v);

  var h = 0;
  var tail = h+1;
  var start = 0;
  var curLen = 0;
  var resultStr = '';
  var resultTuple = ['', 0];
  while(h < str.length - 1) {
    if(!!arrObj[str[h]]) {
      delete arrObj[str[h]]
      while(tail < str.length) {
        console.log(h, tail, arrObj);
          if(start === 0) {
            console.log(101)
            start = h;
          }
        if(Object.keys(arrObj) === []) {
          var currentMin = resultTuple[1];
          if(tail - h < currentMin || currentMin === 0) {
            resultTuple[0] = str.substring(h, tail + 1);
            resultTuple[1] = tail - h;
          }
        }

        tail++
      }
    }
  h++;
}
console.log('119', resultTuple)
return resultTuple[1];
}


function patternMatch(pattern,  string) {
  var patternObj = {};
  var stringObj = {};
  let count = 0;
  let start = 0;
  let end = 0;
  let minLen = Number.MAX_VALUE;
  let startIdx = start;
  pattern.forEach(val => patternObj[val] = patternObj[val] + 1 || 1);
  string.split('').forEach((val, i) => {
    stringObj[val] = stringObj[val] + 1 || 1;
    if(!!patternObj[val] && stringObj[val] <= patternObj[val]) {
      count++;
    }

  if(count === pattern.length) {
    console.log('135', i);
    while(stringObj[string[start]] > patternObj[string[start]] || !patternObj[string[start]]) {
      console.log(136, start, stringObj[string[start]], string[start], i);
      if(stringObj[string[start]] > patternObj[string[start]]) {
        stringObj[string[start]] -= 1;
      }
      start++;
    }
    var windowLen = i - start + 1;
    console.log('147', i, start, windowLen, minLen);
    if(minLen > windowLen) {
      minLen = windowLen;
      startIdx = start;
    }
    console.log('152', i, startIdx, windowLen, minLen);


    //console.log('141', start);
    }
  });
  console.log('158', startIdx, minLen);
  return string.substring(startIdx, minLen + startIdx);
}


console.log(patternMatch(['x','z','y'], 'qzxqqxqyzqqyxyyxyqxz'))