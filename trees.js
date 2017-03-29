let Bst = function(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

Bst.prototype.inOrderTraverse = function(cb) {
  if(this.value === null) {
    return;
  }
  if(this.left === null) {
    cb(this.value);
  } else {
    this.left.inOrderTraverse(cb);
    cb(this.value);
    if(this.right !== null) {
      this.right.inOrderTraverse(cb);
    }
  }


}

Bst.prototype.preOrderTraverse = function(cb) {
  if(this.value === null) {
    return;
  } else {
    cb(this.value);
    if(this.left !== null) {
    this.left.preOrderTraverse(cb);
  }
    if(this.right !== null) {
      this.right.preOrderTraverse(cb);
    }
  }

}

Bst.prototype.postOrderTraverse = function(cb) {
  if(this.value === null) {
    return;
  }
  if(this.left === null && this.right === null) {
    cb('44', this.value);
    return;
  } if(this.left !== null) {
    this.left.postOrderTraverse(cb);

  } if(this.right !== null) {
    this.right.postOrderTraverse(cb);
  }
  cb('52', this.value);
  //return;
}

Bst.prototype.depthFirstSrch = function(value, cb) {


}

Bst.prototype.breadthFirstSrch = function(value) {

}

Bst.prototype.rebalance = function() {

}

Bst.prototype.insert = function(node) {
  // console.log(this.value)
  // if(this.value === null) {
  //   this.value = node;
  //   return;
  // }
  if(this.value > node.value) {
    if(this.left === null) {
      this.left = node;
      return;
    } else {
      this.left.insert(node);
    }
  } else if(this.value < node.value) {
    if(this.right === null) {
      this.right = node;
    } else {
      this.right.insert(node);
      return;
    }
  }

}


var tree = new Bst(10);
var node0 = new Bst(5);

var node1 = new Bst(20);
var node2 = new Bst(9);
var node3 = new Bst(18);
var node4 = new Bst(3);
var node5 = new Bst(7);

tree.insert(node0);
tree.insert(node1);
tree.insert(node2);
tree.insert(node3);
tree.insert(node4);
tree.insert(node5);
//console.log(tree)

console.log(tree.depthFirstSrch(18, function(val) {
  console.log('left child', this.left);
  console.log('right child', this.right);
  console.log('search val', val)
}));

// console.log(tree.postOrderTraverse(function(val, val2) {console.log(11, val, val2)}));
console.log(111)


