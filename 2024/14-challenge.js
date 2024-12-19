/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  const closest = reno => stables.reduce((prev, curr) => (Math.abs(curr - reno) < Math.abs(prev - reno) ? curr : prev), stables[0])
  let sum = 0

  reindeer.map( reno  => {
    const allocation = closest(reno)

    sum += Math.abs(reno - allocation)
    stables = stables.filter(stable => stable != allocation)
  })

  return sum
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // -> 8
