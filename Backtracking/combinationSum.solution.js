var combinationSum = function (candidates, target) {
  let results = [];

  const helper = (index = 0, currArr = [], currSum = 0) => {
    if (currSum > target) return;
    if (currSum === target) {
      results.push(currArr);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      helper(i, [...currArr, candidates[i]], currSum + candidates[i]);
    }
  };
  helper();

  return results;
};
