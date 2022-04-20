/* 
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. 
*/

// [[1], [2, 3], [4, 5, 6, 7]]

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

const levelAvgs = function (node) {


  if (node === null) return [];

  const queue = [node];

  const result = [];

  while (queue.length) {

    const queueDepth = queue.length;
    let sum = 0

    for (let i = 0; i < queueDepth; i++) {

      const current = queue.shift();
      sum += current.value;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

    }

    result.push(sum / queueDepth);


  }


  return result;

}

//    1
// 2    3
// 4 5  6 7 
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(levelAvgs(root));












