/* 
  Given a preorder traversal of a binary search tree find the leaf nodes. 
*/

const findLeafNodes = (preorder) => {

  if (!preorder) return [];

  const leafNodes = [];
  findLeafNodesDfs(preorder, leafNodes);

  console.log(leafNodes)


}


findLeafNodesDfs = (preorder, leafNodes) => {

  //base case  
  if (preorder.length === 1) {
    leafNodes.push(preorder[0]);
    return;
  }

  const root = preorder.shift();

  const firstLargerNode = findIndexOfFirstLargerNode(root, preorder);


  if (firstLargerNode >= 0 && firstLargerNode < preorder.length) {

    findLeafNodesDfs(preorder.slice(0, firstLargerNode), leafNodes);
    findLeafNodesDfs(preorder.slice(firstLargerNode), leafNodes);

  }

  if (firstLargerNode === -1) {
    findLeafNodesDfs(preorder, leafNodes);
  }


}


const findIndexOfFirstLargerNode = (rootVal, preorder) => {


  let index = -1;

  preorder.forEach(function loop(item, i) {

    if (loop.stop) return;

    if (item > rootVal) {
      index = i;
      loop.stop = true;
    }


  })

  return index;

}



//findLeafNodes([5, 3, 8]) // leaf nodes = [3,8]
// 5
//3   8

//findLeafNodes([5]); // leaf nodes = [5]

findLeafNodes([5, 3]); // leaf nodes = [3]





