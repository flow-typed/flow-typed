"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
exports.run = run;
exports.description = exports.name = void 0;

var _cacheRepoUtils = require("../lib/cacheRepoUtils");

var _node = require("../lib/node");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'update-cache';
exports.name = name;
var description = 'Update the flow-typed definitions cache';
exports.description = description;

function setup(yargs) {
  return yargs.usage("$0 ".concat(name, " - ").concat(description)).options({
    cacheDir: {
      alias: 'c',
      describe: 'Directory (absolute or relative path, ~ is not supported) to store cache of libdefs',
      type: 'string',
      demand: false
    }
  });
}

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    var cacheDir;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (typeof args.cacheDir === 'string') {
              cacheDir = _node.path.resolve(args.cacheDir);
              console.log('• Setting cache dir', cacheDir);
              (0, _cacheRepoUtils._setCustomCacheDir)(cacheDir);
            }

            console.log('Updating flow-typed definitions...');
            _context.next = 5;
            return (0, _cacheRepoUtils.ensureCacheRepo)();

          case 5:
            console.log('Definitions update successful!');
            return _context.abrupt("return", 0);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error("Update failed: ".concat(_context.t0.message));
            return _context.abrupt("return", 1);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));
  return _run.apply(this, arguments);
}