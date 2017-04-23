
// var repeatedArithmeticShift = function(x, count) {

//   for (var i = 0; i < count; i++) {
//     console.log('5', x);
//     x >>= 1;
//     console.log('7', x);
//   }
//   return x;
// }

// // console.log(repeatedArithmeticShift(-93242, 40))

// var repeatedLogicalShift = function(x, count) {
//   for (var i = 0; i < count; i++) {
//     console.log('16', x)
//     x >>> 1;
//     console.log('18', x >>> 1)

//   }
//   return x;
// }

// console.log(repeatedLogicalShift(-93242, 40))

var setBit = function(num , i) {
    console.log(1 << i, num);
    return num | (1 << i);
}

console.log(setBit(2,2));


var insertion = function(n, m, i, j) {
  var valInsert = m << i;

  return (n | valInsert);

}

console.log(insertion(10000000000, 1011,2,6))

