// Count substrings with exactly K distinct chars ⭐ [Intern]
// Battleship
// Max Of Min Altitudes ⭐⭐ [Intern]

// Min Cost to Connect All Nodes (a.k.a. Min Cost to Add New Roads)
// Min Cost to Repair Edges (MST)

// Critical Connections ⭐ [New Grad]
// Critical Routers ⭐⭐ [New Grad | Experienced]


// RegEx
// [^a-z0-9]
// /\W/g    a-z, A-Z, 0-9, including the _
// \W means all non alphanumeric words including _
// \w_ means all alphanumeric words removing _ as well

//SORTING
// const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true });
// use localeCompare when comparing string, use 'en', {numeric:true} when comparing strings with numbers

// https://leetcode.com/discuss/interview-question/762546/
// const amazon = (codeList, groceryList) => {
//   const [list1, list2] = codeList;
//   let i = 0;
//   let list1Index = 0;
//   let list2Index = 0;

//   while(i < groceryList.length) {
//     while(i < groceryList.length && list1Index < list1.length && (groceryList[i] === list1[list1Index] || list1[list1Index] === 'anything')){
//       list1Index++;
//       i++;
//     };

//     if(list1Index !== list1.length) {
//       list1Index = 0;
//       i++;
//       continue;
//     };

//     while(i < groceryList.length && list2Index < list2.length && (groceryList[i] === list2[list2Index] || list2[list2Index] === 'anything')){
//         list2Index++;
//         i++;
//     };
//     if(list2Index === list2.length) return 1;
//     list2Index = 0;
//     i++;
//   };

//   return 0;
// };

// console.log(amazon([['apple', 'apple'], ['banana', 'anything', 'banana']], ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']));
// console.log(amazon([['apple', 'apple'], ['banana', 'anything', 'banana']], ['banana', 'orange', 'banana', 'apple', 'apple']));
// console.log(amazon([['apple', 'apple'], ['banana', 'anything', 'banana']], ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']));
// console.log(amazon([['apple', 'apple'], ['apple', 'apple', 'banana']], ['apple', 'apple', 'apple', 'banana']));

// const am = (codeList, groceryList) => {
//   let i = 0;
//   for(let k = 0; k < codeList.length; k++){
//     let secret = codeList[k];
//     let count = 0;
//     let j = 0;

//     while(j < secret.length && i < groceryList.length){
//       if(secret[j] === groceryList[i] || secret[j] === 'anything'){
//         j++;
//         count++;
//         i++;
//       } else {
//         j = 0;
//         count = 0;
//         i++;
//       };
//     };
//     if(count !== secret.length) return 0;
//   };

//   return 1;
// };

// console.log(am([['apple', 'apple'], ['banana', 'anything', 'banana']], ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']));
// console.log(am([['apple', 'apple'], ['banana', 'anything', 'banana']], ['banana', 'orange', 'banana', 'apple', 'apple']));
// console.log(am([['apple', 'apple'], ['banana', 'anything', 'banana']], ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']));
// console.log(am([['apple', 'apple'], ['apple', 'apple', 'banana']], ['apple', 'apple', 'apple', 'banana']));

// https://leetcode.com/discuss/interview-question/861432/

// const musicPairs = (arr) => {
//   let count = 0;
//   let map = new Map();

//   for(let i = 0; i < arr.length; i++){
//     let mod = arr[i] % 60;
//     let complement = 60 - mod === 60 ? 0 : 60 - mod;

//     if(map.has(complement)){
//       count += map.get(complement);
//     };

//     map.set(mod, map.get(mod) + 1 || 1);
//   };

//   return count;
// };

// console.log(musicPairs([37, 23, 60]));
// console.log(musicPairs([10, 50, 90, 30]));
// console.log(musicPairs([30, 20, 150, 100, 40]));
// console.log(musicPairs([60, 60, 60]));
// console.log(musicPairs([37, 23, 60]));

// https://leetcode.com/discuss/interview-question/370112

// Input: s = "abcabc", k = 3
// Output: ["abc", "bca", "cab"]
// Example 2:

// Input: s = "abacab", k = 3
// Output: ["bac", "cab"]
// Example 3:

// Input: s = "awaglknagawunagwkwagl", k = 4
// Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
// Explanation:
// Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl"
// "wagl" is repeated twice, but is included in the output once.

// const unique = (str, key) => {
//   const results = new Set();
//   const dict = {};
//   let start = 0;

//   for(let end = 0; end < str.length; end++){
//     let endChar = str[end];
//     dict[endChar] ? dict[endChar]++ : dict[endChar] = 1;

//     if(end - start + 1 === key){
//       let startChar = str[start];
//       if(Object.keys(dict).length === key){
//         results.add(str.slice(start, end + 1));
//       };

//       dict[startChar]--;
//       if(dict[startChar] === 0) delete dict[startChar];
//       start++;
//     };
//   };
//   return [...results];
// };
// console.log(unique("abcabc", 3))
// console.log(unique("abacab", 3))
// console.log(unique("awaglknagawunagwkwagl", 4))

// https://leetcode.com/problems/most-common-word/

// var mostCommonWord = function(paragraph, banned) {
//   let wordArr = paragraph.toLowerCase().split(/\W+/);
//   const bannedSet = new Set(banned);
//   const dict = {};

