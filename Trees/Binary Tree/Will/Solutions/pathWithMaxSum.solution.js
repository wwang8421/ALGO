/* 
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum. 
A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_maximum_path_sum = function (root) {
  let max = -Infinity;

  const helper = (curr) => {
    if (!curr) return 0;

    let left = helper(curr.left);
    let right = helper(curr.right);

    let currMax = Math.max(curr.value + left + right, curr.value); // handle the negative cases, want to take the larger of the curr and curr + children

    max = Math.max(currMax, max);

    return curr.value + Math.max(left, right);
  };
  helper(root);

  return max;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);
