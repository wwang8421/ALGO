var permuteUnique = function (nums) {
  if (nums.length === 0) return [];
  let results = [];
  nums.sort((a, b) => a - b);

  const helper = (remaining, curr = []) => {
    if (remaining.length === 0) {
      results.push(curr);
      return;
    }

    let visited = new Set();

    for (let i = 0; i < remaining.length; i++) {
      if (visited.has(remaining[i])) continue;
      helper(
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        [...curr, remaining[i]]
      );
      visited.add(remaining[i]);
    }
  };
  helper(nums);

  return results;
};
