/* 
Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
*/

const count_paths = function (root, S) {
  let count = 0;

  const helper = (curr, currArr = []) => {
    if (!curr) return;

    currArr.push(curr.value);

    if (!curr.left && !curr.right) {
      let currSum = 0;
      for (let i = currArr.length - 1; i >= 0; i--) {
        currSum += currArr[i];

        if (currSum === S) {
          count++;
        }
      }
    }

    helper(curr.left, [...currArr]);
    helper(curr.right, [...currArr]);
  };

  helper(root);
  return count;
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
