/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
  let depth = 0
  if (typeof tree === 'object' && tree !== null) {
    for (const key in tree) {
      if (tree.hasOwnProperty(key)) {
        const tempDepth = treeHeight(tree[key])
        if (tempDepth > depth) {
          depth = tempDepth
        }
      }
    }
    depth++
  }
  return depth
}

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree))
// Devuelve: 3



console.log(treeHeight({
  value: '🎁',
  left: null,
  right: null
}))
// returns 1

console.log(treeHeight({
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: {
        value: '🎅',
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: null
}))

// returns 4

console.log(treeHeight({
  value: '🎁',
  left: {
    value: '🎄',
    left: null,
    right: null
  },
  right: {
    value: '❄️',
    left: null,
    right: null
  }
}))
// returns 2