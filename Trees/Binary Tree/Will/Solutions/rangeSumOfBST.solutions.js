// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

 

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

// LINK: https://leetcode.com/problems/range-sum-of-bst/

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var rangeSumBST = function(root, L, R) {
  let sum = 0;
  
  const helper = (curr) => {
    if(!curr) return 0;

    if(L <= curr.val  && curr.val <= R){
      sum += curr.val;
    }

    helper(curr.left);
    helper(curr.right);
  }
  helper(root);
  return sum;
};

let node = new TreeNode(10);
node.left = new TreeNode(5);
node.left.left = new TreeNode(3);
node.left.right = new TreeNode(7);
node.right = new TreeNode(15);
node.right.right = new TreeNode(18);

console.log(rangeSumBST(node, 7, 15))
