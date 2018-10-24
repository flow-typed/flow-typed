"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
exports.run = run;
exports.description = exports.name = void 0;

var _stubUtils = require("../lib/stubUtils.js");

var _flowProjectUtils = require("../lib/flowProjectUtils.js");

var _node = require("../lib/node");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'create-stub';
exports.name = name;
var description = 'Create a libdef stub for an untyped npm package';
exports.description = description;

function setup(yargs) {
  return yargs.usage("$0 ".concat(name, " ...PACKAGE")).options({
    overwrite: {
      default: false,
      alias: 'o',
      describe: 'Overwrite an existing stub if it is already present in the ' + '`flow-typed` directory and has been modified',
      type: 'bool',
      demand: false
    },
    maxDepth: {
      alias: 'd',
      describe: 'Allow to generate deeper template',
      type: 'number',
      demand: false
    },
    libdefDir: {
      default: 'flow-typed',
      alias: 'l',
      describe: 'Use a custom directory to install libdefs',
      type: 'string',
      demand: false
    },
    rootDir: {
      alias: 'r',
      describe: 'Directory of .flowconfig relative to node_modules',
      type: 'string'
    }
  }).example('$0 create-stub foo@^1.2.0').example('$0 create-stub foo bar baz').help('h');
}

function failWithMessage(message) {
  console.error(message);
  return 1;
}

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    var packages, cwd, projectRoot, plural, results;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!Array.isArray(args._) || args._.length < 2)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", failWithMessage('Please provide the names of one or more npm packages'));

          case 2:
            packages = args._.slice(1);
            cwd = typeof args.rootDir === 'string' ? _node.path.resolve(args.rootDir) : process.cwd(); // Find the project root

            _context.next = 6;
            return (0, _flowProjectUtils.findFlowRoot)(cwd);

          case 6:
            projectRoot = _context.sent;

            if (!(projectRoot == null)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", failWithMessage("\nERROR: Unable to find a flow project in the current dir or any of " + "it's parents!\nPlease run this command from within a Flow project."));

          case 9:
            plural = packages.length > 1 ? 'stubs' : 'stub';
            console.log("\u2022 Creating ".concat(packages.length, " ").concat(plural, "..."));
            _context.next = 13;
            return Promise.all(packages.map(function (pkg) {
              var version = null;
              /* Four cases to consider
               * packageName
               * packageName@version
               * @scoped/packageName
               * @scoped/packageName@version
               */

              var parts = pkg.split(/@/);
              var packageName = parts[0];

              if (parts[0] === '') {
                // Scoped package
                packageName = '@' + parts[1];
                parts = parts.slice(1);
              }

              if (parts.length > 1) {
                version = parts[1];
              }

              return (0, _stubUtils.createStub)(projectRoot, packageName, version, Boolean(args.overwrite), String(args.libdefDir), Number(args.maxDepth));
            }));

          case 13:
            results = _context.sent;
            return _context.abrupt("return", results.every(Boolean) ? 0 : 1);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _run.apply(this, arguments);
}