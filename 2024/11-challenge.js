/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  return filename.slice(filename.indexOf('_') + 1, filename.lastIndexOf('.'))
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename("2024120912345678_magic_wand-blueprint.jpg.grinchbackup"))
// ➞ "magic_wand-blueprint.jpg"