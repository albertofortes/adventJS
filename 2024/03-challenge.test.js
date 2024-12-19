const { organizeInventory } = require('./03-challenge.js')

const inventory1 = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

describe('Challenge 3', () => {
  it('case 1', () => {
    expect(organizeInventory(inventory1)).toMatchObject({ toys: { doll: 5, car: 5 }, sports: { ball: 2, racket: 4 } })
  })

  it('case 2', () => {
    expect(organizeInventory(inventory2)).toMatchObject({ education: { book: 15 }, art: { paint: 3 } })
  })
})

