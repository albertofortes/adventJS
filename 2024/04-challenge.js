/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const maxNumber = (height * 2 - 1)
  const baseUnderscores = Math.floor(maxNumber / 2)
  let output = '' 

  for(let i = 1; i <= height * 2; i += 2 ) {
    const repeating = (maxNumber - i > 0) ? maxNumber - i : 0
    const underscores = Math.floor(repeating / 2)
    output += `${'_'.repeat(underscores)}${ornament.repeat(i)}${'_'.repeat(underscores)}\n`
  }

  output += `${'_'.repeat(baseUnderscores)}#${'_'.repeat(baseUnderscores)}\n${'_'.repeat(baseUnderscores)}#${'_'.repeat(baseUnderscores)}`

  return output
}


//const tree = createXmasTree(5, '*')
const tree = createXmasTree(6, '@')

console.log(tree)