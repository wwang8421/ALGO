class Heap {
  constructor(comparator, values) {
    this.size = 0;
    this.values = values || [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  remove() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0,
      length = this.values.length;

    while (true) {
      let left = null,
        right = null,
        swap = null,
        leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap !== null && this.comparator(right, left) < 0) ||
          (swap === null && this.comparator(right, this.values[index]) < 0)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;

      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }
  }
}

const comparator = (b, a) => {
  if (!a) return 1;
  if (!b) return -1;
  if (!a && !b) return 0;
  return a[0] - b[0];
};

const mincomparator = (b, a) => {
  if (!a) return 1;
  if (!b) return -1;
  if (!a && !b) return 0;
  return b[0] - a[0];
};

// Min Comparator
Heap.minComparator = (a, b) => {
  return a - b;
};

// Max Comparator
Heap.maxComparator = (a, b) => {
  return b - a;
};

Heap.sortByTwo = (a, b) => {
  if (!b) return 1;
  if (!a) return -1;
  if (!a && !b) return 0;
  return a[0] - b[0] || a[1] - b[1];
};

// let newBind = (context, ...args) => {
//   let fn = this;
//   return function(...secondArgs){
//     return fn.call(context, ...args, ...secondArgs);
//   }
// };

// function curry(func) {
//   return function curried(...args) {
//     if(args.length >= func.length){
//       return func.apply(this,args);
//     } else {
//       return curried.bind(this, ...args);
//     }
//   }
// }

// const join = (a, b, c) => {
//   return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

// curriedJoin(1, 2)(3) // '1_2_3';

// Given an api which returns an array of chemical names and an array of chemical symbols, display the chemical names with their symbol surrounded by square brackets:

// Ex:
// Chemicals array: ['Amazon', 'Microsoft', 'Google']
// Symbols: ['I', 'Am', 'cro', 'Na', 'le', 'abc']

// Output:
// [Am]azon, Mi[cro]soft, Goog[le]

// const chemicals = (chemicalsArray, symbols) => {
//   const results = [];

//   for(let chem of chemicalsArray){
//     for(let i = 0; i < symbols.length; i++){
//       let string = "";
//       const index = chem.indexOf(symbols[i]);
//       console.log('index', index);

//       if(index !== -1){
//         chem = chem.replace(symbols[i], `[${symbols[i]}]`)
//         console.log('chem', chem)
//         // results.push()
//       }
//     }
//   }

//   console.log(chemicalsArray);
// }

// chemicals(chemicalsArray, symbols);

// const elements = [{symbol: "H", name: "Hydrogen" },
//   {symbol: "He", name: "Helium" },
//   {symbol: "Li", name: "Lithium" },
//   {symbol: " Br", name: "Bromine" },
//   {symbol: "B", name: "Boron"}
// ];

// const elementSet = new Set(elements.map((item) => item.symbol));

// const process = ( str) => {
//   let currentSymbol = "";
//   let result = "";

//   for (const char of str) {
//     const symbol = currentSymbol + char;
//     if (elementSet.has(symbol)) {
//       currentSymbol = symbol;
//     } else {
//       result += currentSymbol.length? `[${currentSymbol}]` + char:char;
//       currentSymbol = "";
//     }
//   }

//   return result;
// };

// console.log(process("Breaking Bad"));

// There are various goods and prices in the store, such as
// 1 pencil, 1.5 dollars for ice cream, 5 dollars for beef, and 10 dollars for wine. Given a certain amount of money, ask what combination of products you can buy. Just output the first matching option.

// In the current company for a year and four months, fullstack,
// mainly doing front-end, so hr matched the front-end position. I asked if I was not prepared, and the response I got was a general interview. But at the beginning, the phone was stunned. It was completely javascript html css and used jsfiddle. Give you the api, draw a table and change the colors in different cells according to the returned data from the api. The task itself is not particularly difficult, but it is almost impossible to complete it without preparation. In view of the fact that the host jsfiddle has never used it, there are many js and html default settings that are not known, and many frameworks must be referenced. I have been in the company for a long time, and it has been a long time since I wrote html and the simplest js from scratch. . The key is not prepared. After an hour, I barely drew the form (all kinds of debug eggs hurt, because I am not familiar with this jsfiddle), the color is hard code first. I thought I died. . Then I sent an email to hr Xiaoxiao and complained. . Two weeks later, I didn't expect to give me a second chance. I hope to have good luck next week.

