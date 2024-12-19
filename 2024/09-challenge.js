/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const positionY = board.findIndex(el => el.includes('@'))
  const positionX = board[positionY] && board[positionY].indexOf('@')

  const checker = character => {
    switch (character) {
      case '*':
        return 'eat'
        break
      
      case '·':
        return 'none'
        break
    
      default:
        return 'crash'
        break
    }
  }

  const next = movement => {
    switch (movement) {
      case 'U':
        return board[positionY - 1]?.[positionX]
        break
  
      case 'D':
        return board[positionY + 1]?.[positionX]
        break
  
      case 'L':
        return board[positionY]?.[positionX - 1]
        break
  
      case 'R':
        return board[positionY]?.[positionX + 1]
        break
    
      default:
        return false
        break
    }
  }


  return checker(next(mov)) 
}



const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

const no = [
  '·····',
  '·@···'
]


console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha

console.log(moveTrain(board, 'P')) // -> false

console.log(moveTrain(no, 'R'))