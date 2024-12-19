/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  while(packages.includes('(')) {
    const openIndex = packages.lastIndexOf('(');
    const closeIndex = packages.indexOf(')', openIndex); // Find the corresponding closing parenthesis

    const toReverse = packages.slice(openIndex + 1, closeIndex)
    packages = packages.replace(`(${toReverse})`, toReverse.split('').reverse().join(''))
  }

  return packages
}


console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"