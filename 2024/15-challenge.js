/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  if(!data || !data.length) return ''

  const headers = Object.keys(data[0])
  const content = data.map(row => Object.values(row))

  const capitalize = val => String(val).charAt(0).toUpperCase() + String(val).slice(1)


  const longest = []
  headers.map((th, index) => longest.push(Math.max(th.length, ...data.map(td => `${td[th]}`.length))))

  console.log('longest: ', longest);
  

  
  const separators = `+-${('-').repeat(longest[0])}-+-${('-').repeat(longest[1])}-+`

  let output = `${separators}\n`

  output += `| ${capitalize(headers[0])}${(' ').repeat(longest[0] - headers[0].length)} | ${capitalize(headers[1])}${(' ').repeat(longest[1] - headers[1].length)} |\n${separators}\n`

  output += content.map(td => `| ${td[0]}${(' ').repeat(longest[0] - td[0].toString().length)} | ${td[1]}${(' ').repeat(longest[1] - td[1].toString().length)} |\n`).join('')
   
  output += `${separators}`

  return output
}


console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))

console.log(drawTable([
  { gift: 'Dolly', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))

console.log(drawTable([
  { id: 'midugato', isCat: true },
  { id: 'miduperro', isCat: false }
]))

console.log(drawTable([
  { id: 1, score: 95 },
  { id: 2, score: 85 }
]))

console.log(drawTable([
  { game: 'indianajones', subtitle: 'the game' },
  { game: 'pokemonblue', subtitle: '' }
]))

console.log(drawTable([
  { 0: 1, 1: 95 },
  { 0: 2, 1: 85 }
]))

console.log(drawTable([]))
console.log(drawTable())
