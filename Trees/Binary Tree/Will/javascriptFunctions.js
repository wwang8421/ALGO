// Function.prototype.bind = function(context, ...args){
//   let fn = this;
//   return function (...secondArgs){
//     return fn.call(context, ...args, ...secondArgs);
//   }
// }

// const debounce = (fn, wait) => {
//   let id;
//   return function (...args) {
//     let context = this;
//     clearTimeout(id);
//     id = setTimeout(fn.apply(context, args), wait);
//   }
// }

// function testMyBind(favColor, ...args) {
//   console.log(this.name, favColor, ...args); // Test, pink
// }

// const user = {
//   name: 'Test'
// }

// const boundedFunction = testMyBind.bind(user);

// boundedFunction('blue', 'red');

// const bindedFunction = testMyBind.myBind(user, 'pink');
// bindedFunction();

// const debounce = (fn, delay) => {
//   let id;
//   return function(...args){
//     let context = this;
//     clearTimeout(id);
//     id = setTimeout(() => {
//       fn.call(context, ...args);
//     }, delay);
//   }
// }

// const throttle = (fn, wait) => {
//   let flag = true;
//   return function (...args){
//     let context = this;
//     if(flag) {
//       fn.call(context, ...args);
//       flag = false;
//     };

//     setTimeout(() => { flag = true }, wait);
//   }
// }


// var chemicalsArray = ['Amazon', 'Microsoft', 'Google'];
// var symbols = ['I', 'Am', 'cro', 'Na', 'le', 'abc'];




// const chemicals = (chemicalArr, sym) => {
//   for(let i = 0; i < chemicalArr.length; i++){
//     for(let j = 0; j < sym.length; j++){
//       const index = chemicalArr[i].indexOf(sym[j]);

//       if(index !== -1){
//         chemicalArr[i] = chemicalArr[i].replace(sym[j], `[${sym[j]}]`)
//       }
//     }
//   }

//   return chemicalArr;
// };

// console.log(chemicals(chemicalsArray, symbols))

// oding 1: Given an area (length, width) in two-dimensional coordinates, there are multiple mines in the area that can damage the surrounding circular area, and each mine attribute has an xy position and a damage radius. These information are all floating point numbers.
// Ask whether it is possible: a person walks from a certain position at the bottom of the area to the top of the area without being hurt. Define the input form yourself and return boolean.

// The solution given at the scene is to use Union Find: first go through which two mines have overlapping damage ranges (including tangency);
// then use Union Find to group all mines according to the overlap, and all damage ranges are connected into one group. ;
// For each group, judge whether these mines form a barrier to prevent people from walking from the bottom to the top.

// People only need to safely walk from any position on the bottom side to any position on the top side. Bug free wrote out
// follow-up. What if you give specific start and end coordinates?


// also appeared in the second question. Give a String with a word and parentheses nested. For example: (hi hello (bye)), print out:

// (
//   hi
//   hello
//   (
//     bye
//   )
// ) The

// Question: For the list of list, the sub-list represents an employee and has three elements, namely the employee id, his boss id, and the name. [[1, 1, 张三], [2, 1, 李四]].. .....]
// Let the print come out the following (it should be the tools used by many companies’ internal searchers, the same indent is reported to one person, such as Liu Wu and Wang Qi, the report relationship cannot be wrong, the order does not matter Cui but Liu five eight can not report to Choi in John Doe top eight, report to their own people is the big boss instead of id 1):
// Joe Smith
//     John Doe
//         Liu five
//             Zhao Si
//             Zhao six
//                 Zheng nine
//         king seven
//     Cui eight

// actually approach is The preorder of the tree does not matter the order except for the root node.

// N-ary tree level order traverse.
// Each node has virtual depth. Need level order to output node according to virtual dept.
// For example:
//                               root(virtual depth 0)
//                          /. |. ...... \
//                     n2(1). |. n4(1)
//                  /. \. |. /. \  
//             n5(2). n6(2). n3 (2). n7(2)



// output the result root, n2, n4, n5, n6, n3, n7 to

