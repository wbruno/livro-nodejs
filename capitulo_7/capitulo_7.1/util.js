/*
 * capitulo_7/util.js
 */

var arraySum = function (arr) {
  return arr.reduce(function(prev, curr) {
    return prev + curr;
  });
};

module.exports = {
  arraySum: arraySum
};
