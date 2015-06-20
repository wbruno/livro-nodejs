/*
 * capitulo_7/util.js
 */

var arraySum = function (arr) {
  return arr.reduce(function(prev, curr) {
    return prev + (isNaN(curr) ? 0 : curr);
  });
};

var guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

module.exports = {
  arraySum: arraySum,
  guid: guid
};
