"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consts = _interopRequireDefault(require("./consts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  sum(a, b) {
    return a + b + _consts.default.pi;
  }

};
exports.default = _default;