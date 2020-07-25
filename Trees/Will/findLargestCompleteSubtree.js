// Find the largest Complete Subtree in a given Binary Tree
// A Binary tree is Complete Binary Tree if all levels are completely filled except
// possibly the last level and the last level has all keys as left as possible.

// EX:
// Input:
//               1
//            /     \
//           2        3
//         /   \     /  \
//        4      5   6   7
//      /  \    /
//     8   9   10
// Output:
// Size : 10
// Inorder Traversal : 8 4 9 2 10 5 1 6 3 7
// The given tree a complete binary tree.

// Input:
//          50
//       /      \
//    30         60
//   /   \      /    \
//  5    20   45      70
//           /
//          10
// Output:
// Size : 4
// Inorder Traversal : 10 45 60 70

/*
PSUEDO:

1. input: check if no root, then return 0;
2. check the height of the left/right subtree. if right > left then it is invalid
3. take the subtree that is largest and preform the same check in step 2; if it is valid, 
the find the length of the subtree

*/

const findLargestCompleteSubtree = (root) => {
  if (!root) return 0;

  const getHeight = (curr, isValid = true) => {
    if (!curr) return 0;

    let left = getHeight(curr.left);
    let right = getHeight(curr.right);

    // if()

    return 1 + Math.max(left, right);
  };
  getHeight(root);
};

//

// LINK: https://www.geeksforgeeks.org/find-the-largest-complete-subtree-in-a-given-binary-tree/
