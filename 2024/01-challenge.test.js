const { prepareGifts } = require('./01-challenge.js')

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const gifts2 = [6, 5, 5, 5, 5]
const gifts3 = []

describe('Challenge 1', () => {
  it('case 1', () => {
    expect(prepareGifts(gifts1)).toStrictEqual([1, 2, 3, 4, 5])
  })

  it('case 2', () => {
    expect(prepareGifts(gifts2)).toStrictEqual([5, 6])
  })

  it('case 3', () => {
    expect(prepareGifts(gifts3)).toStrictEqual([])
  })
})

