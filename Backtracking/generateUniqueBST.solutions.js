const find_unique_trees = function (n) {

  const helper = (start, end) => {
    if(start > end) return [null];
    let results = [];

    for (let i = start; i <= end; i++) {
      const left = helper(start, i - 1);
      const right = helper(i + 1, end);

      for(let currLeft of left){
        for(let currRight of right){
          let root = new TreeNode(i, currLeft, currRight);
          // console.log('root', root);
          results.push(root);
        }
      }
    }
    return results;
  };
  return helper(1, n);
};