function lastRemaining(n) {
  var left = true;
  remaining = n
  var step = 1;
  var head = 1;
  while(remaining > 1) {
    console.log('7 remaining, step, head, left', remaining, step, head, left);
    if(left || remaining % 2 === 1) {
      console.log('line 9');
     // console.log('left, remaining', left, remaining);
      head = head + step;
    }
    remaining = Math.floor(remaining / 2);
    step = step * 2;
    left = !left;
    console.log('15 remaining, step, head, left', remaining, step, head, left);

  }
  return head;
}

console.log(lastRemaining(9));

/*
double pay increase
Jax - top engineers in the area
  good place to grow
  -flexibility and control
  -as much freedom as you want
  -no schedule
  -care about work-life balance
  -react developer need
   -converting all applications into
     --react and node
     --2 teams diamond claims team
       --contract positions - convert full
         -time eventually - 6 months based
           on performance

       --care management domain


*/