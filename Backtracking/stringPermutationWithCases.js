/* 
Given a string, find all of its permutations preserving the character sequence but changing case.
 */

/* 
 PSEDUO:
 */

// EX:
// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52"
// Example 2:

// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

function find_letter_case_string_permutations(str) {
  let results = [];
  function permute(curr, index = 0) {
    if (curr.length === str.length) {
      results.push(curr);
    } else {
      if (isNaN(str[index])) {
        permute(curr + str[index].toLowerCase(), index + 1);
        permute(curr + str[index].toUpperCase(), index + 1);
      } else {
        permute(curr + str[index], index + 1);
      }
    }
  }
  permute("");
  return results;
}

find_letter_case_string_permutations("ab7c");

console.log(
  `String permutations are: ${find_letter_case_string_permutations("ad52")}`
);
console.log(
  `String permutations are: ${find_letter_case_string_permutations("ab7c")}`
);
