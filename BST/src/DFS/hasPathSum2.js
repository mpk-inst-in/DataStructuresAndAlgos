/* Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children. 
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


}

const pathSum = (node, targetSum) => {

  const paths = [];

  pathSumDFS(node, targetSum, [], paths);

  return paths;

}

const pathSumDFS = (node, targetSum, intermediate, paths) => {

  if (node === null) return;

  intermediate.push(node.value);
  console.log(node.value);

  if (node.left === null && node.right === null && node.value === targetSum) {

    console.log('Got the path...', intermediate)
    paths.push(intermediate);
    return;
  }

  pathSumDFS(node.left, targetSum - node.value, [...intermediate], paths);
  pathSumDFS(node.right, targetSum - node.value, [...intermediate], paths);

  //backtrack
  intermediate.pop();


};



const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(5);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);


const result = pathSum(root, 8);

console.log(result);




































