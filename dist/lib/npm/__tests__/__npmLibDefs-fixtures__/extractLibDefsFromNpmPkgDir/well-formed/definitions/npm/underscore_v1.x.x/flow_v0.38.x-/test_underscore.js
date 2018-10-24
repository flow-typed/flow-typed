"use strict";

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $ExpectError
_underscore.default.zip([{
  x: 1
}], [{
  x: 2,
  y: 1
}])[0][2];