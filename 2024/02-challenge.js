const case1 = ['midu', 'madeval', 'educalvolpz']
const case2 = ['midu']
const case3 = ['a', 'bb', 'ccc']

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const longest = Math.max(...(names.map(el => el.length)))
  let output = `${'*'.repeat(longest + 4)}\n`
  names.forEach(name => output += `* ${name}${' '.repeat(longest - name.length)} *\n`)
  output += `${'*'.repeat(longest + 4)}`

  //console.log(output);
  return output
}

createFrame(case1)
createFrame(case2)
createFrame(case3)
