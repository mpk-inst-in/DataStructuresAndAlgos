// pre order traversal of the binary tree
// 🇳🇱R

const preorder_traversal = (node, result) => {

  if (node === null) return;
  result.push(node.val);

  preorder_traversal(node.left, result);
  preorder_traversal(node.right, result);

}

// L N R
const inorder_traversal = (node, result) => {

  if (node === null) return;

  preorder_traversal(node.left, result);
  result.push(node.val);
  preorder_traversal(node.right, result);

}

// LRN
const post_order_traversal = (node, result) => {

  if (node === null) return;

  preorder_traversal(node.left, result);
  preorder_traversal(node.right, result);
  result.push(node.val);

}


