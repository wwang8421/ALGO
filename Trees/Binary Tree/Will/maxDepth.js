//PROB
/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.
*/

// PSUDO:
//     /* first check the input
//     if there is no root then return 0
//     next run a dfs and count the
//     maxDepth = 1 + max(left, right);
//     */

var maxDepth = function (root) {
  if (!root) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};

// LINK: https://leetcode.com/problems/maximum-depth-of-binary-tree/
//