//   for(const word of wordArr){
//     if(!bannedSet.has(word)){
//         dict[word] ? dict[word]++ : dict[word] = 1;
//     };
//   };

//   let sorted = Object.keys(dict).sort((a,b) => dict[b] - dict[a]);
//   return sorted[0];
// };

// https://leetcode.com/problems/number-of-islands/
// var numIslands = function(grid) {
//   let count = 0;

//   const dfs = (r,c) => {
//       if(r < 0 || c < 0 || c >= grid[0].length || r >= grid.length) return;
//       if(grid[r][c] === "0") return;

//       grid[r][c] = "0";

//       dfs(r + 1, c);
//       dfs(r - 1, c);
//       dfs(r, c + 1);
//       dfs(r, c - 1);
//   }

//   for(let r = 0; r < grid.length; r++){
//       for(let c = 0; c < grid[0].length; c++){
//           if(grid[r][c] === '1'){
//               count++;
//               dfs(r,c);
//           };
//       };
//   };

//   return count;
// };

// https://leetcode.com/discuss/interview-question/356960

// Conditions:

// You will pick exactly 2 numbers.
// You cannot pick the same element twice.
// If you have muliple pairs, select the pair with the largest number.
// Example 1:

// Input: nums = [1, 10, 25, 35, 60], target = 90
// Output: [2, 3]
// Explanation:
// nums[2] + nums[3] = 25 + 35 = 60 = 90 - 30
// Example 2:

// Input: nums = [20, 50, 40, 25, 30, 10], target = 90
// Output: [1, 5]
// Explanation:
// nums[0] + nums[2] = 20 + 40 = 60 = 90 - 30
// nums[1] + nums[5] = 50 + 10 = 60 = 90 - 30
// You should return the pair with the largest number.

// const findTwo = (nums, target) => {
//   let adjustedTarget = target - 30;
//   let dict = {};
//   let max = -Infinity;
//   let results = [-1, -1];

//   for(let i = 0; i < nums.length; i++){
//     let complement = adjustedTarget - nums[i];
//     if(complement in dict){
//       if(complement > max || nums[i] > max){
//         results[0] = dict[complement];
//         results[1] = i;
//         max = Math.max(complement, nums[i]);
//       };
//     } else {
//       dict[nums[i]] = i;
//     };
//   };

//   if(results[0] === -1) return [];
//   return results;
// };

// console.log(findTwo([1, 10, 25, 35, 60], 90))
// console.log(findTwo([20, 50, 40, 25, 30, 10], 90))

// console.log([90, 85, 75, 60, 120,110,110, 150, 125].sort((a,b) => b-a))

// https://leetcode.com/discuss/interview-question/313719/Amazon-or-Online-Assessment-2019-or-Movies-on-Flight
// const moviesFlight = (arr, target) => {
//   const adjustedTarget = target - 30;
//   const results = [-1,-1];
//   const dict = {};
//   let max = -Infinity;
//   let maxSum = -Infinity;

//   for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(dict[arr[i]])) continue;
//     if(arr[i] in dict){
//       const val = dict[arr[i]];
//       dict[arr[i]] = [i, val];
//     } else {
//       dict[arr[i]] = i;
//     };
//   };
//   arr.sort((a,b) => a-b);

//   let left = 0;
//   let right = arr.length - 1;

//   while(left < right){
//     let currSum = arr[left] + arr[right];

//     if(currSum === adjustedTarget){
//       if(arr[left] === arr[right]){
//         return [dict[arr[left]][0], dict[arr[right]][1]]
//       } else {
//         return [dict[arr[left]], dict[arr[right]]];
//       };
//     };

//     if(currSum > adjustedTarget){
//       right--;
//     } else {
//       if(currSum >= maxSum){
//         if(arr[right] > max){
//           max = arr[right];
//         };
//         maxSum = currSum;
//         if(arr[left] === arr[right]){
//           results[0] = dict[arr[left]][0];
//           results[1] = dict[arr[right]][1];
//         } else {
//           results[0] = dict[arr[left]];
//           results[1] = dict[arr[right]];
//         }
//       };
//       left++;
//     }
//   };

//   if(results[0] === -1) return [];
//   return results;
// };

// console.log(moviesFlight([90, 85, 75, 60, 120, 150, 125], 250))
// console.log(moviesFlight([90, 85, 75, 60, 120, 150, 125], 50))
// console.log(moviesFlight([10, 50, 60], 120))
// console.log(moviesFlight([90, 85, 75, 60, 120,110,110, 150, 125], 250))

// https://leetcode.com/discuss/interview-question/808348/
// numComputer = 3
// hardDiskSpace = [8,2,4]
// segmentLength = 2

// const diskSpaceAnalysis = (num, hardDiskSpace, segmentLength) => {
//   let start = 0;
//   let segMinArr = [];
//   let currSeg = [];
//   // let currMin = -Infinity;

//   for(let end = 0; end < hardDiskSpace.length; end++){
//     let endNum = hardDiskSpace[end];
//     currSeg.push(endNum);

//     if(end - start + 1 === segmentLength){
//       // let startNum = hardDiskSpace[start];
//       let currMin = Math.min(...currSeg);
//       segMinArr.push(currMin);
//       currSeg.shift();
//       start++;
//     }
//   }

