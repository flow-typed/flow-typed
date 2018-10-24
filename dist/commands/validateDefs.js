"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
exports.description = exports.name = void 0;

var _node = require("../lib/node");

var _npmLibDefs = require("../lib/npm/npmLibDefs");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'validate-defs';
exports.name = name;
var description = 'Validate the structure of the /definitions dir';
exports.description = description;

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    var defsDirPath, defsDirPathStat, npmLibDefs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(args._.length !== 2)) {
              _context.next = 3;
              break;
            }

            console.error('Please specify the path of the /definitions directory to be validated ' + 'as the first arg of this command.');
            return _context.abrupt("return", 1);

          case 3:
            defsDirPath = args._[1];
            _context.next = 6;
            return _node.fs.exists(defsDirPath);

          case 6:
            if (_context.sent) {
              _context.next = 9;
              break;
            }

            console.error('Error: Path does not exist: %s', defsDirPath);
            return _context.abrupt("return", 1);

          case 9:
            _context.next = 11;
            return _node.fs.stat(defsDirPath);

          case 11:
            defsDirPathStat = _context.sent;

            if (defsDirPathStat.isDirectory()) {
              _context.next = 15;
              break;
            }

            console.error('Error: Path is not a directory: %s', defsDirPath);
            return _context.abrupt("return", 1);

          case 15:
            _context.prev = 15;
            _context.next = 18;
            return (0, _npmLibDefs.getNpmLibDefs)(defsDirPath, true);

          case 18:
            npmLibDefs = _context.sent;
            console.log('All libdefs are named and structured correctly. ' + "(Found ".concat(npmLibDefs.length, ")"));
            return _context.abrupt("return", 0);

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](15);

            if (!Array.isArray(_context.t0)) {
              _context.next = 30;
              break;
            }

            _context.t0.forEach(function (error) {
              console.log('  • ' + error.message);
            });

            return _context.abrupt("return", 1);

          case 30:
            throw _context.t0;

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[15, 23]]);
  }));
  return _run.apply(this, arguments);
}