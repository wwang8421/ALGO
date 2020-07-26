//PROB
/*
A binary tree is said to be height balanced if for each node in the tree, the difference, in the height
of its left and right rubtree is at most one. A perfect binary tree is height balanced
as as is a complete binary tree. A height-balanced tree does not have ot be perfect or compleete

Write a program that take as input the root of a binary tree and checks whether
the tree is height balanced.
*/

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

/* PSUEDO

check if the input is valid, is no root, then return true
we need to see that the left subtree and right subtree is at most 1 in height difference
We will be using DFS. if the node is invalid we want to return 0
else we want to calculate the height of the left/right subtree

BASE CASE: if they are more than 1 apart return false, else return true
*/

const isBalanced = (root) => {
  if (!root) return true;

  const helper = (curr) => {
    if (!curr) return 0;

    let left = helper(curr.left);
    let right = helper(curr.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right);
  };

  return helper(root) !== -1;
};

// LINK: https://leetcode.com/problems/balanced-binary-tree/description/Given
//
