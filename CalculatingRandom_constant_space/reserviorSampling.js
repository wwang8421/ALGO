const findMax = (arr, stopIndex) => {
  let max = -Infinity;
  let maxIndex = -1;
  let count = 0;

  for(let i = 0; i <= 3; i++){
    if(arr[i] > max){
      count = 1;
      maxIndex = i;
      max = arr[i];
    } else if(arr[i] === max){
      count++;

      // 1 / number of counted 
      if(Math.floor(Math.random() * count) === 0){
        maxIndex = i;
      }
    };
  };

  return maxIndex;
}

const arr = [11, 30, 2, 30, 30, 30, 6, 2, 62, 62];

console.log(findMax(arr, 5));