//   return Math.max(...segMinArr);
// }

// console.log(diskSpaceAnalysis(3, [8,2,4], 2));
// console.log(diskSpaceAnalysis(3, [8, 2,4,3,7,6], 2));
// console.log(diskSpaceAnalysis(3, [8, 2,4,3,7,6], 3));
// console.log(diskSpaceAnalysis(3, [2,4,3,7,8,6,5], 4));
// console.log(diskSpaceAnalysis(3, [2,4,3,7,8,6,5,16,19,33,32,34,35], 5));

// const tresureIsland = (grid) => {
//   const directions = [
//     [1,0],
//     [-1,0],
//     [0,-1],
//     [0,1],
//   ]
//   let count = 0;
//   const queue = [[0,0]];
//   let visited = new Set();

//   const isValid = (r,c) => {
//     if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false;
//     if(grid[r][c] === 'D') return false;
//     if(visited.has(`${r}_${c}`)) return false;

//     visited.add(`${r}_${c}`)
//     return true;
//   }

//   while(queue.length > 0){
//     let levelLength = queue.length;
//     for(let i = 0; i < levelLength; i++){
//       const [r, c] = queue.shift();
//       visited.add(`${r}_${c}`)
//       if(grid[r][c] === 'X') return count;

//       directions.forEach(direction => {
//         const [rr, cc] = direction;
//         const newRow = r + rr;
//         const newCol = c + cc;

//         if(isValid(newRow, newCol)) queue.push([newRow, newCol]);
//       });
//     };
//     count++;
//   };

//   return -1;
// }
// const grid = [
// ['O', 'O', 'O', 'O'],
// ['D', 'O', 'D', 'O'],
// ['O', 'O', 'O', 'O'],
// ['X', 'D', 'D', 'O']
// ];

// console.log(tresureIsland(grid));

// const tresureIsland2 = (grid) => {
//   const directions = [
//     [1,0],
//     [-1,0],
//     [0,-1],
//     [0,1],
//   ]
//   let count = 0;
//   const queue = [];
//   let visited = new Set();

//   for(let r = 0; r < grid.length; r++){
//     for(let c = 0; c < grid[0].length; c++){
//       if(grid[r][c] === 'S'){
//         queue.push([r,c]);
//       };
//     };
//   };

//   const isValid = (r,c) => {
//     if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false;
//     if(grid[r][c] === 'D') return false;
//     if(grid[r][c] === 'S') return false;
//     if(visited.has(`${r}_${c}`)) return false;

//     visited.add(`${r}_${c}`)
//     return true;
//   }

//   while(queue.length > 0){
//     let levelLength = queue.length;
//     for(let i = 0; i < levelLength; i++){
//       const [r, c] = queue.shift();
//       visited.add(`${r}_${c}`)
//       if(grid[r][c] === 'X') return count;

//       directions.forEach(direction => {
//         const [rr, cc] = direction;
//         const newRow = r + rr;
//         const newCol = c + cc;

//         if(isValid(newRow, newCol)) queue.push([newRow, newCol]);
//       });
//     };
//     count++;
//   };

//   return -1;
// }
// const grid = [
//   ['S', 'O', 'O', 'S', 'S'],
//   ['D', 'O', 'D', 'O', 'D'],
//   ['O', 'O', 'O', 'O', 'X'],
//   ['X', 'D', 'D', 'O', 'O'],
//   ['X', 'D', 'D', 'D', 'O']
// ];

// const grid2 = [
//   ['S', 'O', 'O', 'S', 'S'],
//   ['D', 'O', 'D', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'X'],
//   ['X', 'D', 'D', 'O', 'O'],
//   ['X', 'D', 'D', 'D', 'O']
// ];

// console.log(tresureIsland2(grid));
// console.log(tresureIsland2(grid2));

// https://leetcode.com/discuss/interview-question/349617

// 20
// /   \
// 12     18
// /  |  \   / \
// 11   2   3 15  8

// Output: 18
// Explanation:
// There are 3 nodes which have children in this tree:
// 12 => (11 + 2 + 3 + 12) / 4 = 7
// 18 => (18 + 15 + 8) / 3 = 13.67
// 20 => (12 + 11 + 2 + 3 + 18 + 15 + 8 + 20) / 8 = 11.125

// 18 has the maximum average so output 18.

// class TreeNode {
//   constructor(val = null){
//     this.val = val;
//     this.children = [];
//   }
// }

// const maxAverageSubtree = (root) => {
//   if(!root || root.children.length === 0) return 0;
//   let max = -Infinity;
//   let maxNode = null;

//   const dfs = (node) => {
//     if(!node) return { sum: 0, count: 0};

//     let currSum = node.val;
//     let currCount = 1;
//     for(const child of node.children){
//       let { sum, count } = dfs(child);
//       currSum += sum;
//       currCount += count;
//     };

//     let avg = currSum / currCount;
//     if(currCount > 1 && avg > max){
//       max = avg;
//       maxNode = node;
//     }

//     return { sum: currSum, count: currCount};
//   };
//   dfs(root);

//   return maxNode;
// };

// https://leetcode.com/discuss/interview-question/793606/

// const maxUnits = (numBoxes, unitsPerBox, truckload) => {
//   let capacity = 0;
//   let arr = [];

