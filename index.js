function sumItems(array, flag) {
  if (typeof flag === 'undefined') {
    flag = [];
  }
  array.forEach(function (item) {
    if (Number.isInteger(item)) {
      flag.push(item)
    } else {
    sumItems(item, flag)
    }
  });
  var sum = flag.reduce((a, b) => a + b, 0);
  return sum
}
let array = [[1, 2, [[3], 4]], 5, []]

console.log(sumItems(array))
module.exports = sumItems;