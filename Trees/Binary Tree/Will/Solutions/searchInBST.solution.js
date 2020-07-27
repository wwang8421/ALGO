// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

// For example, 

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3

// And the value to search: 2
// You should return this subtree:

//       2     
//      / \   
//     1   3
// In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

// Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

// LINK: https://leetcode.com/problems/search-in-a-binary-search-tree/

var searchBST = function(root, val) {
  if(!root) return null;

  const helper = (node) => {
    if(!node) return null;
    if(node.val === val) return node;
    return val < root.val ? searchBST(root.left) : searchBST(root.right);
  }

  return helper(root);
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


let node = new TreeNode(4);
node.left = new TreeNode(2);
node.right = new TreeNode(7);
node.left.left = new TreeNode(1);
node.left.right = new TreeNode(3);
// node.right.right = new TreeNode(18);

console.log(searchBST(node, 5));