//   for(let i = 0; i < numBoxes.length; i++){
//     const temparr = [];
//     temparr[0] = unitsPerBox[i];
//     temparr[1] = numBoxes[i];
//     arr.push(temparr);
//   };

//   arr.sort((a,b) => b[0] - a[0]);

//   while(truckload > 0){
//     let [units, freq] = arr.shift();

//     while(freq > 0 && truckload > 0){
//       capacity += units;
//       freq--;
//       truckload--;
//     }
//   };

//   return capacity;
// };

// console.log(maxUnits([1,2,3], [3,2,1], 3));

// const maxProfit = (numSuppliers, inventory, order) => {
//   let profit = 0;
//   while(order > 0){
//     inventory.sort((a,b) => a - b);
//     let currMax = inventory.pop();
//     profit += currMax;
//     if(currMax > 1) {
//       inventory.push(currMax - 1);
//     };
//     order--;
//   };

//   return profit;
// };

// console.log(maxProfit(2, [3,5], 6)); //19

// const fetchItemsToDisplay = (numOfItems, items, sortParam, sortOrder, itemsPerPage, pageNumber) => {
//   const results = [];

//   if(sortOrder === 0){
//     if(sortParam === 0){
//       items.sort((a,b) => a[0].localeCompare(b[0], 'en', { numeric: true}))
//     } else {
//       items.sort((a,b) => a[sortParam] - b[sortParam]);
//     };
//   } else if(sortOrder === 1){
//     if(sortParam === 0){
//       items.sort((a,b) => b[0].localeCompare(a[0], 'en', { numeric: true}))
//     } else {
//       items.sort((a,b) => b[sortParam] - a[sortParam]);
//     };
//   };

//   let skipItems = pageNumber * itemsPerPage;

//   while(skipItems < numOfItems && results.length < itemsPerPage){
//     results.push(items[skipItems][0]);
//     skipItems++;
//   };
//   return results;
// };

// console.log(fetchItemsToDisplay(
//   4,
//   [["item1", 10,15], ["item2",3,4], ["item3", 17, 8], ["item5", 17, 8]],
//   1,
//   0,
//   2,
//   1
// ));

// https://leetcode.com/discuss/interview-question/806601/Amazon-or-OA2-or-Number-Of-Clusters
// const numberOfClusters = (grid) => {
//   let count = 0;
//   const visited = new Set();

//   const dfs = (r, c, currChar) => {
//     if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return;
//     if(visited.has(`${r}_${c}`)) return;
//     if(grid[r][c] !== currChar) return;

//     visited.add(`${r}_${c}`);
//     dfs(r + 1, c, currChar);
//     dfs(r - 1, c, currChar);
//     dfs(r, c - 1, currChar);
//     dfs(r, c + 1, currChar);
//   };

//   for(let r = 0; r < grid.length; r++){
//     for(let c = 0; c < grid[0].length; c++){
//       if(!visited.has(`${r}_${c}`)){
//         count++;
//         dfs(r,c, grid[r][c]);
//       }
//     };
//   }

//   return count;
// };

// console.log(numberOfClusters(
//   [
//     ['a','a','a'],
//     ['b','b','b'],
//   ]
// ));
// console.log(numberOfClusters(
//   [
//     ['b','b','b','c','a','a'],
//     ['b','b','b','b','b','b'],
//   ]
// ));
// console.log(numberOfClusters(
//   [
//     ['a','a','a'],
//     ['c','c','b'],
//     ['a','b','a'],
//   ]
// ));

// Zombie in Matrix
// https://leetcode.com/discuss/interview-question/411357/

// const zombie = grid => {
//   let days = 0;
//   const queue = [];
//   for(let r = 0; r < grid.length; r++){
//     for(let c = 0; c < grid[0].length; c++){
//       if(grid[r][c] === 1){
//         queue.push([r,c]);
//       }
//     };
//   };

//   const directions = [
//     [1,0],
//     [-1,0],
//     [0,-1],
//     [0,1],
//   ];
//   const visited = new Set();

//   const isValid = (r,c) => {
//     if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false;
//     if(grid[r][c] === 1) return false;
//     if(visited.has(`${r}_${c}`)) return false;

//     visited.add(`${r}_${c}`);
//     return true;
//   };

//   while(queue.length > 0){
//     let levelLength = queue.length;
//     for(let i = 0; i < levelLength; i++){
//       const [r,c] = queue.shift();

//       visited.add(`${r}_${c}`);

//       directions.forEach(direction => {
//         const [rr, cc] = direction;
//         const newRow = r + rr;
//         const newCol = c + cc;

//         if(isValid(newRow, newCol)) queue.push([newRow, newCol]);
//       });
//     };
//     if(queue.length > 0) days++;
//   };

//   return days;
// };

// const grid = [
//   [0, 1, 1, 0, 1],
//   [0, 1, 0, 1, 0],
//   [0, 0, 0, 0, 1],
//   [0, 1, 0, 0, 0]
// ];

// console.log(zombie(grid));

// https://leetcode.com/discuss/interview-question/542597/

// const topKKeywords = (k, keywords, reviews) => {
//   const keywordsSet = new Set(keywords);
//   const dict = {};

