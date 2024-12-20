/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const extra = {}
  const missing = {}

  received.forEach(gift => {
    if (received.filter(g => g === gift).length > expected.filter(g => g === gift).length) {
      extra[gift] = received.filter(g => g === gift).length - expected.filter(g => g === gift).length
    }
  })

  expected.forEach(gift => {
    if (received.filter(g => g === gift).length < expected.filter(g => g === gift).length) {
      missing[gift] = expected.filter(g => g === gift).length - received.filter(g => g === gift).length
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
