// class Fun {
//   constructor(name) {
//     this.name = name;
//   }
//   say() {
//     console.log(this.name);
//   }
// }

/** 经 babel 转义如下 */

("use strict");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Fun = /*#__PURE__*/ (function () {
  function Fun(name) {
    _classCallCheck(this, Fun);

    this.name = name;
  }

  _createClass(Fun, [
    {
      key: "say",
      value: function say() {
        console.log(this.name);
      },
    },
  ]);

  return Fun;
})();
