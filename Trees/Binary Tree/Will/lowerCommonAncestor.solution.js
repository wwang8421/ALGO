/* 
Any two nodes in a binary tree have a common ancestor namely the roor.
The LCA of any two nodes in a binary tree is the node furthest from the root that is an ancestor of both nodes

Desing an algorithm for computing the LCA of two nodes in a binary tree in which nodes no not have a parent field
 */


 /* 
 PSEUDO:
 if p and q are in diff subtrees, then the LCA is the parent root,

 if p and q are in same subtree, is is the root of the subtree.
 if p is root and q is in its subtree, then return p, visa versa with q.

 recurse thru the left and right subtree, returning an object.

If the current node is NULL then we will return NULL since we have reached the end of the tree.
If the current node matches nodes a or b, we will return the current node.
If the current node has node a in its left subtree and b in its right subtree or vice versa then the current node will be the lowest common ancestor.
If the current node has nodes a and b exclusively in its left subtree or right subtree, then we will return the left or right subtree accordingly.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  if(!root) return null;

  const helper = (curr, node1, node2) => {
    if(!curr){
      return null;
    }

    if(curr.val === node1.val || curr.val === node2.val){
      return curr;
    }

    let left = helper(curr.left, node1, node2);
    let right = helper(curr.right, node1, node2);

    if(left !== null && right !== null){
      return curr;
    } else if(left !== null){
      return left;
    } else if(right !== null){
      return right;
    }

    return null;
  }
  return helper(root, p, q);
};


// this is for binary search tree, the epi question is for any binary tree
// LINK: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// var lowestCommonAncestor = function(root, p, q) {
//   if(p.val < root.val && q.val < root.val){
//       return lowestCommonAncestor(root.left, p, q);
//   } else if(p.val > root.val && q.val > root.val){
//       return lowestCommonAncestor(root.right, p, q);
//   } else {
//       return root;
//   }
// };