/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1


 */
var invertTree = function(root) {
  let tree = root;
  var nodeQueue = [tree];

  while(nodeQueue.length > 0) {
   var current = nodeQueue.shift();
   var left = current.left;
   //var right = current.right;
   current.left = current.right;
   current.right = left;
    if(current.left !== null) {
      nodeQueue.push(current.left);
    }
    if(current.right !== null) {
      nodeQueue.push(current.right);
    }
  }
  return tree;
};


  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

  var tree = new TreeNode(4);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(7);
  tree.left.left = new TreeNode(1);
  tree.left.right = new TreeNode(3);
  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(9);

  console.log(invertTree(tree));


