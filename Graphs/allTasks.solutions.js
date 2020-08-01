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

