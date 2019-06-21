function Node(val,x,y,l) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = x;
  this.level = 1;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }
  ellipse(this.x, this.y, 20, 20)
  stroke(255);
  textAlign(CENTER);
  text(this.value, this.x, this.y+5);
  if (this.right != null) {
    this.right.visit();
  }
}

Node.prototype.addNode = function(n) {
  var w = width - 25
  n.level += 1
  if (n.value < this.value){
    if (this.left == null){
      this.left = n;

      this.left.x = this.x - w/Math.pow(2,n.level);
      this.left.y = this.y + 50;
      stroke(255);
      line(this.x, this.y, this.left.x, this.left.y);

    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value){
    if (this.right == null){
      this.right = n;

      this.right.x = this.x + w/Math.pow(2,n.level);
      this.right.y = this.y + 50;
      stroke(255);
      line(this.x, this.y, this.right.x, this.right.y);

    } else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.order = function() {
  if (this.left != null) {
    this.left.order();
  }
  console.log(this.value);
  if (this.right != null) {
    this.right.order();
  }
}
