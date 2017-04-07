
//binary search




var checkMagicIndex1 = function(array, idx) {
  if(idx === undefined) {
    idx = 0;
  }

  console.log(6, array);
  var mid = Math.floor(array.length / 2);
  if(array[mid] === mid) {
    return true;
  }
  if(array.length <= 1) {
    return false;
  }
  else {
    return checkMagicIndex(array.slice(0, mid), array, idx)
      || checkMagicIndex(array.slice(mid + 1), array, idx + mid);
  }

}


var checkMagicIndex = function(array) {

  var mid = Math.floor(array.length / 2);
  var l = 0;
  var u = array.length - 1;
  while(u > l) {
    console.log(u,l);
    if(array[mid] === mid) {
      return true;
    } else if(array[mid] > mid) {
      u = mid;
      mid = Math.floor((u + l) / 2);
    } else if(array[mid] < mid) {
      l = mid;
      mid = Math.floor((u + l + 1) / 2);
    }

  }
  return false;

}


var arr = [1,-3,1,2,4,5,6]
         //0 ,1, 2,3,4
console.log(checkMagicIndex(arr));

//associate