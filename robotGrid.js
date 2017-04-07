


var RobotGrid = function(rows, cols, ...limitCoord) {
   this.grid = this.makeGrid(rows, cols, ...limitCoord);
   this.rows = rows;
   this.cols = cols;

}


RobotGrid.prototype.makeGrid = function(rows, cols, ...limitCoord) {
  var grid = new Array(cols);
  grid.fill(0);
  var i = 0;
  while(i < grid.length)
    {grid[i] = new Array(rows); grid[i].fill(0);i++}
  limitCoord.forEach(val => grid[val[0]][val[1]] = 1);
  return grid;
 // console.log(grid);
}

RobotGrid.prototype.generatePaths = function(row, col, steps) {

  if(row < 0 || col < 0 || this.grid[row][col] === undefined) {

    return false;
  }

  var origin = (row === 0) && (col === 0);

  if(origin || this.generatePaths(row - 1, col, steps)
    || this.generatePaths(row, col - 1, steps)) {
    steps.push([row, col]);
    return steps;
  }

  return steps;

}


OUTPUT EXPECTED: 37 [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]
RobotGrid.prototype.generatePaths1 = function(row, col, steps) {
  if(arguments.length === 0) {
    row = 0; col = 0; steps = [];
  }
  //console.log(26, row, col, steps, this.grid.length, this.grid[0].length);
  if(row > this.grid.length - 1 || col > this.grid[0].length - 1) {
    //console.log(28)
    return;
  }

  if(row === this.grid.length - 1 && col === this.grid[0].length - 1) {
    steps.push([row, col]);
    return steps;
  }
  if(this.grid[row][col] === 1) {
    return;
  } else {
    steps.push([row, col]);
    //console.log('39', steps, row, col);
    this.generatePaths(++row, ++col, steps);
    this.generatePaths(row, ++col, steps);
    this.generatePaths(++row, col, steps);
    //this.generatePaths(row++, col, steps);
    return steps;
  }
}

RobotGrid.prototype.generatePaths = function(row, col, steps) {
  console.log('24 row col steps', row, col, steps);

  if(col < 0 || row < 0 ||  this.grid[row][col] === undefined) {
        console.log(25, this.grid[row][col], row, col);
    return false;
  }
  var isAtOrigin = (row == 0) && (col == 0);

  if(isAtOrigin || this.generatePaths(row, col - 1, steps) ||
    this.generatePaths(row - 1, col, steps)) {
    console.log(31, row, col, steps);
    steps.push([row, col]);
    console.log('37', steps);
    return true;
  }

}

var robot = new RobotGrid(3,3, [1,1]);

console.log(robot.generatePaths(robot.grid.length - 1, robot.grid[0].length - 1,[]));
