function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let node = new TreeNode(10);
node.left = new TreeNode(5);
node.left.left = new TreeNode(3);
node.left.right = new TreeNode(7);
node.right = new TreeNode(15);
node.right.right = new TreeNode(18);
