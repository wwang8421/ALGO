var rightSideView = function (root) {
  if (!root) return [];
  let results = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();
      if (i === levelLength - 1) results.push(curr.val);
      // if (i === 0) results.push(curr.val); // print left side view

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  return results;
};
