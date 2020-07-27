/* 
Implement a function to check if a binary tree is a binsary search tree.
*/

/* 
PSEUDO:

left -> curr -> right

*/

const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if(!root) return true;

  if(root.val <= min || root.val >= max) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// LINK:https://leetcode.com/problems/validate-binary-search-tree/submissions/