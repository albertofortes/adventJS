/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let output = ''

  for(let i=0; i < indices.length; i++) {
    const position = indices[i]
    let aa = (`${'~'.repeat(length)}`).split('')

    if(position > 0) {
      aa[position] = 'r'
    } else if(position < 0) {
      aa[aa.length + position] = 'r'
    }

    aa = aa.join('')

    output += `${' '.repeat(indices.length - (i+1))}${aa} /${i+1}`
    if(i !== indices.length - 1) output += `\n`
  }

  return output
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

//console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

//console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/