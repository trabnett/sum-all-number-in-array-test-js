function sumItems(array) {
  if (typeof flag === "undefined") {
    flag = 0;
  }
  for (let item in array) {
    if (Array.isArray(array[item])) {
      sumItems(array[item])
    } else if (Number.isInteger(array[item])) {
      flag =  flag + array[item]
    }
  }
  return flag
}

let array = [[1, 2, [[3], 4]], 5, []]
console.log(sumItems(array))
module.exports = sumItems;