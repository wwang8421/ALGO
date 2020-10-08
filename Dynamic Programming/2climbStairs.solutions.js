/* 
Total num of steps to get to n. You can take 1 or 2 steps
*/

/* 
1. Define Objective Function
f(n) = is the number of steps to the nth stair

2. Identify base case
f(1) = 1
f(0) = 1

3. Recurrence Relationship
f(n) = f(n-1) + f(n-2);
4. What the Order of Computation?
Bottom up, rely on values from previous subproblems
5. Where to look for the answer?
f(n);
*/
 
const climbStairs = (n) => {
  // let dp = Array(n + 1).fill(0);
  // let dp = [];

  // dp[0] = 1;
  // dp[1] = 1;
  let a = 1;
  let b = 1;

  for(let i = 2; i <= n; i++){
    c = a + b;
    a = b;
    b = c;
    // dp[i] = dp[i-1] + dp[i-2];
  }
  return c;
}

// console.log(climbStairs(5));
/* 
f(n) = f(i - 1) ... + f(i-k);
*/

// const climbStairsK = (n, k) => {
//   let dp = Array(n+1).fill(0);

//   dp[0] = 1;
//   dp[1] = 1;

//   for(let i = 2; i <= n; i++){
//     for(let j = 1; j <= Math.min(k, i); j++){
//       dp[i] += dp[i-j];
//     }
//   }

//   console.log('n',dp);

//   return dp[n];
// }

// console.log(climbStairsK(5,2));

// cannot step on red steps

// const climbStairsRed = (n, k, red) => {
//   let dp = Array(n+1).fill(0);
//   if(red[0]) return 0;
//   dp[0] = 1;

//   for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= Math.min(k, i); j++){
//       if(red[i]){
//         dp[i] = 0;
//         break;
//       }
//       dp[i] += dp[i-j]; 
//     }
//   }

//   return dp[n];
// }

// console.log(climbStairsRed(7,3,[false, true, false, true, true, false, false, false]));


/* 
Find minimum price to get to nth step
*/

// const minPriceStairs = (n, k, price) => {
//   let dp = Array(n + 1).fill(0);

//   for(let i = 1; i <=n; i++){
//     let min = Infinity;
//     for(let j = 1; j <= Math.min(k,i); j++){
//       min = Math.min(min, dp[i-j]);
//       dp[i] = price[i-1] + min;
//     }
//   }

//   console.log('dp', dp);

//   return dp[n];
// };

// // 2 

// console.log(minPriceStairs(3,2,[3,2,4]));