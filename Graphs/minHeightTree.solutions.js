const find_trees = function (nodes, edges) {
  if (nodes <= 0) return [];
  if (nodes === 1) return [0];

  let inComing = Array(nodes).fill(0);
  let graph = {};

  edges.forEach((edge) => {
    let edge1 = edge[0];
    let edge2 = edge[1];

    if (graph[edge1]) {
      graph[edge1].push(edge2);
    } else {
      graph[edge1] = [edge2];
    }

    if (graph[edge2]) {
      graph[edge2].push(edge1);
    } else {
      graph[edge2] = [edge1];
    }

    inComing[edge1]++;
    inComing[edge2]++;
  });

  let queue = [];

  inComing.forEach((node, index) => node === 1 && queue.push(index));

  // Suppose we don't know n, nor do we have random access of the nodes. We have to traversal.
  // It is very easy to get the idea of two pointers. One from each end and move at the same speed. When they meet or they are one step away, (depends on the parity of n), we have the roots we want.
  // This gives us a lot of useful ideas to crack our real problem.
  // For a tree we can do some thing similar. We start from every end, by end we mean vertex of degree 1 (aka leaves).
  // We let the pointers move the same speed. When two pointers meet, we keep only one of them, until the last two pointers meet or one step away we then find the roots.
  // It is easy to see that the last two pointers are from the two ends of the longest path in the graph.
  // The actual implementation is similar to the BFS topological sort. Remove the leaves, update the degrees of inner vertexes. Then remove the new leaves. Doing so level by level until there are 2 or 1 nodes left. What's left is our answer!

  let nodeLength = nodes;
  while (nodeLength > 2) {
    let levelLength = queue.length;
    nodeLength -= levelLength;
    for (let i = 0; i < levelLength; i++) {
      const curr = queue.shift();

      graph[curr].forEach((node) => {
        inComing[node]--;
        if (inComing[node] === 1) {
          queue.push(node);
        }
      });
    }
  }

  return queue;
};

console.log(
  `Roots of MHTs: ${find_trees(5, [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
  ])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
    [0, 1],
    [0, 2],
    [2, 3],
  ])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
    [1, 2],
    [1, 3],
  ])}`
);
