/* 
You are given a binary tree where each node is labeled with an integer. The path weight of a node in such a tree is the sum of the integers on the unique path from the root to that node.
Write a program which takes as input an integer and a binary tree with integer node weights, and checks if theer exists a leaf whose path weight equal the given integer.
*/

/* 
PSEUDO:
if the root reaches a leaf without the expected sum return false;
subtract the current node value from the total sum;
traverse thru left and right subtrees;
*/

const hasPathSum = (root, sum) => {
  if (!root) return false;

  const helper = (curr, s) => {
    if (!curr) return false;

    if (!curr.left && !curr.right && s === curr.val) return true;

    return helper(curr.left, s - curr.val) || helper(curr.right, s - curr.val);
  };

  return helper(root, sum);
};

// LINK: https://leetcode.com/problems/path-sum/
