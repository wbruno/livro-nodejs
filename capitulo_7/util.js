/*
 * capitulo_7/util.js
 */

var arraySum = function (arr) {
  var sum = 0;
  for(var i = 0, max = arr.length; i < max; i++) {
    sum += arr[i];
  }
  return sum;
};

module.exports = {
  arraySum: arraySum
};
