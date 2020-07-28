/* 
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
*/

const find_path = function (root, sequence) {
  if (!root) return false;

  const helper = (curr, index = 0) => {
    if (!curr) return false;
    if (sequence[index] !== curr.value) return false;

    if (index === sequence.length - 1 && !curr.left && !curr.right) {
      return true;
    }

    return helper(curr.left, index + 1) || helper(curr.right, index + 1);
  };
  return helper(root);
};


// LINK: https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn