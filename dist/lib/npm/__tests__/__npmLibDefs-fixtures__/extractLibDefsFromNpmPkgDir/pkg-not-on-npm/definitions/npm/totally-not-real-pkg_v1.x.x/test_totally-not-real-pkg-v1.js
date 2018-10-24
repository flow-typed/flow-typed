"use strict";

var _totallyNotRealPkg = _interopRequireDefault(require("totally-not-real-pkg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_totallyNotRealPkg.default.zip(['a', 'b', 'c'], ['d', 'e', 'f'])[0].length; // $ExpectError `x` property not found in Array

_totallyNotRealPkg.default.zip([{
  x: 1
}], [{
  x: 2,
  y: 1
}])[0].x;