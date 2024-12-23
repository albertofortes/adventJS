/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  let result = []
  let temp = []

  function backtrack(start) {
    if (temp.length > 0) {
      result.push([...temp])
    }

    for (let i = start; i < gifts.length; i++) {
      temp.push(gifts[i])
      backtrack(i + 1)
      temp.pop()
    }
  }

  backtrack(0)

  return result
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]