/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  let organized = {}
  
  inventory.map(el => {
    if (!organized[el.category]) organized[el.category] = {}

    if (organized[el.category][el.name]) {
      organized[el.category][el.name] += el.quantity
    } else {
      organized[el.category][el.name] = el.quantity
    }
  })
  //console.log(organized)
  
  return organized
}


const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]


console.log(organizeInventory(inventory))

module.exports = { organizeInventory }