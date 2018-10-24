"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.setup = exports.description = exports.name = void 0;

var Install = _interopRequireWildcard(require("./install"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'update';
exports.name = name;
var description = 'Download updates for any installed libdefs. (Note: This is just an alias ' + 'of `flow-typed install --overwrite`)';
exports.description = description;
var setup = Install.setup;
exports.setup = setup;

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args.overwrite = true;
            return _context.abrupt("return", Install.run(args));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _run.apply(this, arguments);
}