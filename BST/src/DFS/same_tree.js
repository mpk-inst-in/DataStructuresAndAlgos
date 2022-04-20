class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

const same_tree = (p, q) => {

  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  // console.log({ p1: p.val, q1: q.val })
  return (p.value === q.value) && same_tree(p.left, q.left) && same_tree(p.right, q.right);


}


//    1

//   2      3
// 4  5    6 7

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

console.log(same_tree(root, root2))
