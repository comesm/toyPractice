//brute O(n-sq) time

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i+1;j < nums.length;j++ ) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
    return [null, null];

};

//semi-opt O(n) time

var twoSum = function(nums, target) {
  var targObj = {};

  for (var i = 0; i < nums.length; i++) {
    targObj[nums[i]] = i;
  }

  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if(targObj[complement] !== undefined) {
      return [i, targObj[complement]];
    }
  }
  return [null, null];
}

//one travesersal O(n)
var twoSum = function(nums, target) {
  var compObj = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if(compObj[complement] !== undefined) {
      return [compObj[complement], i];
    }
    compObj[nums[i]] = i;
  }

}


console.log(twoSum([1,2,3,4], 3))