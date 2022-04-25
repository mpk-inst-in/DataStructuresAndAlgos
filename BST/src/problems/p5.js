/* Given a binary tree, print it’s top view. */

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}


const printTopView = (node) => {

  if (node === null) return [];

  const queue = [[node, 0]];

  const resultMap = {};

  const finalResult = [];

  while (queue.length) {

    let queueDepth = queue.length;

    // console.log({ queueDepth })

    let count = 0;

    while (count < queueDepth) {

      const current = queue.shift();
      // console.log({ c1: current[0], c2: current[1] })
      // console.log({ c1: current[0].value })
      const horizontalDistance = current[1];

      if (!resultMap[horizontalDistance]) {
        resultMap[horizontalDistance] = current[0].value;
        finalResult.push([horizontalDistance, current[0].value])
      }

      if (current[0].left) { queue.push([current[0].left, horizontalDistance - 1]); }
      if (current[0].right) { queue.push([current[0].right, horizontalDistance + 1]); }

      count++;
    }

  }

  // console.log(finalResult);

  const topView = [];
  finalResult.sort((a, b) => a[0] - b[0]).forEach(a => {
    topView.push(a[1]);
  })


  console.log(topView);

}

//    1
//  2  3
//4 5  6 7

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

printTopView(root);


const printBottomView = (node) => {

  if (node === null) return [];

  const queue = [[node, 0]];

  const resultMap = {};

  const finalResult = [];

  while (queue.length) {

    let queueDepth = queue.length;

    // console.log({ queueDepth })

    let count = 0;

    while (count < queueDepth) {

      const current = queue.shift();
      // console.log({ c1: current[0], c2: current[1] })
      // console.log({ c1: current[0].value })
      const horizontalDistance = current[1];

      // if (!resultMap[horizontalDistance]) {
      resultMap[horizontalDistance] = current[0].value;
      finalResult.push([horizontalDistance, current[0].value])
      // }

      if (current[0].left) { queue.push([current[0].left, horizontalDistance - 1]); }
      if (current[0].right) { queue.push([current[0].right, horizontalDistance + 1]); }

      count++;
    }

  }

  // console.log(finalResult);

  const bottomView = [];
  finalResult.sort((a, b) => a[0] - b[0]).forEach(a => {
    bottomView.push(a[1]);
  })


  console.log(bottomView);

}
