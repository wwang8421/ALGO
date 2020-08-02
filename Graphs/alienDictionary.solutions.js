const find_order = function(words) {
  let dict = '';
  let inComing = new Map();
  let graph = new Map();

  for(const word of words){
    for(let i = 0; i < word.length; i++){
      if(!inComing.has(word[i])){
        inComing.set(word[i], 0);
        graph.set(word[i], []);
      }
    }
  }

  for(let i = 0; i < words.length - 1; i++){
    let word1 = words[i];
    let word2 = words[i+1];
    for(let j = 0; j < Math.min(word1.length, word2.length); j++){
      let parent = word1[j];
      let child = word2[j];

      if(parent !== child){
        graph.get(parent).push(child);
        inComing.set(child, inComing.get(child) + 1);
        break;
      }
    }
  }

  let queue = [];

  [...inComing.keys()].forEach((item, index) => index === 0 && queue.push(item));

  while(queue.length){
    let levelLength = queue.length;
    for(let i = 0; i < levelLength; i++){
      const curr = queue.shift();
      dict += curr;

      if(graph.has(curr)){
        for(let child of graph.get(curr)){
          inComing.set(child, inComing.get(child) - 1);
          if(inComing.get(child) === 0){
            queue.push(child);
          }
        }
      }

    }
  }

  return dict;
};


console.log(`Character order: ${find_order(["ba", "bc", "ac", "cab"])}`)
console.log(`Character order: ${find_order(["cab", "aaa", "aab"])}`)
console.log(`Character order: ${find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])}`)
