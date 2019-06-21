var tree;

function setup() {
  createCanvas(800,600);
  background(51);

  tree = new Tree();
  for (var i = 0; i < 15; i++) {
    var a = Math.floor(Math.random()*100);
    tree.addValue(a);
  }
  tree.traverse();
}
