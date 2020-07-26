/*  Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]*/

/* 
PSEUDO:
have a results arr;
have a curr arr and push into nodes into arr;
if its a leaf node and curr.val === s then push curr arr to the result;
when you are done traversing then return the result;
*/

var pathSum = function (root, sum) {
  let results = [];
  if (!root) return results;

  const dfs = (curr, s, currArr = []) => {
    if (!curr) return;

    if (curr.val === s && !curr.left && !curr.right) {
      currArr.push(curr.val);
      results.push(currArr);
      return;
    }

    dfs(curr.left, s - curr.val, [...currArr, curr.val]);
    dfs(curr.right, s - curr.val, [...currArr, curr.val]);
  };
  dfs(root, sum);

  return results;
};

// Link:  https://leetcode.com/problems/path-sum-ii/
