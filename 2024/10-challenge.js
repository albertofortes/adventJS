/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let a = 0
  let instructionIndex = 0

  const input = (order, valueA, valueB) => {
    switch (order) {
      case 'MOV':
        console.log('MOV', a)
        a = valueA


        break
  
      case 'INC':
        console.log('INC', a)
        a++

        
        break
  
      case 'DEC':
        console.log('DEC', a)
        a--
 
        
        break
  
      /*case 'JMP':
        console.log('JMP', a)

 
        
        break*/
    
      default:
        break
    }
  }

  for(let i = instructionIndex; i < instructions.length; i++) {
    const [order, valueA, valueB] = instructions[i].split(' ')
    console.log(' ---> ', i, order, valueA, valueB)

    if(order === 'JMP' && a === 0) {
      console.log('JMP', a)
      i = valueB -1 
    } else {
      input(order, valueA, valueB)
    }
  }


  return a
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */