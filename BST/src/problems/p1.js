/* Given a BT, print the right view of BST. */

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}



const printRightView = (node) => {

  if (node === null) return [];

  const queue = [node];

  const result = [];

  while (queue.length) {

    let queueDepth = queue.length;
    let count = 0

    while (count < queueDepth) {

      const current = queue.shift();
      count++;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      if (count === queueDepth) result.push(current.value);

    }

  }

  return result;


}



const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);


console.log(printRightView(root));

