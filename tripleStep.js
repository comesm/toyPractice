/*
  child runnign up a staircase with n steps, and can hop either 1, 2, 3
  steps at a time. implement a method to count how many possible ways child can run up the stairs
*/

var tripleStep = function(n) {
  var results = new Array(n + 1);
  results.fill(-1);

  var recurse = function(n) {

    if(n < 0) {
      return 0;
    }
    if(results[n] !== -1) {
      return results[n];
    }
    if(n === 0) {
      return 1;
    }

    results[n] = recurse(n - 1) + recurse(n - 2)  + recurse(n - 3);
    return results[n];
  }

  return recurse(n);
}

// console.log(tripleStep(5));
