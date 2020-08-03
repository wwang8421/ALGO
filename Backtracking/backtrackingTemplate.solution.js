// 78. Subsets (Easy)
var subsets = function (nums) {
  const results = [];

  const helper = (curr = [], index = 0) => {
    results.push(curr);

    for (let i = index; i < nums.length; i++) {
      // set i to index because you don't want to use old numbers
      helper([...curr, nums[i]], i + 1);
    }
  };
  helper();
  return results;
};

// 90. Subsets II (Medium)
var subsetsWithDup = function (nums) {
  let results = [];
  nums.sort((a, b) => a - b);

  const helper = (curr = [], index = 0) => {
    results.push(curr);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue; // after you backtrack the i will increase but your index will stay the same, thats why you check if i > index.
      helper([...curr, nums[i]], i + 1);
    }
  };
  helper();
  return results;
};

// 46. Permutations (Medium)
var permute = function (nums) {
  let results = [];

  const helper = (remaining, curr = []) => {
    if (remaining.length === 0) {
      results.push(curr);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      helper(
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        [...curr, remaining[i]]
      );
    }
  };
  helper(nums);

  return results;
};

// 47. Permutations II (Medium)
var permuteUnique = function (nums) {
  let results = [];
  nums.sort((a, b) => a - b);

  const helper = (remaining, curr = []) => {
    if (remaining.length === 0) {
      results.push(curr);
      return;
    }

    const set = new Set();

    for (let i = 0; i < remaining.length; i++) {
      if (set.has(remaining[i])) continue;
      helper(
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        [...curr, remaining[i]]
      );
      set.add(remaining[i]);
    }
  };
  helper(nums);
  return results;
};

// 39. Combination Sum (Medium)
var combinationSum = function (candidates, target) {
  let results = [];

  const helper = (sum = 0, curr = [], index = 0) => {
    if (sum > target) return;
    if (sum === target) {
      results.push(curr);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      helper(sum + candidates[i], [...curr, candidates[i]], i); // can reuse the same number, so thats why you don't do i + 1
    }
  };
  helper();

  return results;
};

// 40. Combinatin Sum II (Medium)
var combinationSum2 = function (candidates, target) {
  let results = [];
  candidates.sort((a, b) => a - b);

  const helper = (sum = 0, index = 0, curr = []) => {
    if (sum > target) return;
    if (target === sum) {
      results.push(curr);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      helper(sum + candidates[i], i + 1, [...curr, candidates[i]]);
    }
  };
  helper();
  return results;
};

// 216. Combination Sum III (Medium)
var combinationSum3 = function (k, n) {
  let results = [];

  const helper = (index = 1, curr = [], sum = 0) => {
    if (sum > n || curr.length > k) return;
    if (curr.length === k && sum === n) {
      results.push(curr);
      return;
    }

    for (let i = index; i <= 9; i++) {
      helper(i + 1, [...curr, i], sum + i);
    }
  };
  helper();

  return results;
};

// 77. Combinations (Medium)
var combine = function (n, k) {
  const results = [];

  const helper = (index = 1, curr = []) => {
    if (curr.length === k) {
      results.push(curr);
      return;
    }

    for (let i = index; i <= n; i++) {
      helper(i + 1, [...curr, i]);
    }
  };
  helper();
  return results;
};
