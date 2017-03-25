var myAtoi = function(str) {
  let base = 0;
  let i = 0;
  let sign = 1;

  while(str[i] === ' ') {i++};
  if(str[i] === '+' || str[i] === '-') {
    sign = 1 - 2 * (str[i++] === '-')
  }

  while(str[i] >= '0' && str[i] <= '9') {
     base = 10 * base + (str[i++] - '0');
  }

  return base * sign;

};


console.log(myAtoi('    -234.,'));