/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const extra = {}
  const missing = {}

  received.forEach(gift => {
    const receivedGifts = received.filter(g => g === gift).length
    const expectedGifts = expected.filter(g => g === gift).length

    if (receivedGifts > expectedGifts) {
      extra[gift] = receivedGifts - expectedGifts
    }
  })

  expected.forEach(gift => {
    const receivedGifts = received.filter(g => g === gift).length
    const expectedGifts = expected.filter(g => g === gift).length

    if (receivedGifts < expectedGifts) {
      missing[gift] = expectedGifts - receivedGifts
    }
  })

  return {
    missing,
    extra
  }
}

console.log(fixGiftList(
  ['puzzle', 'car', 'doll', 'car'], 
  ['car', 'puzzle', 'doll', 'ball']
))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
))
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
))
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