//   for(const review of reviews){
//     let normalizedReview = review.toLowerCase().split(/[\W_+]/);
//     // console.log('normalizedReview', normalizedReview);
//     normalizedReview.forEach(word => {
//       if(keywordsSet.has(word)){
//         dict[word] ? dict[word]++ : dict[word] = 1;
//       };
//     });
//   };
//   // console.log('dict', dict);

//   return Object.keys(dict).sort((a,b) => dict[b] - dict[a] || a.localeCompare(b)).slice(0,k);
//   // console.log(res)
// }

// // const k = 2
// // const keywords = ["anacell", "cetracular", "betacellular"]
// // const reviews = [
// //   "Anacell provides the best services in the city",
// //   "betacellular has awesome services",
// //   "Best services provided by anacell, everyone should use anacell",
// // ];
// // console.log(topKKeywords(k, keywords, reviews));

// const rev = [
//   "I love anacell Best services; Best services provided by anacell",
//   "betacellular has great services",
//   "deltacellular provides much better services than betacellular",
//   "cetracular is worse than anacell",
//   "Betacellular is better than deltacellular.",
// ]

// // Output:
// // ["betacellular", "anacell"]
// console.log(topKKeywords(2, ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"], rev));

// const LRUMisses = (num, pages, maxCacheSize) => {
//   let map = new Map();
//   let misses = 0;

//   for(let i = 0; i < num; i++){
//     let currPage = pages[i];

//     if(!map.has(currPage)){
//       misses++;

//       if(map.size >= maxCacheSize){
//         for(const [hash] of map){
//           map.delete(hash);
//           break;
//         };
//       };

//       map.set(currPage, true);
//     } else {
//       map.delete(currPage);
//       map.set(currPage, true);
//     };

//   };

//   return misses;
// };

// const num = 6;
// const pages = [1,2,1,3,1,2]
// const maxCacheSize = 2

// console.log(LRUMisses(num, pages, maxCacheSize));

// const fradulent = (threshold, arr) => {
//   const dict = {};
//   const results = [];

//   for(const trans of arr){
//     // console.log('trans', trans);
//     const [u1, u2] = trans;
//     // console.log('uq', u1)
//     if(u1 === u2){
//       dict[u1] ? dict[u1]++ : dict[u1] = 1;
//     } else {
//       dict[u1] ? dict[u1]++ : dict[u1] = 1;
//       dict[u2] ? dict[u2]++ : dict[u2] = 1;
//     };
//   };

//   Object.keys(dict).forEach(id => {
//     if(dict[id] >= threshold){
//       results.push(parseInt(id));
//     };
//   })

//   return results.sort((a,b) => a-b);
// };

// const arr = [
//   [345366,89921,45],
//   [029323,38239,23],
//   [38239,345366,15],
//   [029323,38239,77],
//   [345366,38239,23],
//   [029323,345366,13],
//   [38239,38239,23]
// ]

// console.log(fradulent(3, arr))

// Largest Item Association
// https://leetcode.com/discuss/interview-question/782606/

// const itemAssociation = (items) => {
//   const graph = {};
//   const visited = new Set();
//   const results = [];
//   let maxLength = 0;

//   for (const [item1, item2] of items) {
//     if(!graph[item1]) graph[item1] = new Set();
//     graph[item1].add(item2);
    
//     if(!graph[item2]) graph[item2] = new Set();
//     graph[item2].add(item1);
//   };

//   const bfs = (key) => {
//     const queue = [key];
//     let currArr = [];

//     while(queue.length > 0){
//       let levelLength = queue.length;
//       for(let i = 0; i < levelLength; i++){
//         const curr = queue.shift();
//         visited.add(curr);
//         currArr.push(curr);

//         if(graph[curr]){
//           for(const child of [...graph[curr]]){
//             if(!visited.has(child)){
//               visited.add(child);
//               queue.push(child);
//             };
//           };
//         };

//       };
//     };

//     return currArr.sort((a,b) => a.localeCompare(b, 'en', { numeric: true }));
//   };

//   for(const key of Object.keys(graph)){
//     let curr = [];
//     if(!visited.has(key)){
//       curr = bfs(key);
//     };

//     if(curr.length >= maxLength){
//       results.push(curr);
//       maxLength = curr.length;
//     }
//   };

//   results.sort((a,b) => b.length - a.length || a[0].localeCompare(b[0], 'en', { numeric: true}));

//   return results[0];
// };

// const items = [
//   ["item1", "item2"],
//   ["item3", "item4"],
//   ["item4", "item5"],
// ];

// const items1 = [
//   ["item1", "item2"],
//   ["item4", "item5"],
//   ["item3", "item4"],
// ];

// const items2 = [
//   ["item1", "item2"],
//   ["item4", "item5"],
//   ["item3", "item4"],
//   ["item1", "item4"],
// ];

// console.log(itemAssociation(items));
// console.log(itemAssociation(items1));
// console.log(itemAssociation(items2));

// https://leetcode.com/discuss/interview-question/808374/

// const nearestCity = (cities, x, y, queries) => {
//   const results = new Array(queries.length).fill('None');
//   const dict = {};

//   for(let i = 0; i < cities.length; i++){
//     dict[cities[i]] = [x[i], y[i]];
//   };

//   const findDistance = ([x1, y1], [x2, y2]) => Math.abs(x1-x2) + Math.abs(y1-y2);

