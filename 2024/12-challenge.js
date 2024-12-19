/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const aGifts = ornaments.split('')

  if(aGifts.includes(NaN)) return undefined

  const value = item => {
    switch (item) {
      case '*':        
        return 1
        break
      
      case 'o':        
        return 5
        break

      case '^':        
        return 10
        break
      
      case '#':        
        return 50
        break

      case '@':        
        return 100
        break
    
      default:
        break
    }
  }

  let total = 0

  for (let i = 0; i < aGifts.length; i++) {
    const val = value(aGifts[i])

    if(isNaN(val)) {
      return undefined
    } else if(i === aGifts.length -1) {
      total += val
    } else {
      total += (val < value(aGifts[i+1])) ? -1 * val : val
    }
  }

  return total      
}



console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('*o*') )   // 5  (-1 + 5 + 1)

console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es desconocido)