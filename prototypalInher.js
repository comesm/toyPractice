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
  Shape.call(this);
}

var s = new Shape();

console.log(s.prototype)
