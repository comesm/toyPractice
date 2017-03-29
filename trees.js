let Bst = function() {
  this.root = null;
}

Bst.prototype.inOrderTraverse = function() {

}

Bst.prototype.preOrderTraverse = function() {

}

Bst.prototype.postOrderTraverse = function() {

}

Bst.prototype.depthFirstSrch = function(value) {

}

Bst.prototype.breadthFirstSrch = function(value) {

}

Bst.prototype.insert = function(node) {
  if(this.root === null) {
    this.root = node;
    return;
  }

  let insertNode = node;

  var traverseTree = function(node) {
    if(node.value < insertNode.value) {
      if(node.left === null) {
        node.left = node;
        return;
      } else {
        traverseTree(node.left);

    } else if(node.value > insertNode.value) {
      if(node.right === null) {
        node.right = node;
        return;
      } else {
        traverseTree(node.right);
      }
    }
  }

  traverseTree(this.root)

}


var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var tree = new Bst();

var node1 = new Node(5);
tree.insert(node1);
console.log(tree)



