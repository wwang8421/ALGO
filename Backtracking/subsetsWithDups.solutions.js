/* 
Given a set of numbers that might contain duplicates, find all of its distinct subsets.
 */

//  LINK: https://leetcode.com/problems/subsets-ii/

const find_subsets = function (nums) {
  let subsets = [];
  nums.sort((a, b) => a - b);

  const helper = (curr = [], index = 0) => {
    subsets.push(curr);

    for (let i = index; i < nums.length; i++) {
      if (index !== i && nums[i] === nums[i - 1]) continue;
      helper([...curr, nums[i]], i + 1);
    }
  };
  helper();
  return subsets;
};

console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`);
