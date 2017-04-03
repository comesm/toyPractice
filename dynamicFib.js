var fibonacci = function(n) {
  var fib = []
  fib[0] = 0;
  fib[1] = 1;
  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }


  return fib[n];
}

console.log(fibonacci(10));

/*
  n  = f(n)
  0    0
  1    1
  2    1
  3    2
  4    3
  5    5
  6    8
  7    13
  */