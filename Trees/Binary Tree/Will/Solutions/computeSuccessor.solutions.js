/* 
The successor of a node in a binary tree is the node that appears immediately after the given node in an in order traversal.

Design an algorithm that compuates the successor of a node in a binary tree.
*/

/* 
PSEDO:
if the !root return null;
do an in order traversal from the root node to find the passed in node;

if the node found then check if theres a node.right, if there is then return that node;
if not then you want to find the next node;
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const computeSuccessor = (root, node) => {
  if (!root) return null;
  let found = false;

  const dfs = (curr) => {
    if (!curr) return null;

    const left = dfs(curr.left);
    if (left) return left;
    if (found) {
      return curr.val;
    }
    if (node === curr.val) {
      found = true;
    }
    const right = dfs(curr.right);
    if (right) return right;
  };
  return dfs(root);
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(3);

// LINK: https://kennyzhuang.gitbooks.io/leetcode-lock/content/285_inordersuccessor_in_bst.html

computeSuccessor(tree, 3);
