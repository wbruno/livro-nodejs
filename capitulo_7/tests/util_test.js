/*
 * capitulo_7/util.js
 */

var assert = require('assert');
var util = require('../util');

var sum = util.arraySum([1,2,3]);
assert.equal(sum, 6);
