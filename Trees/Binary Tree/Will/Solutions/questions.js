var leafSimilar = function(root1, root2) {
  if(!root1 && !root2) return true;
  if(!root1 || !root2) return false;
  const root1Leaves = [];
  
  const helper = (curr) => {
      if(!curr) return;
      
      if(!curr.left && !curr.right) {
          root1Leaves.push(curr.val);
          return;
      }
      
      helper(curr.left);
      helper(curr.right);
  }
  helper(root1);
  
      const root2Helper = (curr) => {
      if(!curr) return true;
      
      if(!curr.left && !curr.right){
          let leaf = root1Leaves.shift();
          if(leaf !== curr.val) return false;
      }
      
      return root2Helper(curr.left) && root2Helper(curr.right);
  }
  return root2Helper(root2);

  //how do you return the index up a level??
  
//     const root2Helper = (curr, index = 0) => {
//         if(!curr) return true;
      
//         if(!curr.left && !curr.right){
//             if(root1Leaves[index] !== curr.val) return false;
//             index++
//         }
      
//         return root2Helper(curr.left, index) && root2Helper(curr.right, index);
//     }
//     return root2Helper(root2);
};



// why is newRoot null after i set it in the construct BST

const constructBST = (root, copy, node) => {
  console.log('node', node);
  if(!root){
    // console.log('in here')
      copy = root = new TreeNode(node);
      console.log('root', root)
      // console.log('root', copy)
      // return;
  } else {
      if(root.val >= node){
          if(!root.left){
              root.left = new TreeNode(node);
          } else {
              constructBST(root.left, node)
          }
      } else {
          if(!root.right){
              root.right = new TreeNode(node);
          } else {
              constructBST(root.right, node)
          }
      }
  }
}

var trimBST = function(root, L, R) {
if(!root) return null;
let newRoot = null;
let copynewRoot = null;
let newNodes = [];

const helper = (curr) => {
  if(!curr) return;
  
  if(L <= curr.val && curr.val <= R) {
      newNodes.push(curr.val);
  }
  helper(curr.left);
  helper(curr.right);
}
helper(root);
console.log(newNodes);

for(const node of newNodes){
  constructBST(newRoot, copynewRoot, node);
  // console.log('newRoot', newRoot)
}
// console.log('newRoot', newRoot);
return copynewRoot;
};