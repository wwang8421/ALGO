/* /* 
Design an algorithm and write code to find the first common ancestor
of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
necessarily a binary search tree. 
*/

// on each level, we want to add the permutation of the particular level

// const BSTSequences = (root) => {
//   let results = [];
//   let queue = [];

//   queue.push(root);

//   const helper = (que, currArr = []) => {
//     // while(que.length) {
//     //   let currNode = que[0];
//     //   currArr.push(currNode);
//     //   let copyQueue = [];
//     //   // let copyQueue = [...que];
//     //   // copyQueue.shift();

//     //   if(currNode.left) copyQueue.push(currNode.left.val);
//     //   if(currNode.right) copyQueue.push(currNode.right.val);

//     //   let levelLength = copyQueue.length;
//     //   console.log(copyQueue);

//     //   // loop thru curr queuelength; get all the permuations for it
//     //   for(let i = 0; i < levelLength; i++){
//     //     helper(copyQueue, [...currArr]);
//     //   }
//     // }
//     results.push(currArr);
//   }
//   helper(queue);

//   return results;
// }

// export function BSTsequences(node) {
//   if (!node) return [];
//   if (!node.left && !node.right) return [[node.val]];

//   // In-Order Traversal to create sequence lists
//   const left = BSTsequences(node.left);
//   const right = BSTsequences(node.right);

//   return weaveArrayPerms(node.val, left, right);
// }

// function weaveArrayPerms(nodeValue, leftSequence, rightSequence) {
//   const permsResult = [];

//   if (leftSequence[0] && rightSequence[0]) {
//     for (const leftSeq of leftSequence) {
//       for (const rightSeq of rightSequence) {
//         const weaved = weave(leftSeq, rightSeq);
//         // const weaved = weave([...leftSeq, ...rightSeq])
//         // console.log('weaved', weaved);
//         for (const perm of weaved) {
//           permsResult.push([nodeValue, ...perm]);
//         }
//       }
//     }
//   }
//   else {
//     for (const perm of [...leftSequence, ...rightSequence]) {
//       permsResult.push([nodeValue, ...perm]);
//     }
//   }

//   return permsResult;
// }

// // find the permuation of the children
// // function weave(combinedSeq, currArr = [], sequences = []) {
// //   if(combinedSeq.length === 0){
// //     sequences.push(currArr);
// //     return;
// //   }

// //   for(let i = 0; i < combinedSeq.length; i++){
// //     weave([...combinedSeq.slice(0, i), ...combinedSeq.slice(i + 1)], [...currArr, combinedSeq[i]], sequences);
// //   }

// //   return sequences;
// // }

// function weave(leftSeq, rightSeq, prefix = [], sequences = []) {
//   if (leftSeq.length && rightSeq.length) {
//     // console.log(leftSeq)
//     // Shift leftSeq head to prefix. Weave, and put back to leftSeq.
//     prefix.push(leftSeq.shift());
//     weave(leftSeq, rightSeq, prefix, sequences);
//     leftSeq.unshift(prefix.pop());

//     // Shift rightSeq head to prefix. Weave, and put back to rightSeq.
//     prefix.push(rightSeq.shift());
//     weave(leftSeq, rightSeq, prefix, sequences);
//     rightSeq.unshift(prefix.pop());
//   }
//   else {
//     sequences.push([...prefix, ...leftSeq, ...rightSeq]);
//   }
//   // let combined = [...leftSeq, ...rightSeq]
//   // console.log(sequences);
//   return sequences;
// }

// const checkEqual = (node1, node2) => {
//   if(!node2 || !node1) return !node1 && !node2;

//   if(node1.val !== node2.val) return false;

//   return checkEqual(node1.left, node2.left) && checkEqual(node1.right, node2.right);
// }

// const isSubtree = (node1, node2) => {
//   if(!node1) return false;

