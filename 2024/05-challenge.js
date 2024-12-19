/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  let pairs = {}
  let paired = []

  shoes.map(el => {
    if(!pairs[el.size]) pairs[el.size] = {
      'I': 0,
      'R': 0
    }
    pairs[el.size][el.type]++
  })


  for (const size in pairs) {
    if (Object.prototype.hasOwnProperty.call(pairs, size)) {
      const { I, R } = pairs[size]    
      const numberOfPairs = Math.min(I, R)

      for (let i = 0; i < numberOfPairs; i++) {
        paired.push(parseInt(size))        
      }
    }
  }

  return paired  
}


const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes));
console.log(organizeShoes(shoes2));
console.log(organizeShoes(shoes3));