//   for(let i = 0; i < queries.length; i++){
//     const currCity = queries[i];
//     let currDistance = Infinity;
//     let currResults = [];

//     for(let j = 0; j < cities.length; j++){
//       if(cities[j] === currCity) continue;
//       const currCityCoord = dict[currCity];
//       const searchCityCoord = dict[cities[j]];

//       if(searchCityCoord[0] !== currCityCoord[0] && searchCityCoord[1] !== currCityCoord[1]) continue;

//       const distance = findDistance(currCityCoord, searchCityCoord);
//       console.log(distance);

//       if(distance <= currDistance){
//         if(distance < currDistance){
//           currResults = [cities[j]]
//         } else {
//           currResults.push(cities[j]);
//         }
//         currDistance = distance;
//       };
//     };

//     if(currResults.length > 0){
//       currResults.sort((a,b) => a.localeCompare(b, 'en', { numeric: true }));
//       results[i] = currResults[0];
//     };
//   };

//   return results;
// };

// console.log(nearestCity(["c1", "c2", "c3"], [3,2,1], [3,2,3], ["c1", "c2", "c3"]));
// console.log(nearestCity(["c1", "c2", "c3", "c4", "c5", "c6", "c7"], [3,2,1,3,4,1,0], [3,2,3,1,3,1,1], ["c1", "c2", "c3", "c4", "c5", "c6", "c7"]));

// const itemsContainer = (s, start, end) => {
//   const results = [];
//   const normalized = [];
//   for(let i = 0; i < start.length; i++){
//     normalized.push([start[i] - 1, end[i] -1]);
//   };

//   console.log('normalized', normalized);

//   for(let i = 0; i < normalized.length; i++){
//     let [startI, endI] = normalized[i];
//     let currCount = 0;
//     // let startFound  = false;
//     // let currStart = 0;
    
//     while(startI <= endI){
//       if(s[startI] !== '|'){
//         startI++;
//       } else {
//         startI++;
//         break;
//       };
//     };

//     if(startI >= endI) continue;

//     while(startI <= endI){
//       if(s[startI] === '*'){
//         currCount++;
//         startI++;
//       } else {
//         results[i] = currCount;
//         startI++;
//       };
//     };

//   };

//   return results;
// };

// const s = '|**|*|*';
// const startIndices = [1, 1];
// const endIndices = [5, 6]
// // s = *|*|

// // n = 1
// // startIndices = [1]
// // n = 1
// // startIndices = [3]

// console.log(itemsContainer(s, startIndices, endIndices));
// console.log(itemsContainer('*|*|', [1], [3]));
// console.log(itemsContainer('*|*|*|', [1], [6]));

// https://leetcode.com/problems/longest-happy-string/
// var longestHappyString = function(a, b, c) {
//   let results = "";
//   let normalized = [];
  
//   if(a){
//       normalized.push(['a', a])
//   };
//   if(b){
//       normalized.push(['b', b])
//   };
//   if(c){
//       normalized.push(['c', c])
//   };
  
//   let previous = null;
  
//   while(normalized.length > 0){
//       if(previous !== null && previous === results[results.length - 1]) break;
//       normalized.sort((a,b) => b[1] - a[1]);
//       // console.log('normalized', normalized);
//       let [char, freq] = normalized.shift();
//       let queue = [];
//       let count = 0;
      
//       while(freq > 0 && count < 2){
//           results += char;
//           freq--;
//           count++;
//       };
      
//       if(freq > 0){
//           queue.push([char, freq]);
//       };
      
//       count = 0;
      
//       if(normalized.length > 0){
//           let [nextChar, nextFreq] = normalized.shift();
//           if(nextFreq < freq){
//               results += nextChar;
//               nextFreq--;
//           } else {
//               while(nextFreq > 0 && count < 2){
//                   results += nextChar;
//                   count++;
//                   nextFreq--;
//               };
//           };
//           if(nextFreq > 0){
//               queue.push([nextChar, nextFreq]);
//           }
//       };
      
//       previous = char;
//       for(let i = 0; i < queue.length; i++){
//           normalized.push(queue[i]);
//       };
      
//   };
//   return results;
// };


// const turnstile = (numCustomers, arrTime, direction) => {
//   const results = new Array(numCustomers).fill(0);
//   const exiting = [];
//   const entering = [];
//   let time = 0;
//   let isExiting = true;

//   let i = 0;
//   while(i < numCustomers || exiting.length || entering.length){
//     while(i < numCustomers && arrTime[i] <= time){
//       if(direction[i] === 0){
//         exiting.push(i);
//       } else {
//         entering.push(i);
//       }
//       i++;
//     };

//     if(exiting.length || entering.length){
//       if(exiting.length && isExiting){
//         results[exiting.shift()] = time;
//       } else if(entering.length && !isExiting) {
//         results[entering.shift()] = time;
//       } else if(exiting.length){
//         results[exiting.shift()] = time;
//         isExiting = true;
//       } else if(entering.length){
//         results[entering.shift()] = time;
//         isExiting = false;
//       }
//     } else {
//       isExiting = true;
//       time = arrTime[i] - 1;
//     };

//     time++;
//   };

//   return results;
// }

// // 1 = exit
// // 0 = enter
// // numCustomers = 4
// // arrTime = [0, 0, 1, 5]
// // direction = [0, 1, 1, 0]
// console.log(turnstile(4, [0, 0, 1,5], [0, 1, 1, 0]));

