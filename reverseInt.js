//reverse digits

var reverse = function(x) {
  var result = '';
  var accum = x.toString();
  var last = 0;
  if(accum[0] === '-') {
    result+=accum[0];
    last = 1;
  }
  for (var i = accum.length - 1; i >= last; i--) {
    result += accum[i];
  }
   var result = parseInt(result);
   if(Math.abs(result) > 4294967295) {
    return 0;
   }
   return result;

};

console.log(reverse(1534236469));