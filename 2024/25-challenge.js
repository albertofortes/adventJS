/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let value = 0
  const instructions = code.split('')

  for (let index = 0; index < instructions.length; index++) {
    const element = instructions[index];
    
    switch (element) {
      case '+':
        value++
        break;

      case '-':
        value--
        break;

      case ']':
        const openBracket = instructions.lastIndexOf('[', index)
        const closeBracket = instructions.indexOf(']', index)
        
        if (value === 0) {          
          index = closeBracket
        } else {
          index = openBracket
        }

        break;

        case '{':
          const close = instructions.indexOf('}', index)
          
          if (value === 0) {            
            index = close 
          }
  
          break;
    
      default:
        break;
    }

    //console.log(`${index} - ${element} -> ${value}`);

  }
  
  return value
}


//console.log(execute('+++')) // 3
//console.log(execute('+--')) // -1
//console.log(execute('>+++[-]')) // 0
//console.log(execute('>>>+{++}')) // 3

console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5
