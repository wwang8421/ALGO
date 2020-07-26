/* 
Consider a binary tree in which each node contains a binary digit. A root to left path can be associated with a binary number

Design an algorithm to compute the sum of the binary numbers represented by the root to leaf paths
*/

/* 
PSEUDO

traverse the tree using dfs
curr node should be 10 + previous node.
if !curr return 0;
if you reach a leaf then add it currentsum to the global sum
when you traverse all possible paths then return the global sum
*/

// EX:
/* Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026. */

const sumRootToLeaf = (root) => {
  let globalSum = 0;
  if (!root) return globalSum;

  const helper = (curr, currSum) => {
    if (!curr) return 0;

    currSum = currSum * 10 + curr.val;

    if (!curr.left && !curr.right) {
      globalSum += currSum;
      return;
    }

    return helper(curr.left, currSum) + helper(curr.right, currSum);
  };
  helper(root, 0);

  return globalSum;
};

// LINK: https://leetcode.com/problems/sum-root-to-leaf-numbers/
