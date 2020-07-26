/* 
Given two nodes in a binary tree, design an algorithm that computes their LCA. Assume that each node has a parent pointer.
*/

/* 
PSEUDO
we can find the depth of node1, node2.
if they are the same depth we can ascend them to the parent until they are both equal.
*/

const getDepth = (node) => {
  let count = 0;
  while (!node.parent) {
    count++;
    node = node.parent;
  }
};

const computeLCA = (root, node1, node2) => {
  let node1Depth = getDepth(node1);
  let node2Depth = getDepth(node2);

  while (node1Depth > node2Depth) {
    node1Depth--;
    node1 = node1.parent;
  }

  while (node2Depth > node1Depth) {
    node2Depth--;
    node2 = node2.parent;
  }

  while (node1.val !== node2.val) {
    node1 = node1.parent;
    node2 = node2.parent;
  }

  return node1;
};

// LINK: https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-tree-set-2-using-parent-pointer/
