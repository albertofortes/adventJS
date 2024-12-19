/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const long = box.length

  if(!long || box === null) return false
  
  if(box[0].lastIndexOf('*') >= 0 || box[long-1].lastIndexOf('*') >= 0) return false

  for (let i = 1; i < long-1; i++) {
    const numberOfCharacters = box[i].length 
    if(box[i].lastIndexOf('*') == 0 || box[i].lastIndexOf('*') == numberOfCharacters - 1) return false

    for (let j = 1; j < numberOfCharacters - 1; j++) {      
      if(box[i][j] == '*') return true
    }
  }

  return false
}

console.log(inBox([
  "###",
  "#*#",
  "###"
])) // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])) // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false

console.log(inBox([
  "#*#",
  "#*#",
  "###"
])) // ➞ false

console.log(inBox([])) // ➞ false

console.log(inBox([
  ""
])) // ➞ false

console.log(inBox([
  "*"
])) // ➞ false

console.log(inBox([
  "#"
])) // ➞ false

console.log(inBox({})) // ➞ false