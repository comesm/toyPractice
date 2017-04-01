/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var sum = 0;
  var node = new ListNode(0);
  var nextNode= node;
  while(l1 !== null || l2 !== null) {
    sum = Math.floor(sum / 10);
    if(l1 !== null) {
      sum +=l1.val;
      l1 = l1.next
    }
    if(l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    var nodeVal = sum % 10;
    var newNode = new ListNode(nodeVal);
    nextNode.next = newNode;
    nextNode = newNode;
  }
  if(sum > 9) {
    nextNode.next = new ListNode(1);
  }
  return node.next;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}


var node1 = new ListNode(2)
var node2 = new ListNode(4)
var node3 = new ListNode(9)

node1.next = node2;
node2.next = node3;

var node4 = new ListNode(5)
var node5 = new ListNode(6)
var node6 = new ListNode(4)

node4.next = node5;
node5.next = node6;

console.log(addTwoNumbers(node1, node4))

