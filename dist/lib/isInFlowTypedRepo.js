"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInFlowTypedRepo;

var node_path = _interopRequireWildcard(require("path"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function isInFlowTypedRepo() {
  var PATTERN = new RegExp('\\' + node_path.sep + 'flow-typed');
  return PATTERN.test(process.cwd());
}