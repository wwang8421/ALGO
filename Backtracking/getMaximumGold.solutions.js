const getMaximumGold = (grid) => {
  let max = 0;

  const helper = (row, column, currSum = 0) => {
    if (
      row < 0 ||
      row >= grid.length ||
      column < 0 ||
      grid[row][column] === 0 ||
      column >= grid[0].length
    ) {
      return;
    } else {
      currSum += grid[row][column];
      let temp = grid[row][column];
      grid[row][column] = 0;
      max = Math.max(currSum, max);

      helper(row + 1, column, currSum);
      helper(row - 1, column, currSum);
      helper(row, column + 1, currSum);
      helper(row, column - 1, currSum);

      currSum -= grid[row][column];
      grid[row][column] = temp;
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      helper(i, j);
    }
  }

  return max;
};

const matrix = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];

console.log(getMaximumGold(matrix));