// // numCustomers = 5
// // arrTime = [0,1,1,3,3]
// // direction = [0, 1, 0, 0, 1]
// console.log(turnstile(5, [0,1,1,3,3], [0, 1, 0, 0, 1]));


// const fiveStar = (arr, threshold) => {
//   let count = 0;
//   let currThreshold = 0;

//   arr.forEach(item => {
//     const [num, total] = item;
//     currThreshold += num/total;
//   });
//   currThreshold = currThreshold / arr.length * 100;

//   if(currThreshold >= threshold) return count;

//   const compare = (a,b) => {
//     let currPercentA = a[0] / a[1];
//     let currPercentB = b[0] / b[1];
//     let newPercentA = (a[0] + 1) / (a[1] + 1);
//     let newPercentB = (b[0] + 1) / (b[1] + 1);

//     if(newPercentA - currPercentA < newPercentB - currPercentB){
//       return 1;
//     }
//     return -1;
//   };

//   while(currThreshold < threshold){
//     let thres = 0;
//     arr.sort(compare);
//     const [fiveStartReviews, totalReviews] = arr.shift();

//     arr.push([fiveStartReviews + 1, totalReviews + 1]);

//     arr.forEach(item => {
//       const [num, total] = item;
//       thres += num/total;
//     });

//     currThreshold = thres / arr.length * 100;

//     count++;
//   };

//   return count;
// };

// console.log(fiveStar([[4,4],[1,2],[3,6]], 77))
// console.log(fiveStar([[4,4],[1,2],[3,6],[3,5],[2,7],[1,4]], 90))


// https://leetcode.com/discuss/interview-question/373202

// const utilization = (a,b,target) => {
//   let results = [];
//   a.sort((x,y) => x[1] - y[1]);
//   b.sort((x,y) => x[1] - y[1]);
//   let max = -Infinity;

//   let left = 0;
//   let right = b.length - 1;

//   while(right >= 0 && left < a.length){
//     let sum = a[left][1] + b[right][1];
//     if(target < sum){
//       right--;
//     } else {
//       if(max <= sum){
//         if(max < sum){
//           max = sum;
//           results = [];
//         };

//         results.push([a[left][0], b[right][0]]);

//         let i = right - 1;
//         while(i >= 0 && b[i][1] === b[i+1][1]){
//           results.push([a[left][0], b[right][0]]);
//           i--;
//         };

//       };
//       left++;
//     }
//   };

//   return results;
// };

// console.log(utilization([[1, 8], [2, 7], [3, 14]], [[1, 5], [2, 10], [3, 14]], 20));
// console.log(utilization([[1, 8], [2, 15], [3, 9]], [[1, 8], [2, 11], [3, 12]], 20));
// const a = [[1, 3], [2, 5], [3, 7], [4, 10]]
// const b = [[1, 2], [2, 3], [3, 4], [4, 5]]
// const target = 10
// console.log(utilization(a,b,10));
// console.log(utilization([[1, 2], [2, 4], [3, 6]],[[1,2]],7));


// https://leetcode.com/discuss/interview-question/376375/
// Given a list of unique integers nums, construct a BST from it (you need to insert nodes one-by-one with the given order to get the BST) and find the distance between two nodes node1 and node2. Distance is the number of edges between two nodes. If any of the given nodes does not appear in the BST, return -1.

// Example 1:

// Input: nums = [2, 1, 3], node1 = 1, node2 = 3
// Output: 2
// Explanation:
//      2
//    /   \
//   1     3

// class TreeNode {
//   constructor(val = null){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const addBST = (root, node) => {
//   if(root.val < node.val){
//     if(root.right === null) {
//       root.right = node;
//       return;
//     } else {
//       addBST(root.right, node);
//     }
//   } else {
//     if(root.left === null){
//       root.left = node;
//       return;
//     } else {
//       addBST(root.left, node);
//     }
//   };
// };

// const constructBST = (arr, node1, node2) => {
//   let found1 = false;
//   let found2 = false;
//   let root = null;

//   for(const num of arr){
//     if(num === node1) found1 = true;
//     if(num === node2) found2 = true;

//     let node = new TreeNode(num);
//     if(root === null){
//       root = node;
//       continue;
//     };

//     addBST(root, node);
//   };

//   if(!found1 || !found2) return null;

//   return root;
// }

// const findLCA = (root, node1, node2) => {
//   if(!root) return null;

//   if(root.val === node1 || root.val === node2) return root;

//   let left = findLCA(root.left, node1, node2);
//   let right = findLCA(root.right, node1, node2);

//   if(left && right){
//     return root;
//   } else if(left){
//     return left;
//   } else if(right){
//     return right;
//   };

//   return null;
// };

// const findDistance = (node, target, distance = 0) => {
//     if(target < node.val){
//       return findDistance(node.left, target, distance + 1);
//     } else if(target > node.val){
//       return findDistance(node.right, target, distance + 1);
//     };
//     return distance;
// };

// const distanceBST = (arr, node1, node2) => {
//     const root = constructBST(arr, node1, node2);
//     if(root === null) return -1;
//     if(node1 === node2) return 0;
//     const LCA = findLCA(root, node1, node2);
//     return findDistance(LCA, node1) + findDistance(LCA, node2);
// };

