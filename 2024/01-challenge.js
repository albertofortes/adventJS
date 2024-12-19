/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  let uniqueGifts = [...new Set(gifts)];
  return uniqueGifts.sort((a, b) => a-b);
}

module.exports = { prepareGifts }