//   if(node1.val === node2.val && checkEqual(node1, node2)) return true;
//   return isSubtree(node1.left, node2) || isSubtree(node1.right, node2);
// }

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class BinaryTree {
  constructor(val) {
    this.root = new TreeNode(val) || null;
    this.array = [];
  }

  insert = (node) => {
    let newNode = new TreeNode(node);
    // console.log('newNode', newNode);
    if (!this.root) {
      this.root = newNode;
      console.log("this.val", this.val);
      // this.array.push(newNode.val);
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  insertNode = (root, newNode) => {
    // console.log('root', root);
    if (newNode.val >= root.val) {
      if (!root.right) {
        root.right = newNode;
        // this.array.push(newNode.val);
      } else {
        this.insertNode(root.right, newNode);
      }
    } else {
      if (!root.left) {
        root.left = newNode;
        // this.array.push(newNode.val);
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  };

  find = (node, root = this.root) => {
    if (!root) return null;

    if (node === root.val) return root;

    if (root.val > node) {
      return this.find(node, root.left);
    } else {
      return this.find(node, root.right);
    }

    // let left = this.find(node, root.left);
    // if(left) return left;
    // let right = this.find(node, root.right);
    // if(right) return right;
    // return null;
  };

  // delete = (root, node) => {

  // }

  getRandom = () => {
    return this.array[Math.floor(Math.random() * this.array.length)];
  };
}

// let node = new BinaryTree(10);
// node.insert(4);
// node.insert(3);
// node.insert(5);
// node.insert(11);
// node.insert(12);
// console.log(node.find(12));

// console.log(node);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const findAllNodes = (root, node, distance) => {
  let results = [];
  if (!root) return results;
  let found = false;

  const helper = (curr, count = 0) => {
    if (!curr) return -1;

    // if(node === curr.val) {
    //   // found = true;
    //   // return curr;
    //   return 0;
    // }

    // let left = helper(curr.left, count);
    // let right = helper(curr.right, count);

    // if()
  };
  helper(root);

  return results;
};

// let node = new TreeNode(20);
// node.left = new TreeNode(8);
// node.left.left = new TreeNode(4);
// node.left.right = new TreeNode(12);
// node.left.right.left = new TreeNode(10);
// node.left.right.right = new TreeNode(14);
// node.right = new TreeNode(22);
// // node.right.right = new TreeNode(12);

// console.log(findAllNodes(node, 8, 2))

// let node = new TreeNode(10);
// node.left = new TreeNode(4);
// node.left.left = new TreeNode(3);
// node.left.right = new TreeNode(5);
// node.right = new TreeNode(11);
// node.right.right = new TreeNode(12);

// var sumEvenGrandparent = function (root) {
//   if (!root) return 0;
//   let results = 0;

//   let queue = [];
//   queue.push({ root, grandparent: root.val, parent: root.val, depth: 1 });
//   depth = 1

//   while (queue.length) {
//     let levelLength = queue.length;
//     // console.log('queue', queue);
//     for (let i = 0; i < levelLength; i++) {
//       const curr = queue.shift();
//       // console.log('depth', depth);
//       // console.log('curr', curr.depth);

//       if (depth <= 2) {
//         if (curr.root.left)
//           queue.push({ root: curr.root.left, grandparent: curr.parent, parent: curr.root.val });
//         if (curr.root.right)
//           queue.push({ root: curr.root.right, grandparent: curr.parent, parent: curr.root.val });
//       } else {
//         if (curr.grandparent % 2 === 0) {
//           console.log('curr', curr.root.val);
//           results += curr.root.val;
//         }
//         if (curr.root.left)
//           queue.push({
//             root: curr.root.left,
//             grandparent: curr.parent,
//             parent: curr.root.val,
//           });
//         if (curr.root.right)
//           queue.push({
//             root: curr.root.right,
//             grandparent: curr.parent,
//             parent: curr.root.val,
//           });
//       }
//     }
//     depth++;
//   }

//   return results;
// };


// let node = new TreeNode(6);
// node.left = new TreeNode(7);
// node.left.left = new TreeNode(2);
// node.left.left.left = new TreeNode(9);
// node.left.right = new TreeNode(7);
// node.left.right.left = new TreeNode(1);
// node.left.right.right = new TreeNode(4);
// node.right = new TreeNode(8);
// node.right.left = new TreeNode(1);
// node.right.right = new TreeNode(3);
// node.right.right.right = new TreeNode(5);

let node = new TreeNode(2);
node.left = new TreeNode(1);
node.right = new TreeNode(3);
node.right.left = new TreeNode(4);
node.right.right = new TreeNode(5);


// const helper = () => {
//   for(const child in queue){

//   }
// }

const print_orders = function(tasks, prerequisites) {
  let results = [];
  let inComing = Array(tasks).fill(0);
  let graph = new Map();
  let queue = [];

  for(const [u, v] of prerequisites){
    if(graph.has(u)){
      graph.get(u).push(v);
    } else {
      graph.set(u, [v]);
    }
    inComing[v]++;
  };

  inComing.forEach((vertices, index) => vertices === 0 && queue.push(index));

  const helper = (currQueue, currArr = []) => {
    console.log('currArr', currArr);
    if(currArr.length === tasks) {
      results.push(currArr);
      return;
    }
    if(currQueue.length){
      for(let i = 0; i < currQueue.length; i++){
        const curr = currQueue[i];

        let newQueue = [...currQueue.slice(0,i), ...currQueue.slice(i+1)]

        if(graph.has(curr)){
          graph.get(curr).forEach(child => {
            inComing[child]--;
            if(inComing[child] === 0){
              newQueue.push(child);
            }
          })
        }

        helper(newQueue, [...currArr, curr]);

        if(graph.has(curr)){
          graph.get(curr).forEach(child => inComing[child]++);
        };

      }
    }
  }
  helper(queue);

  return results;
};


// console.log("Task Orders: ", print_orders(3, [[0, 1], [1, 2]]))

// console.log("Task Orders: ", print_orders(4, [[3, 2], [3, 0], [2, 0], [2, 1]]))

// console.log("Task Orders: ", print_orders(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]))

