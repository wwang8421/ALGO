/* 
A binary tree is symmetric if you can draw a vertical line throught the root and then the left
subtree is the mirror image of the right subtree.

Write a program that checks whether a binary tree is symmetric
 */

/* 
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
*/

/* 
PSUEDO

input: check is root is falsy, if it is then return true;

recurse down each level, check if they are mirrored: if there is a right and left, then check is right === left
if there is a right but no left return false
if there is a left but no right return false;
if we reach a level with no more nodes then return true;
*/

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
 * @return {boolean}
 */

//  LINK: https://leetcode.com/problems/symmetric-tree/
