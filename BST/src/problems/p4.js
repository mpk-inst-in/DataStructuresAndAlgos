class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

let sum = 0;

const transformTree = (node) => {

  transformTreeDfs(node);
}


/* Recursive function to transform a BST
to sum tree. This function traverses
the tree in reverse inorder so that
we have visited all greater key nodes
of the currently visited node */
const transformTreeDfs = (node) => {

  if (node === null) return;

  // reverse in order traversal RNL

  //recurse on the right side

  transformTreeDfs(node.right);
  node.value += sum;
  sum = node.value;

  // process the left side
  transformTreeDfs(node.left);

}

const printInOrder = (node) => {

  if (node === null) return;

  printInOrder(node.left);
  console.log(node.value);
  printInOrder(node.right);


}




let root;

root = new Node(4);
// root.left = new Node(1);
root.right = new Node(6);
root.right.right = new Node(10);
root.right.left = new Node(5);


console.log("Inorder traversal.. B4 transform")
printInOrder(root);
transformTree(root);
console.log("\n \n Inorder traversal.. After transform")
printInOrder(root)