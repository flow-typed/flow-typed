"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.glob = glob;
exports.pkgHasFlowFiles = pkgHasFlowFiles;
exports.createStub = createStub;

var _safe = _interopRequireDefault(require("colors/safe"));

var _npmProjectUtils = require("./npm/npmProjectUtils");

var _util = require("util");

var _node = require("./node");

var _glob = _interopRequireDefault(require("glob"));

var _fileUtils = require("./fileUtils");

var _codeSign = require("./codeSign");

var _semver = require("./semver");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function glob(pattern, options) {
  return new Promise(function (resolve, reject) {
    return (0, _glob.default)(pattern, options, function (err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function resolvePkgDirPath(_x, _x2) {
  return _resolvePkgDirPath.apply(this, arguments);
}

function _resolvePkgDirPath() {
  _resolvePkgDirPath = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(pkgName, pkgJsonDirPath) {
    var prevNodeModulesDirPath, nodeModulesDirPath, pkgDirPath;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nodeModulesDirPath = _node.path.resolve(pkgJsonDirPath, 'node_modules');

          case 1:
            if (!true) {
              _context.next = 13;
              break;
            }

            pkgDirPath = _node.path.resolve(nodeModulesDirPath, pkgName);
            _context.next = 5;
            return _node.fs.exists(pkgDirPath);

          case 5:
            if (!_context.sent) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", pkgDirPath);

          case 7:
            prevNodeModulesDirPath = nodeModulesDirPath;
            nodeModulesDirPath = _node.path.resolve(nodeModulesDirPath, '..', '..', 'node_modules');

            if (!(prevNodeModulesDirPath === nodeModulesDirPath)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("break", 13);

          case 11:
            _context.next = 1;
            break;

          case 13:
            throw new Error('Unable to find `node_modules/' + pkgName + '/` install directory! ' + 'Did you forget to run `npm install` before running `flow-typed install`?');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _resolvePkgDirPath.apply(this, arguments);
}

var moduleStubTemplate = "\ndeclare module '%s' {\n  declare module.exports: any;\n}".trim();
var aliasTemplate = "\ndeclare module '%s%s' {\n  declare module.exports: $Exports<'%s'>;\n}".trim();
var guessedModuleStubTemplate = "\ndeclare module '%s' {\n  declare module.exports: %s;\n}".trim();

function stubFor(moduleName, fileExt) {
  var moduleStub = (0, _util.format)(moduleStubTemplate, moduleName);

  if (fileExt !== undefined) {
    var aliasStub = (0, _util.format)(aliasTemplate, moduleName, fileExt, moduleName);
    return "".concat(moduleStub, "\n").concat(aliasStub);
  }

  return moduleStub;
}

var functionTemplate = '(%s) => any';

var spaceByI = function spaceByI(i) {
  return '  '.repeat(i);
};

var keyTypeTemplate = "  %s: %s,\n";

function objectToTypedTemplate(obj, currentDepth, maxDepth, functionHeader) {
  var thisDepth = currentDepth + 1;
  var formatedEntries = [];

  if (functionHeader) {
    formatedEntries.push(spaceByI(thisDepth + 1) + functionHeader);
  }

  var _arr = Object.entries(obj);

  for (var _i = 0; _i < _arr.length; _i++) {
    var entrie = _arr[_i];
    var toTypeResult = objectToType(entrie[1], maxDepth, thisDepth, thisDepth <= maxDepth);
    formatedEntries.push((0, _util.format)("".concat(spaceByI(thisDepth)).concat(keyTypeTemplate), entrie[0], toTypeResult));
  }

  if (formatedEntries.length > 0) {
    return "{\n".concat(formatedEntries.join('')).concat(spaceByI(thisDepth), "}");
  } else {
    return '{}';
  }
}

function guessFunctionArguments(fun) {
  var raw = fun.toString();
  var args = raw.slice(raw.indexOf('(') + 1, raw.indexOf(')'));
  args = args.replace(/ /g, '');

  if (args.length > 0) {
    args = args.split(',').map(function (el) {
      return "".concat(el, ": any");
    }).join(', ');
  }

  return (0, _util.format)(functionTemplate, args);
}

function functionToType(fun, currentDepth, maxDepth) {
  var output = guessFunctionArguments(fun);
  var functionEntries = Object.entries(fun);

  if (functionEntries.length > 0) {
    return objectToTypedTemplate(fun, currentDepth, maxDepth, output.length > 0 ? output + ',\n' : undefined);
  }

  return output;
}

function objectToType(obj, maxDepth) {
  var currentDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var deep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  // Every function that depends on objectToTypedTemplate need to check deep first
  if (deep) {
    if (_typeof(obj) === 'object') return objectToTypedTemplate(obj, currentDepth, maxDepth);
    if (typeof obj === 'function') return functionToType(obj, currentDepth, maxDepth);
  }

  if (_typeof(obj) === 'object') return 'any';
  if (typeof obj === 'function') return guessFunctionArguments(obj);
  return _typeof(obj);
}

function guessedStubFor(moduleName, packagePath) {
  var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var module = require(packagePath);

  var formattedTemplate = (0, _util.format)(guessedModuleStubTemplate, moduleName, objectToType(module, maxDepth));
  return formattedTemplate;
}

function writeStub(_x3, _x4, _x5, _x6, _x7, _x8, _x9) {
  return _writeStub.apply(this, arguments);
}

function _writeStub() {
  _writeStub = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(projectRoot, packageName, packageVersion, overwrite, files, libdefDir, maxDepth) {
    var output, packageFolder, _files$reduce, _files$reduce2, fileDecls, aliases, filename, exists, existingStub, flowVersionRaw, flowVersion, stubVersion;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            output = ['/**', ' * This is an autogenerated libdef stub for:', ' *', " *   '".concat(packageName, "'"), ' *', ' * Fill this stub out by replacing all the `any` types.', ' *', ' * Once filled out, we encourage you to share your work with the', ' * community by sending a pull request to:', ' * https://github.com/flowtype/flow-typed', ' */\n\n'].join('\n');
            _context2.next = 3;
            return resolvePkgDirPath(packageName, process.cwd());

          case 3:
            packageFolder = _context2.sent;

            if (packageFolder !== null && false) {
              try {
                output += guessedStubFor(packageName, packageFolder, maxDepth);
              } catch (e) {
                output += stubFor(packageName);
              }
            } else {
              output += stubFor(packageName);
            }

            if (files.length > 0) {
              output += "\n\n/**\n * We include stubs for each file inside this npm package in case you need to\n * require those files directly. Feel free to delete any files that aren't\n * needed.\n */\n";
              _files$reduce = files.reduce(function (_ref, file) {
                var _ref2 = _slicedToArray(_ref, 2),
                    fileDecls = _ref2[0],
                    aliases = _ref2[1];

                var ext = _node.path.extname(file);

                var name = file.substr(0, file.length - ext.length);
                var moduleName = "".concat(packageName, "/").concat(name);

                if (name === 'index') {
                  aliases.push((0, _util.format)(aliasTemplate, moduleName, '', packageName));
                  aliases.push((0, _util.format)(aliasTemplate, moduleName, ext, packageName));
                } else {
                  fileDecls.push((0, _util.format)(moduleStubTemplate, moduleName));
                  aliases.push((0, _util.format)(aliasTemplate, moduleName, ext, moduleName));
                }

                return [fileDecls, aliases];
              }, [[], []]), _files$reduce2 = _slicedToArray(_files$reduce, 2), fileDecls = _files$reduce2[0], aliases = _files$reduce2[1];
              output += fileDecls.join('\n\n');
              output += '\n\n// Filename aliases\n';
              output += aliases.join('\n');
            }

            output += '\n'; // File should end with a newline

            filename = _node.path.join(projectRoot, libdefDir, 'npm', (0, _util.format)('%s_vx.x.x.js', packageName));
            _context2.next = 10;
            return (0, _fileUtils.mkdirp)(_node.path.dirname(filename));

          case 10:
            if (overwrite) {
              _context2.next = 20;
              break;
            }

            _context2.next = 13;
            return _node.fs.exists(filename);

          case 13:
            exists = _context2.sent;

            if (!exists) {
              _context2.next = 20;
              break;
            }

            _context2.next = 17;
            return _node.fs.readFile(filename);

          case 17:
            existingStub = _context2.sent;

            if ((0, _codeSign.verifySignedCode)(existingStub.toString())) {
              _context2.next = 20;
              break;
            }

            throw new Error('Stub already exists and has been modified. ' + 'Use --overwrite to overwrite');

          case 20:
            _context2.next = 22;
            return (0, _npmProjectUtils.determineFlowVersion)(projectRoot);

          case 22:
            flowVersionRaw = _context2.sent;
            flowVersion = flowVersionRaw ? "/flow_".concat((0, _semver.versionToString)(flowVersionRaw)) : '';
            stubVersion = "<<STUB>>/".concat(packageName, "_v").concat(packageVersion).concat(flowVersion);
            _context2.next = 27;
            return _node.fs.writeFile(filename, (0, _codeSign.signCode)(output, stubVersion));

          case 27:
            return _context2.abrupt("return", filename);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _writeStub.apply(this, arguments);
}

function pkgHasFlowFiles(_x10, _x11) {
  return _pkgHasFlowFiles.apply(this, arguments);
}
/**
 * createStub("/path/to/root", "foo") will create a file
 * /path/to/root/flow-typed/npm/foo.js that contains a stub for the module foo.
 *
 * If foo is installed, it will read the directory that require("foo") resolves
 * to and include definitions for "foo/FILE", for every FILE in the foo package
 */


function _pkgHasFlowFiles() {
  _pkgHasFlowFiles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(projectRoot, packageName) {
    var pathToPackage, files;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return resolvePkgDirPath(packageName, projectRoot);

          case 2:
            pathToPackage = _context3.sent;
            _context3.next = 5;
            return glob('**/*.flow', {
              cwd: pathToPackage,
              ignore: 'node_modules/**'
            });

          case 5:
            files = _context3.sent;
            return _context3.abrupt("return", files.length > 0);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _pkgHasFlowFiles.apply(this, arguments);
}

function createStub(_x12, _x13, _x14, _x15, _x16, _x17) {
  return _createStub.apply(this, arguments);
}

function _createStub() {
  _createStub = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(projectRoot, packageName, explicitVersion, overwrite, libdefDir, maxDepth) {
    var files, resolutionError, pathToPackage, version, typedefDir, pkgJsonPathStr, pkgJsonData, rootDependencies, filename, terseFilename;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            files = [];
            resolutionError = null;
            pathToPackage = null;
            version = explicitVersion || null;
            typedefDir = libdefDir || 'flow-typed';
            _context4.prev = 5;
            _context4.next = 8;
            return resolvePkgDirPath(packageName, process.cwd());

          case 8:
            pathToPackage = _context4.sent;
            _context4.next = 11;
            return glob('**/*.{js,jsx}', {
              cwd: pathToPackage,
              ignore: 'node_modules/**'
            });

          case 11:
            files = _context4.sent;
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](5);
            resolutionError = _context4.t0;

          case 17:
            // Try to deduce a version if one isn't provided
            if (version == null) {
              // Look at the package.json for the installed module
              if (pathToPackage != null) {
                try {
                  version = require(_node.path.join(pathToPackage, 'package.json')).version;
                } catch (e) {}
              }
            } // If that failed, try looking for a package.json in the root


            if (!(version == null)) {
              _context4.next = 34;
              break;
            }

            _context4.prev = 19;
            _context4.next = 22;
            return (0, _npmProjectUtils.findPackageJsonPath)(projectRoot);

          case 22:
            pkgJsonPathStr = _context4.sent;
            _context4.next = 25;
            return (0, _npmProjectUtils.getPackageJsonData)(pkgJsonPathStr);

          case 25:
            pkgJsonData = _context4.sent;
            _context4.next = 28;
            return (0, _npmProjectUtils.getPackageJsonDependencies)(pkgJsonData, []);

          case 28:
            rootDependencies = _context4.sent;
            version = rootDependencies[packageName] || null;
            _context4.next = 34;
            break;

          case 32:
            _context4.prev = 32;
            _context4.t1 = _context4["catch"](19);

          case 34:
            _context4.prev = 34;

            if (!(version === null)) {
              _context4.next = 37;
              break;
            }

            throw new Error('Could not deduce version from node_modules or package.json. ' + 'Please provide an explicit version');

          case 37:
            _context4.next = 39;
            return writeStub(projectRoot, packageName, version, overwrite, files, typedefDir, maxDepth);

          case 39:
            filename = _context4.sent;
            terseFilename = _node.path.relative(projectRoot, filename);
            console.log(_safe.default.bold('  • %s@%s\n' + '    └> %s'), packageName, version, _safe.default.red(terseFilename));

            if (resolutionError) {
              console.log(_safe.default.yellow("\t  Unable to stub all files in '%s', " + 'so only created a stub for the main module (%s)'), packageName, resolutionError.message);
            }

            return _context4.abrupt("return", true);

          case 46:
            _context4.prev = 46;
            _context4.t2 = _context4["catch"](34);
            console.log(_safe.default.red("❌\t%s%s': %s"), packageName, version ? '@' + version : '', _context4.t2.message);
            return _context4.abrupt("return", false);

          case 50:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[5, 14], [19, 32], [34, 46]]);
  }));
  return _createStub.apply(this, arguments);
}