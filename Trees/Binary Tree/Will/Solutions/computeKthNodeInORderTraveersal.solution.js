/* 
Compute the kth node in an inorder traversal in a bst
*/

/* 
PSEUDO:

*/

//leetcode.com/problems/kth-smallest-element-in-a-bst/

https: var kthSmallest = function (root, k) {
  if (!root) return null;

  const helper = (curr) => {
    if (!curr) return null;

    let left = helper(curr.left);
    if (left) return left;
    k--;
    if (k === 0) return curr.val;
    return helper(curr.right);
  };
  return helper(root);
};
