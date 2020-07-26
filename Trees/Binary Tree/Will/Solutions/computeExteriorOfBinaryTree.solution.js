/* 
The exterior of a binary tree is the following sequence of nodes: the nodes from the root to the left most node, 
followed by the leaves in left to right order, followed by the ndoes from teh right most node to the root

Write a program that computes the exterior of a binary tree
*/

// LINK: https://www.cnblogs.com/grandyang/p/6833459.html

/* 
PSEUDO:

*/

const traverseOuter = (node, results) => {
  if (node) {
    if (node.left) {
      results.push(node.val);
      traverseOuter(node.left, results);
    } else if (node.right) {
      results.push(node.val);
      traverseOuter(node.right, results);
    }
  }
};

const traverseRightOuter = (node, results) => {
  if (node) {
    if (node.right) {
      traverseRightOuter(node.right, results);
      results.push(node.val);
    } else if (node.left) {
      traverseRightOuter(node.left, results);
      results.push(node.val);
    }
  }
};

const traverseBottom = (node, results) => {
  if (node) {
    traverseBottom(node.left);
    if (!node.left && !node.right) {
      results.push(node.val);
    }
    traverseBottom(node.right);
  }
};

const exteriorBinaryTree = (root) => {
  let results = [];
  if (!root) return results;

  results.push(curr.val);

  traverseOuter(curr.left, results);
  traverseBottom(curr.left, results);
  traverseBottom(curr.right, results);
  traverseRightOuter(curr.right, results);

  return results;
};
