/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let result = []

  for(let i = 0; i < s.length; i++) {
    result.length == 0 || s[i] != result[result.length-1] ? result.push(s[i]) : result.pop()
  }
    
  return result.join('')
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos*/