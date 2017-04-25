'use strict';

var michael;

//throws ReferenceError
  //can't accidentally create global variables
michael = 5;

//NaN --> non-writeable global variable
var sum = undefined + 5
console.log(sum);

var o = {p: 1, p: 2};

function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
}

function Rectangle() {
  console.log(13, this);
  Shape.call(this);
}

var s = new Rectangle();

console.log(s);
