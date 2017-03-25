var myAtoi = function(string) {
  let i = 0;
  let sign = 1;
  let base = 0;
  //get to the end of the whitespace
  while(string[i] === ' ') {i++}

  //determine sign
  console.log('9', i);
  if(string[i] === '-' || string[i] === '+') {
    sign = (string[i++] === '+') ? 1 : -1;
  }

  console.log('14', i)

  while(string[i] <= 9 && string[i] >= 0) {
    base = (base * 10) + (string[i++] - 0)
  }

  return base * sign;
}

console.log(myAtoi('  234'));
















var myAtoiRefactor = function(str) {
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


//console.log(myAtoi('    -234.,'));