// console.log(distanceBST([2,1,3] , 1, 3));


// https://leetcode.com/discuss/interview-question/233724

// You are given with a string . Your task is to remove atmost two substrings of any length from the 
// given string such that the remaining string contains vowels('a','e','i','o','u') only. Your aim is the maximise the 
// length of the remaining string. Output the length of remaining string after removal of atmost two substrings.
// NOTE: The answer may be 0, i.e. removing the entire string.

// Sample Input
// 2
// earthproblem
// letsgosomewhere
// Sample Output
// 3
// 2

// const vowel = (str) => {
//   let count = 0;
//   let left = 0;
//   let right = str.length - 1;
//   let set = new Set(['a','e','i','o','u']);
//   let max = 0;

//   while(set.has(str[left]) && left <= right){
//     left++;
//     count++;
//   };

//   while(set.has(str[right]) && left < right){
//     right--;
//     count++;
//   };

//   let currMax = 0;
//   while(left < right){
//     if(set.has(str[left])){
//       currMax++;
//       if(currMax > max){
//         max = currMax;
//       }
//     } else {
//       currMax = 0;
//     };
//     left++;
//   };  
//   return count + max;
// };

// console.log(vowel('earthproblem'));
// console.log(vowel('letsgosomewhere'));
// console.log(vowel('ffaoaoeffaaff'));
// console.log(vowel('aoao'));
// console.log(vowel('frfr'));


// const criticalPath = (numNodes = 7, numEdges = 7, edges = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]) => {
//   const graph = {};
//   const results = [];

//   for(const [e1, e2] of edges){
//     if(!graph[e1]) graph[e1] = [];
//     graph[e1].push(e2);

//     if(!graph[e2]) graph[e2] = [];
//     graph[e2].push(e1);
//   };

//   for(let i = 0; i < numNodes; i++){
//     let startNode = 0;
//     if(i === 0) startNode = 1;

//     let queue = [startNode];
//     let visited = new Set();

//     while(queue.length > 0){
//       const node = queue.shift();

//       if(graph[node]){
//         for(const neighbor of graph[node]){
//           if(!visited.has(neighbor) && neighbor !== i){
//             visited.add(neighbor);
//             queue.push(neighbor);
//           };
//         };
//       };
//     };

//     if(visited.size !== Object.keys(graph).length -1) results.push(i);
//   };
//   return results;
// }

// console.log(criticalPath())

// const minCost = (n = 6, edges = [[1, 4], [4, 5], [2, 3]], newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]) => {
//   let min = 0;
//   let num = n;
//   const parent = [];

//   const find = (node) => {
//     if(node !== parent[node]){
//       parent[node] = find(parent[node]);
//     };
    
//     return parent[node];
//   };
  
//   const union = (node1, node2) => {
//     let p1 = find(node1);
//     let p2 = find(node2);
    
//     if(p1 !== p2){
//       parent[p1] = p2;
//       num--;
//     }
//   };
  
//   for(let i = 0; i <= n; i++){
//     parent.push(i);
//   };

//   for (let [u, v] of edges) union(u, v);
//   newEdges.sort((a,b) => a[2] - b[2]);

//   for(const [e1, e2, cost] of newEdges){
//     if(find(e1) !== find(e2)){
//       union(e1, e2);
//       min += cost;
//     }
//   }

//   console.log('num', num)

//   return num === 1 ? min : -1;
// }
// console.log(minCost());


// const closeString = (A,B) => {
//   if(A.length !== B.length) return false;
//   const mapA = new Map();
//   const mapB = new Map();

//   for(let i = 0; i < A.length; i++){
//       mapA.set(A[i], mapA.get(A[i]) + 1 || 1);
//       mapB.set(B[i], mapB.get(B[i]) + 1 || 1);
//   };

//   const valuesA = [...mapA.values()].sort((a,b) => a - b);
//   const valuesB = [...mapB.values()].sort((a,b) => a - b);

//   for(let i = 0; i < A.length; i++){
//     if(!mapB.has(A[i])) return false;
//     if(!mapA.has(B[i])) return false;
//     if(valuesA[i] !== valuesB[i]) return false;
//   };

//   return true;
// };
// let A = "abbzccc";
// let B = "babzzcz";
// console.log(closeString(A,B));

// A = "zzzaakk";
// B = "akzzzzz";
// console.log(closeString(A,B));


// const battleship = (n, s, t) => {
//   const tsplit = t.split(' ');
//   const ssplit = t.split(',');

//   let hit = 0;
//   let sink = 0;


//   return `${sink},${hit}`;
// };

// console.log(battleship(4,"1B 2C,2D 4D", "2B 2D 3D 4D 4A"));
// console.log(battleship(3,"1A 1B,2C 2C", "1B"));
// console.log(battleship(12,"1A 2A,12A 12A", "12A"));

// ''  [']





















































































// const minCost = (edges, n, repair) => {
//   const graph = {};

//   for(let i = 1; i <= n; i++){
//     graph[i] = [];
//   };

//   for(const [e1, e2] of edges){
//     graph[e1].push(e2);
//     graph[e2].push(e1);
//   };

// }
// console.log(minCost([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], 5, [[1, 2, 12], [3, 4, 30], [1, 5, 8]]))



