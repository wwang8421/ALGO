/* 
Compute the kth node in an inorder traversal in a bast
*/

/* 
PSEUDO:

*/

var kthSmallest = function(root, k) {
  if(!root) return null;
  
  const helper = (curr) => {
      if(!curr) return null;
      
      let left = helper(curr.left);
      if(left) return left;
      k--
      if(k === 0) return curr.val;
      return helper(curr.right);
  }
  return helper(root);
};