class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

// -Infinity < 0 < Infinity
const isBinarySearchTree = (node) => {


  if (node === null) return true;

  return helperDfs(node, -Infinity, Infinity);

}

const helperDfs = (node, min, max) => {

  if (node === null) return true;

  // checks the highest level root node and its left, right children for BSt properties
  if (node.value < min || node.value > max) return false;

  // checks the lower level root node and its right children for BSt properties/ subtrees

  const leftResult = helperDfs(node.left, min, node.value - 1);
  const rightResult = helperDfs(node.right, node.value + 1, max);

  return leftResult && rightResult;


}




const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);


console.log(isBinarySearchTree(root)) //false


const root2 = new Node(10);
root2.left = new Node(6);
root2.left.left = new Node(1);
root2.left.right = new Node(8);

root2.right = new Node(13);
root2.right.left = new Node(11);
root2.right.right = new Node(14);

console.log(isBinarySearchTree(root2)) //true
