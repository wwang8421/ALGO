// Read this : https://towardsdatascience.com/powerful-ultimate-binary-search-template-and-many-leetcode-problems-1f850ef95651
// Follow their template to solve all of the problems;

// const binarySearch = (arr) => {
//   // condition(value) => bool
//   let left = 0;
//   let right = arr.length - 1; // or the largest possible answer

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);
//     if(condition(mid)){
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left // adjust this accordingly, such as left - 1 for largest number that doesnt fit the condition
// }


// Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.
// Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// const binary_search = function(arr, key) {
//   let left = 0;
//   let right = arr.length - 1;

//   const isAscending = arr[left] < arr[right];

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(isAscending){
//       if(arr[mid] >= key){
//         right = mid;
//       } else {
//         left = mid + 1;
//       };
//     } else {
//       if(arr[mid] <= key){
//         right = mid;
//       } else {
//         left = mid + 1;
//       };
//     }
//   }

//   return arr[left] === key ? left : -1;
// };

// console.log(binary_search([4, 6, 10], 10))
// console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
// console.log(binary_search([10, 6, 4], 10))
// console.log(binary_search([10, 6, 4], 4))

// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.
// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

// const search_ceiling_of_a_number = function(arr, key) {
//   let left = 0;
//   let right = arr.length - 1;

//   if(key < arr[left]) return 0;
//   if(key > arr[right]) return -1;

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(arr[mid] >= key){
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   };

//   return left;
// };


// console.log(search_ceiling_of_a_number([4, 6, 10], 6))
// console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
// console.log(search_ceiling_of_a_number([4, 6, 10], 17))
// console.log(search_ceiling_of_a_number([4, 6, 10], -1))

// Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
// Write a function to return the next letter of the given ‘key’.

// const search_next_letter = function(letters, key) {
//   if(letters[letters.length - 1] <= key) return letters[0];
//   if(letters[0] > key) return letters[0];

//   let left = 0;
//   let right = letters.length - 1;

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(letters[mid] > key){
//       right = mid;
//     } else {
//       left = mid + 1;
//     }

//   };

//   return letters[left];
// };

// console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
// console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
// console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))


// Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// const binarySearch = (arr, key, findingLeft) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(findingLeft){
//       if(arr[mid] >= key){
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if(arr[mid] > key){
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     };
//   };

//   if(findingLeft){
//     return arr[left] === key ? left : -1;
//   } else {
//     if(arr[left] !== key) return left - 1;
//     return left;
//   };

// };

// const find_range = function(arr, key) {
//   result = [- 1, -1];
//   let leftRange = binarySearch(arr, key, true);
//   if(leftRange !== -1){
//     let rightRange = binarySearch(arr, key, false);
//     return [leftRange, rightRange];
//   }
//   return result;
// };

// console.log(find_range([6, 6, 6, 6, 6], 6))
// console.log(find_range([1, 3, 8, 10, 15], 10))
// console.log(find_range([1, 3, 8, 10, 15], 12))


// Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array. Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Since it is not possible to define an array with infinite (unknown) size, you will be provided with an interface ArrayReader to read elements of the array. ArrayReader.get(index) will return the number at index; if the array’s size is smaller than the index, it will return Integer.MAX_VALUE.

// class ArrayReader {

//   constructor(arr) {
//     this.arr = arr;
//   }

//   get(index) {
//     if (index >= this.arr.length)
//       return Number.MAX_SAFE_INTEGER;
//     return this.arr[index]
//   }
// };


// const search_in_infinite_array = function(reader, key) {
//   let left = 0;
//   let right = 1;

//   while(key > reader.get(right)){
//     left = right;
//     right *= 2;
//   };

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(reader.get(mid) >= key){
//       right = mid;
//     } else {
//       left = mid + 1;
//     };
//   };

//   return reader.get(left) === key ? left : -1;
// };

// var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
// console.log(search_in_infinite_array(reader, 16))
// console.log(search_in_infinite_array(reader, 11))
// reader = new ArrayReader([1, 3, 8, 10, 15])
// console.log(search_in_infinite_array(reader, 15))
// console.log(search_in_infinite_array(reader, 200))


// Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.


// const search_min_diff_element = function(arr, key) {
//   if(key <= arr[0]) return arr[0];
//   if(key >= arr[arr.length - 1]) return arr[arr.length - 1];

//   let left = 0;
//   let right = arr.length - 1;

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);
//     let midDiff = Math.abs(key - arr[mid]);
//     let rightDiff = Math.abs(key - arr[mid + 1]);

//     if(midDiff <= rightDiff){
//       right = mid;
//     } else {
//       left = mid + 1;
//     };
//   };

//   return arr[left];
// };


// console.log(search_min_diff_element([4, 6, 10], 7))
// console.log(search_min_diff_element([4, 6, 10], 4))
// console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
// console.log(search_min_diff_element([4, 6, 10], 17))


// Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// const find_max_in_bitonic_array = function(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(arr[mid] > arr[mid + 1]){
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   };

//   return arr[left];
// };


// console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
// console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
// console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
// console.log(find_max_in_bitonic_array([10, 9, 8]))

// Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.
// Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

// var search = function(arr, key) {
//   let left = 0;
//   let right = arr.length - 1;

//   while(left < right) {
//     let mid = left + Math.floor((right - left) / 2);

//     if(arr[mid] === key) return mid;

//     if(arr[left] <= arr[mid]){
//       if(arr[left] <= key && key < arr[mid]) {
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if(arr[mid] < key && arr[right] >= key){
//           left = mid + 1;
//       } else {
//           right = mid;
//       }
//     }
//   };

//   return arr[left] === key ? left : -1
// };

// console.log(search([10, 15, 1, 3, 8], 15))
// console.log(search([4, 5, 7, 9, 10, -1, 2], 10))



// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// var findMin = function(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   if(arr.length === 1) return arr[0];
  
//   while(left < right){
//       let mid = left + Math.floor((right - left) / 2);
      
//       if(arr[mid] <= arr[right]){
//          right = mid;
//        } else {
//           left = mid + 1;
//       };
//   };

// return arr[left];
// };

// Rotation Count (medium) #
// Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.
// You can assume that the array does not have any duplicates.

// const count_rotations = function(arr) {
//   let left = 0;
//   let right = arr.length -1;

//   if(arr[left] < arr[right]) return 0;

//   while(left < right){
//     let mid = left + Math.floor((right - left) / 2);

//     if(arr[left] <= arr[mid]){
//       if(arr[mid] >= arr[mid + 1]){
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if(arr[mid] <= arr[mid - 1]){
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     };

//   };

//   return left + 1;
// };


// console.log(count_rotations([10, 15, 1, 3, 8]))
// console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]))
// console.log(count_rotations([1, 3, 8, 10]))
