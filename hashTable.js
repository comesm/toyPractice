
var HashTable = function() {
  this.storage = new Array(5);

}

HashTable.prototype.insert = function(key, val) {
  var index = key.charCodeAt(0) % 5;
  console.log(index);
  this.storage[index] = val;
}

HashTable.prototype.remove = function() {

}


HashTable.prototype.retrieve = function(key) {
  var index = key.charCodeAt(0) % 5;
  return this.storage[index];
}

HashTable.prototype.size = function() {
  return this.storage.length;
}

var hash = new HashTable();
 hash.insert('m',2);
 hash.insert('m',2);
 hash.insert('m',4);

console.log(hash.size());
console.log(hash.retrieve('m'));

