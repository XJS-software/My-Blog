"use strict";

var _math = _interopRequireDefault(require("./math.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('start');

var sum = _math.default.sum(1, 2);

console.log('sum: ', sum);
console.log('end');