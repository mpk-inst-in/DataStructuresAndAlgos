class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const hasPathSum = (node, targetSum) => {

  if (node === null) return false;

  if (node.left === null && node.right === null && node.value === targetSum) return true;

  return hasPathSum(node.left, targetSum - node.value) || hasPathSum(node.right, targetSum - node.value);

}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(4);

console.log(hasPathSum(root, 4)); //true