// Question: For the list of list, the sub-list represents an employee and has three elements, namely the employee id, his boss id, and the name. [[1, 1, 张三], [2, 1, 李四]].. .....]
// Let the print come out the following (it should be available in many companies’ internal search tools. People with the same indent report to one person, such as Liu Wu and Wang Qi. The report relationship cannot be wrong. The order does not matter. Cui but Liu five eight can not report to Choi in John Doe top eight, report to their own people is the big boss instead of id 1):
// Joe Smith
//     John Doe
//         Liu five
//             Zhao Si
//             Zhao six
//                 Zheng nine
//         king seven
//     Cui eight

// actually approach is The preorder of the tree does not matter the order except for the root node.

// 1. The input is a series of two-tuples, indicating who invited whom in a party, such as [[A, B], [B, C], [C, D], [A, E]] for A Invited B, B invited C, C invited D, A invited E, and then gave any two people, such as D and E, to find out what kind of invitation relationship is between them. The above example should output: D is invited by C, C is invited by B, B is invited by A, A invites E. If you query E and D, you should output E is invited by A, A invites B, B invites C, C invites D.

// After the interview, the topic is to give a string of numbers, such as 1 2 3 4 2 1 3 5, and ask for the longest subsequence, where one number is removed from this sequence, and the other numbers appear the same number of times. The answer to the example is 7, because after subsequence 1 2 3 4 2 1 3 is removed, the other numbers appear twice. This question is not very good at first, but after thinking about it carefully, I use two hashmaps, one to store how many times each number appears, and one to store how many numbers appear N times, but there are some corner cases that need to be dealt with, such as 3 3 3 It is also legal, because after removing one 3, the other numbers (3 3) only appear twice. At first, the eldest brother didn’t speak. When I talked about ideas, he stayed silent. I didn’t know if lz was right.
// Later, I just wrote it. After the interview, I found out that this eldest brother didn’t mean to embarrass lz. He just had this personality. .
// add two string with decimals

// Given a set, return all subsets of length n. For example, given [1,2,3,4,5], n=2, then return [1,2], [2,3], [3,4] and other non-repeated subsets of size 2

// Example 1: str1 = "123.52" and str2 = "11.2", output should be "134.72"

// const addStrings = (str1, str2) => {
//   if(!str1.length && !str2.length) return "";
//   if(!str1.length || !str2.length) return str1 || str2;

//   let results = "";

//   let newString1 = str1;
//   let newString2 = str2;
//   let i = newString1.length - 1;
//   let j = newString2.length - 1;

//   const decimalIndexStr1 = newString1.indexOf('.');
//   const decimalIndexStr2 = newString2.indexOf('.');

//   if(decimalIndexStr1 !== -1 && decimalIndexStr2 !== -1){
//     let str1DecimalPlaces = str1.length - 1 - decimalIndexStr1;
//     let str2DecimalPlaces = str2.length - 1 - decimalIndexStr2;

//     if(str1DecimalPlaces > str2DecimalPlaces) {
//       let numberFill = str1DecimalPlaces - str2DecimalPlaces;
//       while(numberFill > 0){
//         newString2 += '0';
//         numberFill--;
//       };
//       j = newString2.length - 1;
//     } else if(str2DecimalPlaces > str1DecimalPlaces){
//       let numberFill = str2DecimalPlaces - str1DecimalPlaces;
//       while(numberFill > 0){
//         newString1 += '0';
//         numberFill--;
//       };
//       i = newString1.length - 1;
//     }
//   } else if(decimalIndexStr2 !== -1){
//     results += newString2.slice(decimalIndexStr2);
//     j = decimalIndexStr2 - 1;
//   } else if(decimalIndexStr1 !== -1){
//     results += newString1.slice(decimalIndexStr1);
//     i = decimalIndexStr1 - 1;
//   };

//   while(i >= 0 || j >= 0){
//     if(newString1[i] === '.'){
//       results = '.' + results;
//       i--;
//       j--;
//       continue;
//     };

//     let first = i < 0 ? 0 : newString1[i] - '0';
//     let second = j < 0 ? 0 : newString2[j] - '0';
//     let carry = 0;

//     let sum = first + second + carry;
//     if(sum < 10){
//       results = sum + results;
//       carry = 0;
//     } else {
//       results = (sum - 10) + results;
//       carry++;
//     };

//     i--;
//     j--;
//   }

//   return results;
// };

