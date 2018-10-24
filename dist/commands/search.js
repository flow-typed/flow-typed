"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._formatDefTable = _formatDefTable;
exports.run = run;
exports.description = exports.name = void 0;

var _libDefs = require("../lib/libDefs.js");

var _flowVersion = require("../lib/flowVersion");

var _table = require("table");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _formatDefTable(defs) {
  var formatted = [['Name', 'Package Version', 'Flow Version']].concat(defs.map(function (def) {
    return [def.pkgName, def.pkgVersionStr, (0, _flowVersion.toSemverString)(def.flowVersion)];
  }));

  if (formatted.length === 1) {
    return 'No definitions found, sorry!';
  } else {
    return '\nFound definitions:\n' + (0, _table.table)(formatted);
  }
}

var name = 'search';
exports.name = name;
var description = 'Perform a simple search (by name) of available libdefs';
exports.description = description;

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    var flowVersionStr, term, defs, filtered;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!args._ || !(args._.length > 1))) {
              _context.next = 3;
              break;
            }

            console.error('Please provide a term for which to search!');
            return _context.abrupt("return", 1);

          case 3:
            if (typeof args.flowVersion === 'string') {
              flowVersionStr = args.flowVersion;
            }

            term = args._[1];
            _context.next = 7;
            return (0, _libDefs.getCacheLibDefs)(process.stdout);

          case 7:
            defs = _context.sent;
            filtered = (0, _libDefs.filterLibDefs)(defs, {
              type: 'fuzzy',
              term: term,
              flowVersionStr: flowVersionStr
            });
            console.log(_formatDefTable(filtered));
            return _context.abrupt("return", 0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _run.apply(this, arguments);
}