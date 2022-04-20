/* 
Given a binary tree, a target node, and an integer value k, return all the  nodes in an array that have a distance k from the target node. */

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

// find the target node in the tree
// if the target node exists in the tree, the perform a DF recursive traversal.
// otherwise return null


// function to find the target node in the tree

const find_target_node = (node, target, distance = 0) => {


  if (node === null) return null;

  if (node.value === target) {

    return { node, distance };

  }

  const leftResult = find_target_node(node.left, target, distance + 1);

  if (leftResult) return { ...leftResult, left: true, right: false };

  const rightResult = find_target_node(node.right, target, distance + 1);
  if (rightResult) return { ...rightResult, right: true, left: false };

  return null;

}




const find_nodes_k_distance_away = (node, target, k) => {

  if (node === null) return null;

  const targetNode = find_target_node(node, target);

  if (targetNode === null) return null;

  const distance = targetNode.distance;

  const result = []
  // this call get the k distance nodes either from the left side of the tree or from the right side of the tree.
  find_nodes_k_distance_away_dfs(targetNode.node, k, result);

  console.log({ result });

  // now we have to traverse the opposite side of the tree in order to find the elements k distance away

  const result2 = [];
  if (k - distance === 0) {
    result2.push(node.value);
    return [...result, ...result2];
  }


  if (targetNode.left) {

    find_nodes_k_distance_away_dfs(node.right, k - distance, result2);


  } else {

    find_nodes_k_distance_away_dfs(node.left, k - distance, result2);

  }


  return [...result, ...result2];

}


const find_nodes_k_distance_away_dfs = (node, k, result = []) => {

  if (node === null) return null;

  if (k === 0) {
    result.push(node.value);
    return;
  }

  //traverse left child
  find_nodes_k_distance_away_dfs(node.left, k - 1, result);

  //traverse right child

  find_nodes_k_distance_away_dfs(node.right, k - 1, result);


}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

// const result = find_target_node(root, 5);

// console.log(result);

const result = find_nodes_k_distance_away(root, 2, 1);

console.log(result);




















