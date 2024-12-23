/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const numsSet = new Set(nums)
  const max = Math.max(...numsSet)
  let missingNumbers = [];

  for (let i = 1; i <= max; i++) {
    if (!numsSet.has(i)) {
      missingNumbers.push(i)
    }
  }

  return missingNumbers
}


console.log(findMissingNumbers([1, 2, 4, 6]))
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]))
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]))
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))
// [4]