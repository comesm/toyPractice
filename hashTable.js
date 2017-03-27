
var HashTable = function() {
  this.storage = new Array(5);

}

HashTable.prototype.insert = function(key, val) {
  var index = key.charCodeAt(0) % 5;
  console.log(index);
  this.storage[index] =
}

HashTable.prototype.remove = function() {

}

HashTable.prototype.size = function() {
  return this.storage.length;
}

var hash = new HashTable();
 hash.insert('m',2);
 hash.insert('m',2);
 hash.insert('m',2);

console.log(hash.size());
