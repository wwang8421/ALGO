const can_construct = function (originalSeq, sequences) {
  if (originalSeq.length <= 0) return false;
  let results = [];
  const inDegree = {};
  const graph = {};

  sequences.forEach((seq) => {
    for (let i = 0; i < seq.length; i++) {
      inDegree[seq[i]] = 0;
      graph[seq[i]] = [];
    }
  });

  if (Object.keys(inDegree).length !== originalSeq.length) return false;

  sequences.forEach((seq) => {
    for (let i = 1; i < seq.length; i++) {
      let parent = seq[i - 1];
      let child = seq[i];

      graph[parent].push(child);
      inDegree[child]++;
    }
  });

  let queue = [];
  Object.keys(inDegree).forEach(
    (node) => inDegree[node] === 0 && queue.push(Number(node))
  );

  while (queue.length) {
    let levelLength = queue.length;
    if (levelLength !== 1) return false;
    if (queue[0] !== originalSeq[results.length]) return false;

    for (let i = 0; i < levelLength; i++) {
      const curr = queue.shift();
      results.push(curr);

      if (graph[curr]) {
        graph[curr].forEach((node) => {
          inDegree[node]--;
          if (inDegree[node] === 0) {
            queue.push(node);
          }
        });
      }
    }
  }

  return results.length === originalSeq.length;
};

console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ]
  )}`
);
console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [2, 4],
    ]
  )}`
);
console.log(
  `Can construct: ${can_construct(
    [3, 1, 4, 2, 5],
    [
      [3, 1, 5],
      [1, 4, 2, 5],
    ]
  )}`
);
