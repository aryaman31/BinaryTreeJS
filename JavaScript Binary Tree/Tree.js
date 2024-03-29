function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null){
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 16; 
  } else {
    this.root.addNode(n);
  }
  tree.traverse();
}

Tree.prototype.traverse = function() {
  this.root.visit();
}

Tree.prototype.find = function(val) {
  var found = this.root.search(val);
  console.log(found);
}

Tree.prototype.showVal = function() {
  this.root.order();
}