const arraySum = (arr) => {
    let sum = 0;
    for(let i = 0, max = arr.length; i < max; i++) {
        sum += arr[i];
    }
    return sum;
}
module.exports = { arraySum }
  