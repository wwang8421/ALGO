/*
JS doesnt come with Heap ds. You can use this one to solve so that you don't have to write your own.
But you should know how to implement your own
*/

/*
Resource to understand the basics of how heaps work. 
should prob watch whole series, its short. but this is the math behind it
https://www.youtube.com/watch?v=fJORlbOGm9Y
*/

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

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

// insert(node){
//   this.heap.push(node);

//   if(this.heap.length){
//     let curr = this.heap.length - 1;
//     let parent = Math.floor((curr - 1) / 2);

//     while(curr > 0 && this.heap[curr] < this.heap[parent]){
//       [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];

//       curr = parent;
//       parent = Math.floor((curr - 1) / 2);
//     }
//   }
// }

//   pop() {
//     let smallest = this.heap[0];

//     if(this.heap.length > 1){
//       this.heap[0] = this.heap[this.heap.length - 1];
//       this.heap.pop();
//       let curr = 0;
//       let currLeft = curr * 2 + 1;
//       let currRight = curr * 2 + 2;

//       while(this.heap[curr] > this.heap[currLeft] || this.heap[curr] > this.heap[currRight]){
//         let indexToSwap = this.heap[currLeft] > this.heap[currRight] ? currRight : currLeft;

//         [this.heap[curr], this.heap[indexToSwap]] = [this.heap[indexToSwap], this.heap[curr]];

//         curr = indexToSwap;
//         currLeft = curr * 2 + 1;
//         currRight = curr * 2 + 1;
//       }

//     } else if(this.heap.length === 1){
//       return this.heap.pop();
//     } else {
//       return null;
//     }
//     return smallest;
//   }

// }

// const heap = new MinHeap();
// heap.insert(15);
// heap.insert(4);
// heap.insert(7);
// heap.insert(1);
// heap.insert(3);
// heap.insert(2);
// heap.insert(5);
// // heap.pop();
// // heap.pop();
// // heap.insert(1);
// console.log(heap.heap);
