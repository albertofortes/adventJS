/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const NumericValues = el => el ? 1 : 0;

  let matches = []
  grid.map((row, i) => matches[i] =[])

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0]?.length; j++) {
      const firstRow = i === 0
      const firstCol = j === 0
      const colLimit = grid.length - 1

      let sum = 0

      sum+= !firstRow && NumericValues(grid[i-1][j])
      sum+= (!firstRow && j < colLimit) && NumericValues(grid[i-1][j+1])
      sum+= (j < colLimit) && NumericValues(grid[i][j+1])
      sum+= (i < colLimit && j < colLimit)  && NumericValues(grid[i+1][j+1])
      sum+= i < colLimit  && NumericValues(grid[i+1][j])
      sum+= (i < colLimit && !firstCol)  && NumericValues(grid[i+1][j-1])
      sum+= (!firstCol) && NumericValues(grid[i][j-1])
      sum+= (!firstRow && !firstCol) && NumericValues(grid[i-1][j-1])
    
      matches[i][j] = sum
    }
  }

  return matches
}


console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false]
]))
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]))
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]