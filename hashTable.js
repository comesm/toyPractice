
var HashTable = function() {
  this.storage = new Array(5);

}

HashTable.prototype.insert = function(key, val) {
  var index = key.charCodeAt(0) % 5;
  var bucket = this.storage[index] || new List();
  if(this.storage[index] === undefined) {
    var node = new Node(key, val);
    bucket.addToEnd(node);
  } else {
     var currNode = bucket.retrieve(key);
     if(currNode !== null) {
        currNode.value = val;
     } else {
       bucket.addToEnd(new Node(key, val));
     }
   }
}

HashTable.prototype.remove = function(key) {


}

HashTable.prototype.retrieve = function(key) {
  var index = generateHash(key);
  return this.storage[index];
}

HashTable.prototype.size = function() {
  return this.storage.length;
}

HashTable.prototype.generateHash = function(key) {
    return key.charCodeAt(0) % 5;

}


var List = function() {
  this.start = null;
  this.end = null;
 // this.current = null;
}

var Node = function(k, v) {
  this.value = v;
  this.key = k;
  this.next = null;
}

List.prototype.addToEnd = function(key, value) {
   var node = new Node(key, value);
   console.log(57, node);
   if(this.start === null) {
      this.start = node;
      this.end = node;
   } else {
    var temp = this.end;
    temp.next = node;
    this.end = node;
   }
 // this.current = node;
}

List.prototype.retrieve = function(key) {
  var currentNode = this.start;
  while(!!currentNode) {
    console.log(71, currentNode);
    if(currentNode.key === key) {
      console.log(72, currentNode);
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
}

var list = new List();
var node = list.addToEnd('ya', 5)
var node2 = list.addToEnd('no', 4);
// list.addToEnd(node);
// list.addToEnd(node2);
console.log(87, list.retrieve('ya'))


// var hash = new HashTable();
//  hash.insert('m',2);
//  hash.insert('m',2);
//  hash.insert('m',4);

// console.log(hash.size());
// console.log(hash.retrieve('m'));

