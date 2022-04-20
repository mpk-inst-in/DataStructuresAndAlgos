class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}


const findPath = (node, elem) => {

  if (node === null) return null;

  const path = [];
  const result = findPathDFS(node, elem, path);

  return { result, path: [...path] };

}


const findPathDFS = (node, elem, path) => {


  if (node === null) return false;

  path.push(node.value);

  if (node.value === elem) return true;

  // console.log(path);

  if (findPathDFS(node.left, elem, path)) return true;

  if (findPathDFS(node.right, elem, path)) return true;

  //backtracking to update path array
  path.pop();

  return false;
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);

root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

const result = findPath(root, 7);

console.log(result);
