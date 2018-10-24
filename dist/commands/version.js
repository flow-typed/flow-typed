"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
exports.run = run;
exports.description = exports.name = void 0;

var _node = require("../lib/node.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'version';
exports.name = name;
var description = 'Print the CLI version';
exports.description = description;

function setup(yargs) {
  return yargs.options({
    showDelegatorVersion: {
      alias: 'g',
      demand: false,
      describe: 'Include info about the globally-installed CLI package ' + 'if it has delegated to a locally-installed one',
      type: 'boolean'
    }
  }).strict();
}

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(argv) {
    var runningCliVersion, suffix, executedCLIPkgJsonPath, executedCLIVersion;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            runningCliVersion = require('../../package.json').version;
            suffix = '';

            if (argv.showDelegatorVersion) {
              executedCLIPkgJsonPath = _node.path.resolve(require.main.filename, '..', '..', 'package.json');
              executedCLIVersion = require.call(null, executedCLIPkgJsonPath).version;
              suffix = "\n(delegated from global flow-typed@".concat(executedCLIVersion, ")");
            }

            console.log("flow-typed@".concat(runningCliVersion).concat(suffix));
            return _context.abrupt("return", 0);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _run.apply(this, arguments);
}