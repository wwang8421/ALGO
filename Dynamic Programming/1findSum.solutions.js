/* 
Find the sum of the values of all numbers 1 - n;
*/

//Top Down

// const findSum = (n, memo = {}) => {
//   if(memo[n]) return n;
//   if(n < 2) return n;

//   memo[n] = findSum(n-1) + n;
//   return memo[n];
// }

// BottomUp  O(1) space

const findSum = (n) => {
  let dp = [0];

  for (let i = 1; i <= n; i++) {
    dp[0] = dp[0] + i;
  }

  return dp[0];
};

console.log(findSum(4));
