/* 
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height. 
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const minimalHeight = (array) => {
  if (array.length === 0) return;
  let left = 0;
  let right = array.length - 1;
  let mid = left + Math.floor((right - left) / 2);

  let root = new TreeNode(array[mid]);
  let leftArr = array.slice(0, mid);
  let rightArr = array.slice(mid + 1);

  root.left = minimalHeight(leftArr);
  root.right = minimalHeight(rightArr);

  return root;
};

console.log(minimalHeight([1, 2, 3, 4, 5, 6]));
