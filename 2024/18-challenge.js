/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const entries = agenda.split('\n').map(entry => entry.trim())
  let matches = []

  entries.forEach((entry, index) => {
    const phoneRegex = /\+?\d+-?\d+-?\d+-?\d+/g
    const phones = entry.match(phoneRegex) || []
    phones.filter(phone => phone.indexOf('+') === 0)

    if (phones.some(p => p.includes(phone))) {
      const nameMatch = entry.match(/<([^>]+)>/)
      if (nameMatch) {
        const name = nameMatch[1]
        const address = entry.replace(phones[index], '').replace(/<[^>]+>/, '').trim()
        
        matches.push({ name, address })
      }
    }
  })

  if (matches.length === 0) {
    return null
  } else if (matches.length > 1) {
    return null
  } else {
    return matches[0]
  }
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '800-555'))
// { name: "Carlos Ruiz", address: "Fifth Ave New York" }



console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados