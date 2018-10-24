#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runCLI = runCLI;

var _yargs = _interopRequireDefault(require("yargs"));

var _node = require("./lib/node.js");

var Install = _interopRequireWildcard(require("./commands/install.js"));

var CreateStub = _interopRequireWildcard(require("./commands/create-stub.js"));

var RunTests = _interopRequireWildcard(require("./commands/runTests.js"));

var Search = _interopRequireWildcard(require("./commands/search.js"));

var Update = _interopRequireWildcard(require("./commands/update.js"));

var UpdateCache = _interopRequireWildcard(require("./commands/update-cache"));

var ValidateDefs = _interopRequireWildcard(require("./commands/validateDefs.js"));

var Version = _interopRequireWildcard(require("./commands/version.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (!global.__flowTypedBabelPolyfill) {
  require('@babel/polyfill');

  global.__flowTypedBabelPolyfill = true;
}

var identity = function identity(x) {
  return x;
};

function runCLI() {
  var commands = [CreateStub, Install, RunTests, Search, Update, UpdateCache, ValidateDefs, Version];
  commands.reduce(function (cmdYargs, cmd) {
    return cmdYargs.command(cmd.name, cmd.description, cmd.setup || identity, function (args) {
      return cmd.run(args, _yargs.default).catch(function (err) {
        if (err.stack) {
          console.log('UNCAUGHT ERROR: %s', err.stack);
        } else if (_typeof(err) === 'object' && err !== null) {
          console.log('UNCAUGHT ERROR: %s', JSON.stringify(err, null, 2));
        } else {
          console.log('UNCAUGHT ERROR:', err);
        }

        process.exit(1);
      }).then(function (code) {
        return process.exit(code);
      });
    });
  }, _yargs.default).demand(1).strict().help('h').alias('h', 'help').argv;
}
/**
 * Look to see if the CWD is within an npm project. If it is, and that project
 * has a flow-typed CLI `npm install`ed, use that version instead of the global
 * version of the CLI.
 */


if (require.main === module) {
  var CWD = process.cwd();
  var currDir = CWD;
  var lastDir = null;

  while (currDir !== lastDir) {
    var localCLIPath = _node.path.join(currDir, 'node_modules', '.bin', 'flow-typed');

    try {
      if (_node.fs.statSync(localCLIPath).isFile()) {
        exports.runCLI = runCLI = require.call(null, localCLIPath).runCLI;
        break;
      }
    } catch (e) {
      /* File doesn't exist, move up a dir... */
    }

    lastDir = currDir;
    currDir = _node.path.resolve(currDir, '..');
  }

  runCLI();
}