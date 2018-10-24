"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
exports.run = run;
exports._determineFlowVersion = determineFlowVersion;
exports._installNpmLibDefs = installNpmLibDefs;
exports._installNpmLibDef = installNpmLibDef;
exports.description = exports.name = void 0;

var _codeSign = require("../lib/codeSign");

var _fileUtils = require("../lib/fileUtils");

var _flowProjectUtils = require("../lib/flowProjectUtils");

var _flowVersion = require("../lib/flowVersion");

var _node = require("../lib/node");

var _npmLibDefs = require("../lib/npm/npmLibDefs");

var _npmProjectUtils = require("../lib/npm/npmProjectUtils");

var _cacheRepoUtils = require("../lib/cacheRepoUtils");

var _semver = require("../lib/semver");

var _safe = _interopRequireDefault(require("colors/safe"));

var _semver2 = _interopRequireDefault(require("semver"));

var _stubUtils = require("../lib/stubUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'install';
exports.name = name;
var description = 'Installs libdefs into the ./flow-typed directory';
exports.description = description;

function setup(yargs) {
  return yargs.usage("$0 ".concat(name, " - ").concat(description)).options({
    flowVersion: {
      alias: 'f',
      describe: 'The Flow version that fetched libdefs must be compatible ' + 'with',
      type: 'string'
    },
    verbose: {
      describe: 'Print additional, verbose info while installing libdefs',
      type: 'boolean',
      demand: false
    },
    skip: {
      alias: 's',
      describe: 'Do not generate stubs for missing libdefs',
      type: 'boolean',
      demand: false
    },
    libdefDir: {
      alias: 'l',
      describe: 'Use a custom directory to install libdefs',
      type: 'string',
      demand: false
    },
    cacheDir: {
      alias: 'c',
      describe: 'Directory (absolute or relative path, ~ is not supported) to store cache of libdefs',
      type: 'string',
      demand: false
    },
    packageDir: {
      alias: 'p',
      describe: 'The relative path of package.json where flow-bin is installed',
      type: 'string'
    },
    ignoreDeps: {
      alias: 'i',
      describe: 'Dependency categories to ignore when installing definitions',
      type: 'array'
    },
    rootDir: {
      alias: 'r',
      describe: 'Directory of .flowconfig relative to node_modules',
      type: 'string'
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
    var cwd, packageDir, flowVersion, libdefDir, explicitLibDefs, ignoreDeps, coreLibDefResult, cacheDir, npmLibDefResult;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cwd = typeof args.rootDir === 'string' ? _node.path.resolve(args.rootDir) : process.cwd();
            packageDir = typeof args.packageDir === 'string' ? _node.path.resolve(args.packageDir) : cwd;
            _context.next = 4;
            return determineFlowVersion(packageDir, args.flowVersion);

          case 4:
            flowVersion = _context.sent;
            libdefDir = typeof args.libdefDir === 'string' ? args.libdefDir : 'flow-typed';
            explicitLibDefs = args._.slice(1);

            if (!(args.ignoreDeps !== undefined && !Array.isArray(args.ignoreDeps))) {
              _context.next = 9;
              break;
            }

            throw new Error('ignoreDeps is not array');

          case 9:
            ignoreDeps = (args.ignoreDeps || []).map(function (dep) {
              if (typeof dep !== 'string') {
                throw new Error('ignoreDeps should be array of strings');
              }

              return dep;
            });
            _context.next = 12;
            return installCoreLibDefs();

          case 12:
            coreLibDefResult = _context.sent;

            if (!(coreLibDefResult !== 0)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", coreLibDefResult);

          case 15:
            if (args.cacheDir) {
              cacheDir = _node.path.resolve(String(args.cacheDir));
              console.log('• Setting cache dir', cacheDir);
              (0, _cacheRepoUtils._setCustomCacheDir)(cacheDir);
            }

            _context.next = 18;
            return installNpmLibDefs({
              cwd: cwd,
              flowVersion: flowVersion,
              explicitLibDefs: explicitLibDefs,
              libdefDir: libdefDir,
              verbose: Boolean(args.verbose),
              overwrite: Boolean(args.overwrite),
              skip: Boolean(args.skip),
              ignoreDeps: ignoreDeps
            });

          case 18:
            npmLibDefResult = _context.sent;

            if (!(npmLibDefResult !== 0)) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", npmLibDefResult);

          case 21:
            return _context.abrupt("return", 0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _run.apply(this, arguments);
}

function determineFlowVersion(_x2, _x3) {
  return _determineFlowVersion.apply(this, arguments);
}

function _determineFlowVersion() {
  _determineFlowVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(cwd, flowVersionArg) {
    var flowVersionStr;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(flowVersionArg && typeof flowVersionArg === 'string')) {
              _context2.next = 6;
              break;
            }

            // Be permissive if the prefix 'v' is left off
            flowVersionStr = flowVersionArg[0] === 'v' ? flowVersionArg : "v".concat(flowVersionArg);

            if (/^v[0-9]+\.[0-9]+$/.test(flowVersionStr)) {
              flowVersionStr = "".concat(flowVersionStr, ".0");
            }

            return _context2.abrupt("return", {
              kind: 'specific',
              ver: (0, _flowVersion.parseFlowSpecificVer)(flowVersionStr)
            });

          case 6:
            _context2.next = 8;
            return (0, _npmProjectUtils.findFlowSpecificVer)(cwd);

          case 8:
            _context2.t0 = _context2.sent;
            return _context2.abrupt("return", {
              kind: 'specific',
              ver: _context2.t0
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _determineFlowVersion.apply(this, arguments);
}

function installCoreLibDefs() {
  return _installCoreLibDefs.apply(this, arguments);
}

function _installCoreLibDefs() {
  _installCoreLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", 0);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _installCoreLibDefs.apply(this, arguments);
}

var FLOW_BUILT_IN_NPM_LIBS = ['react', 'react-dom'];

function installNpmLibDefs(_x4) {
  return _installNpmLibDefs.apply(this, arguments);
}

function _installNpmLibDefs() {
  _installNpmLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(_ref) {
    var cwd, flowVersion, explicitLibDefs, libdefDir, verbose, overwrite, skip, ignoreDeps, flowProjectRoot, libdefsToSearchFor, i, term, termMatches, pkgJsonData, pkgJsonDeps, packageVersion, _termMatches, _, npmScope, pkgName, pkgVerStr, scopedPkgName, _pkgJsonData, _pkgJsonDeps, _pkgName, libDefsToSearchForEntries, libDefsToInstall, outdatedLibDefsToInstall, unavailableLibDefs, libDefsToUninstall, alreadyInstalledLibDefs, flowTypedDirPath, results, untypedMissingLibDefs, typedMissingLibDefs, plural;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            cwd = _ref.cwd, flowVersion = _ref.flowVersion, explicitLibDefs = _ref.explicitLibDefs, libdefDir = _ref.libdefDir, verbose = _ref.verbose, overwrite = _ref.overwrite, skip = _ref.skip, ignoreDeps = _ref.ignoreDeps;
            _context8.next = 3;
            return (0, _flowProjectUtils.findFlowRoot)(cwd);

          case 3:
            flowProjectRoot = _context8.sent;

            if (!(flowProjectRoot === null)) {
              _context8.next = 7;
              break;
            }

            console.error('Error: Unable to find a flow project in the current dir or any of ' + "it's parent dirs!\n" + 'Please run this command from within a Flow project.');
            return _context8.abrupt("return", 1);

          case 7:
            libdefsToSearchFor = new Map(); // If a specific pkg/version was specified, only add those packages.
            // Otherwise, extract dependencies from the package.json

            if (!(explicitLibDefs.length > 0)) {
              _context8.next = 36;
              break;
            }

            i = 0;

          case 10:
            if (!(i < explicitLibDefs.length)) {
              _context8.next = 33;
              break;
            }

            term = explicitLibDefs[i];
            termMatches = term.match(/(@[^@\/]+\/)?([^@]+)@(.+)/);

            if (!(termMatches == null)) {
              _context8.next = 27;
              break;
            }

            _context8.next = 16;
            return (0, _npmProjectUtils.getPackageJsonData)(cwd);

          case 16:
            pkgJsonData = _context8.sent;
            pkgJsonDeps = (0, _npmProjectUtils.getPackageJsonDependencies)(pkgJsonData, []);
            packageVersion = pkgJsonDeps[term];

            if (!packageVersion) {
              _context8.next = 23;
              break;
            }

            libdefsToSearchFor.set(term, packageVersion);
            _context8.next = 25;
            break;

          case 23:
            console.error('ERROR: Package not found from package.json.\n' + 'Please specify version for the package in the format of `foo@1.2.3`');
            return _context8.abrupt("return", 1);

          case 25:
            _context8.next = 30;
            break;

          case 27:
            _termMatches = _slicedToArray(termMatches, 4), _ = _termMatches[0], npmScope = _termMatches[1], pkgName = _termMatches[2], pkgVerStr = _termMatches[3];
            scopedPkgName = npmScope != null ? npmScope + pkgName : pkgName;
            libdefsToSearchFor.set(scopedPkgName, pkgVerStr);

          case 30:
            i++;
            _context8.next = 10;
            break;

          case 33:
            console.log("\u2022 Searching for ".concat(libdefsToSearchFor.size, " libdefs..."));
            _context8.next = 45;
            break;

          case 36:
            _context8.next = 38;
            return (0, _npmProjectUtils.getPackageJsonData)(cwd);

          case 38:
            _pkgJsonData = _context8.sent;
            _pkgJsonDeps = (0, _npmProjectUtils.getPackageJsonDependencies)(_pkgJsonData, ignoreDeps);

            for (_pkgName in _pkgJsonDeps) {
              libdefsToSearchFor.set(_pkgName, _pkgJsonDeps[_pkgName]);
            }

            if (!(libdefsToSearchFor.size === 0)) {
              _context8.next = 44;
              break;
            }

            console.error("No dependencies were found in this project's package.json!");
            return _context8.abrupt("return", 0);

          case 44:
            if (verbose) {
              libdefsToSearchFor.forEach(function (ver, name) {
                console.log("\u2022 Found package.json dependency: ".concat(name, "@").concat(ver));
              });
            } else {
              console.log("\u2022 Found ".concat(libdefsToSearchFor.size, " dependencies in package.json to ") + "install libdefs for. Searching...");
            }

          case 45:
            libDefsToSearchForEntries = _toConsumableArray(libdefsToSearchFor.entries()); // Search for the requested libdefs

            libDefsToInstall = new Map();
            outdatedLibDefsToInstall = [];
            unavailableLibDefs = [];
            _context8.next = 51;
            return Promise.all(libDefsToSearchForEntries.map(
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(_ref2) {
                var _ref4, name, ver, libDef, libDefLower, depLower;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _ref4 = _slicedToArray(_ref2, 2), name = _ref4[0], ver = _ref4[1];

                        if (!(FLOW_BUILT_IN_NPM_LIBS.indexOf(name) !== -1)) {
                          _context4.next = 3;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 3:
                        _context4.next = 5;
                        return (0, _npmLibDefs.findNpmLibDef)(name, ver, flowVersion);

                      case 5:
                        libDef = _context4.sent;

                        if (libDef === null) {
                          unavailableLibDefs.push({
                            name: name,
                            ver: ver
                          });
                        } else {
                          libDefsToInstall.set(name, libDef); // If the libdef is outdated (but still compatible), note this so we can
                          // warn the user

                          libDefLower = (0, _semver.getRangeLowerBound)(libDef.version);
                          depLower = (0, _semver.getRangeLowerBound)(ver);

                          if (_semver2.default.lt(libDefLower, depLower)) {
                            outdatedLibDefsToInstall.push([libDef, {
                              name: name,
                              ver: ver
                            }]);
                          }
                        }

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));

              return function (_x8) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 51:
            // Scan libdefs that are already installed
            libDefsToUninstall = new Map();
            _context8.next = 54;
            return (0, _npmLibDefs.getInstalledNpmLibDefs)(_node.path.join(flowProjectRoot), libdefDir);

          case 54:
            alreadyInstalledLibDefs = _context8.sent;

            _toConsumableArray(alreadyInstalledLibDefs.entries()).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  filePath = _ref6[0],
                  npmLibDef = _ref6[1];

              var fullFilePath = _node.path.join(flowProjectRoot, filePath);

              switch (npmLibDef.kind) {
                case 'LibDef':
                  // If a libdef is already installed for some dependency, we need to
                  // uninstall it before installing the new (potentially updated) ver
                  var libDef = npmLibDef.libDef;

                  var _scopedPkgName = (0, _npmLibDefs.getScopedPackageName)(libDef);

                  if (libDefsToInstall.has(_scopedPkgName)) {
                    libDefsToUninstall.set(_scopedPkgName, fullFilePath);
                  }

                  break;

                case 'Stub':
                  break;

                default:
                  npmLibDef;
              }
            });

            if (!(libDefsToInstall.size > 0)) {
              _context8.next = 66;
              break;
            }

            console.log("\u2022 Installing ".concat(libDefsToInstall.size, " libDefs..."));
            flowTypedDirPath = _node.path.join(flowProjectRoot, libdefDir, 'npm');
            _context8.next = 61;
            return (0, _fileUtils.mkdirp)(flowTypedDirPath);

          case 61:
            _context8.next = 63;
            return Promise.all(_toConsumableArray(libDefsToInstall.values()).map(
            /*#__PURE__*/
            function () {
              var _ref7 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5(libDef) {
                var toUninstall;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        toUninstall = libDefsToUninstall.get((0, _npmLibDefs.getScopedPackageName)(libDef));

                        if (!(toUninstall != null)) {
                          _context5.next = 4;
                          break;
                        }

                        _context5.next = 4;
                        return _node.fs.unlink(toUninstall);

                      case 4:
                        return _context5.abrupt("return", installNpmLibDef(libDef, flowTypedDirPath, overwrite));

                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              return function (_x9) {
                return _ref7.apply(this, arguments);
              };
            }()));

          case 63:
            results = _context8.sent;

            if (!results.some(function (res) {
              return !res;
            })) {
              _context8.next = 66;
              break;
            }

            return _context8.abrupt("return", 1);

          case 66:
            if ((verbose || unavailableLibDefs.length === 0) && outdatedLibDefsToInstall.length > 0) {
              console.log('• The following installed libdefs are compatible with your ' + 'dependencies, but may not include all minor and patch changes for ' + 'your specific dependency version:\n');
              outdatedLibDefsToInstall.forEach(function (_ref8) {
                var _ref9 = _slicedToArray(_ref8, 2),
                    libDef = _ref9[0],
                    _ref9$ = _ref9[1],
                    pkgName = _ref9$.name,
                    pkgVersion = _ref9$.ver;

                console.log('  • libdef: %s (satisfies %s)', _safe.default.yellow("".concat(libDef.name, "_").concat(libDef.version)), _safe.default.bold("".concat(pkgName, "@").concat(pkgVersion)));
                var libDefPlural = outdatedLibDefsToInstall.length > 1 ? ['versioned updates', 'these packages'] : ['a versioned update', 'this package'];
                console.log("\n" + "  Consider submitting ".concat(libDefPlural[0], " for ").concat(libDefPlural[1], " to \n") + "  https://github.com/flowtype/flow-typed/\n");
              });
            }

            if (!(unavailableLibDefs.length > 0 && unavailableLibDefs.length === explicitLibDefs.length)) {
              _context8.next = 72;
              break;
            }

            // If the user specified an explicit library to be installed, don't generate
            // a stub if no libdef exists -- just inform them that one doesn't exist
            console.log(_safe.default.red("!! No flow@".concat((0, _flowVersion.toSemverString)(flowVersion), "-compatible libdefs ") + "found in flow-typed for the explicitly requested libdefs. !!") + '\n' + '\n' + 'Consider using `%s` to generate an empty libdef that you can fill in.', _safe.default.bold("flow-typed create-stub ".concat(explicitLibDefs.join(' '))));
            return _context8.abrupt("return", 1);

          case 72:
            // If a package that's missing a flow-typed libdef has any .flow files,
            // we'll skip generating a stub for it.
            untypedMissingLibDefs = [];
            typedMissingLibDefs = [];
            _context8.next = 76;
            return Promise.all(unavailableLibDefs.map(
            /*#__PURE__*/
            function () {
              var _ref11 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6(_ref10) {
                var pkgName, pkgVer, hasFlowFiles;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        pkgName = _ref10.name, pkgVer = _ref10.ver;
                        _context6.next = 3;
                        return (0, _stubUtils.pkgHasFlowFiles)(cwd, pkgName);

                      case 3:
                        hasFlowFiles = _context6.sent;

                        if (hasFlowFiles) {
                          typedMissingLibDefs.push([pkgName, pkgVer]);
                        } else {
                          untypedMissingLibDefs.push([pkgName, pkgVer]);
                        }

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              return function (_x10) {
                return _ref11.apply(this, arguments);
              };
            }()));

          case 76:
            if (!(untypedMissingLibDefs.length > 0 && !skip)) {
              _context8.next = 83;
              break;
            }

            console.log('• Generating stubs for untyped dependencies...');
            _context8.next = 80;
            return Promise.all(untypedMissingLibDefs.map(
            /*#__PURE__*/
            function () {
              var _ref13 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee7(_ref12) {
                var _ref14, pkgName, pkgVerStr;

                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _ref14 = _slicedToArray(_ref12, 2), pkgName = _ref14[0], pkgVerStr = _ref14[1];
                        _context7.next = 3;
                        return (0, _stubUtils.createStub)(flowProjectRoot, pkgName, pkgVerStr, overwrite, libdefDir);

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));

              return function (_x11) {
                return _ref13.apply(this, arguments);
              };
            }()));

          case 80:
            console.log(_safe.default.red("\n!! No flow@".concat((0, _flowVersion.toSemverString)(flowVersion), "-compatible libdefs ") + "found in flow-typed for the above untyped dependencies !!"));
            plural = unavailableLibDefs.length > 1 ? ['libdefs', 'these packages', 'them'] : ['a libdef', 'this package', 'it'];
            console.log("\n" + "I've generated ".concat('`', "any", '`', "-typed stubs for ", plural[1], ", but ") + "consider submitting \n" + "".concat(plural[0], " for ").concat(plural[2], " to ") + "".concat(_safe.default.bold('https://github.com/flowtype/flow-typed/'), "\n"));

          case 83:
            return _context8.abrupt("return", 0);

          case 84:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _installNpmLibDefs.apply(this, arguments);
}

function installNpmLibDef(_x5, _x6, _x7) {
  return _installNpmLibDef.apply(this, arguments);
}

function _installNpmLibDef() {
  _installNpmLibDef = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(npmLibDef, npmDir, overwrite) {
    var scopedDir, fileName, filePath, terseFilePath, repoVersion, codeSignPreprocessor, stubName, stubPath;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            scopedDir = npmLibDef.scope === null ? npmDir : _node.path.join(npmDir, npmLibDef.scope);
            (0, _fileUtils.mkdirp)(scopedDir);
            fileName = "".concat(npmLibDef.name, "_").concat(npmLibDef.version, ".js");
            filePath = _node.path.join(scopedDir, fileName); // Find the libDef in the cached repo

            _context9.prev = 4;
            terseFilePath = _node.path.relative(_node.path.resolve(npmDir, '..', '..'), filePath);
            _context9.t0 = !overwrite;

            if (!_context9.t0) {
              _context9.next = 11;
              break;
            }

            _context9.next = 10;
            return _node.fs.exists(filePath);

          case 10:
            _context9.t0 = _context9.sent;

          case 11:
            if (!_context9.t0) {
              _context9.next = 14;
              break;
            }

            console.error('  • %s\n' + '    %s\n    %s\n    └> %s', _safe.default.bold(_safe.default.red("".concat(terseFilePath, " already exists and appears to have been manually ") + "written or changed!")), _safe.default.green("Consider contributing your changes back to flow-typed repository :)"), "Read more at https://github.com/flowtype/flow-typed/wiki/Contributing-Library-Definitions", 'Use --overwrite to overwrite the existing libdef.');
            return _context9.abrupt("return", true);

          case 14:
            _context9.next = 16;
            return (0, _npmLibDefs.getNpmLibDefVersionHash)((0, _cacheRepoUtils.getCacheRepoDir)(), npmLibDef);

          case 16:
            repoVersion = _context9.sent;
            codeSignPreprocessor = (0, _codeSign.signCodeStream)(repoVersion);
            _context9.next = 20;
            return (0, _fileUtils.copyFile)(npmLibDef.path, filePath, codeSignPreprocessor);

          case 20:
            console.log(_safe.default.bold('  • %s\n' + '    └> %s'), fileName, _safe.default.green(".".concat(_node.path.sep).concat(terseFilePath))); // Remove any lingering stubs

            console.log(npmLibDef.name);
            console.log(scopedDir);
            stubName = "".concat(npmLibDef.name, "_vx.x.x.js");
            stubPath = _node.path.join(scopedDir, stubName);
            _context9.t1 = overwrite;

            if (!_context9.t1) {
              _context9.next = 30;
              break;
            }

            _context9.next = 29;
            return _node.fs.exists(stubPath);

          case 29:
            _context9.t1 = _context9.sent;

          case 30:
            if (!_context9.t1) {
              _context9.next = 33;
              break;
            }

            _context9.next = 33;
            return _node.fs.unlink(stubPath);

          case 33:
            return _context9.abrupt("return", true);

          case 36:
            _context9.prev = 36;
            _context9.t2 = _context9["catch"](4);
            console.error("  !! Failed to install ".concat(npmLibDef.name, " at ").concat(filePath));
            console.error("  ERROR: ".concat(_context9.t2.message));
            return _context9.abrupt("return", false);

          case 41:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[4, 36]]);
  }));
  return _installNpmLibDef.apply(this, arguments);
}