/* Given a binary tree and two nodes, find the lowest common ancestor(LCA) between them.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


}


const find_LCA = (root, p, q) => {

  if (root === null || root === p || root === q) {
    return root;
  }

  if (root.value === p || root.value === q) {
    return root.value;
  }

  const leftTree = find_LCA(root.left, p, q);
  const rightTree = find_LCA(root.right, p, q);

  return leftTree && rightTree ? root.value : leftTree ? leftTree : rightTree;
  /*   if (leftTree && rightTree) {
      console.log(root.value)
      return root.value;
    }
  
    if (leftTree && !rightTree) {
      console.log('left:', leftTree);
      return leftTree;
    }
    if (rightTree && !leftTree) {
      console.log('right:', rightTree);
      return rightTree;
    };
   */

}

const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);

root.left.left = new Node(6);
root.left.right = new Node(2);

root.left.right.left = new Node(7);
root.left.right.right = new Node(4)





console.log(find_LCA(root, 5, 4));
console.log(find_LCA(root, 6, 2));
console.log(find_LCA(root, 6, 1));
console.log(find_LCA(root, 5, 1));







