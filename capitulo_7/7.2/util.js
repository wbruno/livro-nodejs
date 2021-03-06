const arraySum = (arr) => {
  return arr
    .filter(item => !isNaN(item))
    .reduce((prev, curr) => prev + curr)
}
const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
     s4() + '-' + s4() + s4() + s4()
}
const isBiggerThan = (arr, minValue) => arr.filter(item => item >= minValue)
module.exports = { arraySum, guid, isBiggerThan }
