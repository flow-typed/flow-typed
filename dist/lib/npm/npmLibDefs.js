"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNpmLibDef = findNpmLibDef;
exports.getInstalledNpmLibDefs = getInstalledNpmLibDefs;
exports.getNpmLibDefs = getNpmLibDefs;
exports.getNpmLibDefVersionHash = getNpmLibDefVersionHash;
exports.getScopedPackageName = getScopedPackageName;
exports._extractLibDefsFromNpmPkgDir = extractLibDefsFromNpmPkgDir;
exports._parsePkgNameVer = parsePkgNameVer;
exports._validateVersionNumPart = validateVersionNumPart;
exports._validateVersionPart = validateVersionPart;

var _cacheRepoUtils = require("../cacheRepoUtils");

var _codeSign = require("../codeSign");

var _fileUtils = require("../fileUtils");

var _flowVersion = require("../flowVersion");

var _git = require("../git");

var _node = require("../node");

var _semver = require("../semver");

var _semver2 = _interopRequireDefault(require("semver"));

var _got = _interopRequireDefault(require("got"));

var _ValidationError = require("../ValidationError");

var _libDefs = require("../libDefs");

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

var P = Promise;

function extractLibDefsFromNpmPkgDir(_x, _x2, _x3, _x4) {
  return _extractLibDefsFromNpmPkgDir.apply(this, arguments);
}

function _extractLibDefsFromNpmPkgDir() {
  _extractLibDefsFromNpmPkgDir = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(pkgDirPath, scope, pkgNameVer, validating) {
    var parsedPkgNameVer, pkgName, pkgVersion, pkgVersionStr, libDefFileName, pkgDirItems, fullPkgName, commonTestFiles, parsedFlowDirs, libDefs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            parsedPkgNameVer = parsePkgNameVer(pkgNameVer);

            if (!(parsedPkgNameVer === null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", []);

          case 3:
            pkgName = parsedPkgNameVer.pkgName, pkgVersion = parsedPkgNameVer.pkgVersion;
            pkgVersionStr = (0, _semver.versionToString)(pkgVersion);
            libDefFileName = "".concat(pkgName, "_").concat(pkgVersionStr, ".js");
            _context2.next = 8;
            return _node.fs.readdir(pkgDirPath);

          case 8:
            pkgDirItems = _context2.sent;

            if (!validating) {
              _context2.next = 13;
              break;
            }

            fullPkgName = "".concat(scope === null ? '' : scope + '/').concat(pkgName);
            _context2.next = 13;
            return _npmExists(fullPkgName).then().catch(function (error) {
              // Only fail spen on 404, not on timeout
              if (error.statusCode === 404) {
                throw new _ValidationError.ValidationError("Package does not exist on npm!");
              }
            });

          case 13:
            commonTestFiles = [];
            parsedFlowDirs = [];
            pkgDirItems.forEach(function (pkgDirItem) {
              var pkgDirItemPath = _node.path.join(pkgDirPath, pkgDirItem);

              var pkgDirItemStat = _node.fs.statSync(pkgDirItemPath);

              if (pkgDirItemStat.isFile()) {
                var isValidTestFile = _libDefs.TEST_FILE_NAME_RE.test(pkgDirItem);

                if (isValidTestFile) commonTestFiles.push(pkgDirItemPath);
              } else if (pkgDirItemStat.isDirectory()) {
                var parsedFlowDir = (0, _flowVersion.parseDirString)(pkgDirItem);
                parsedFlowDirs.push([pkgDirItemPath, parsedFlowDir]);
              } else {
                throw new _ValidationError.ValidationError('Unexpected directory item');
              }
            });

            if ((0, _flowVersion.disjointVersionsAll)(parsedFlowDirs.map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  _ = _ref2[0],
                  ver = _ref2[1];

              return ver;
            }))) {
              _context2.next = 18;
              break;
            }

            throw new _ValidationError.ValidationError('Flow versions not disjoint!');

          case 18:
            if (!(parsedFlowDirs.length === 0)) {
              _context2.next = 20;
              break;
            }

            throw new _ValidationError.ValidationError('No libdef files found!');

          case 20:
            libDefs = [];
            _context2.next = 23;
            return P.all(parsedFlowDirs.map(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(_ref3) {
                var _ref5, flowDirPath, flowVersion, testFilePaths, libDefFilePath;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _ref5 = _slicedToArray(_ref3, 2), flowDirPath = _ref5[0], flowVersion = _ref5[1];
                        testFilePaths = [].concat(commonTestFiles);
                        libDefFilePath = null;
                        _context.next = 5;
                        return _node.fs.readdir(flowDirPath);

                      case 5:
                        _context.t0 = function (flowDirItem) {
                          var flowDirItemPath = _node.path.join(flowDirPath, flowDirItem);

                          var flowDirItemStat = _node.fs.statSync(flowDirItemPath);

                          if (flowDirItemStat.isFile()) {
                            if (_node.path.extname(flowDirItem) === '.swp') {
                              return;
                            } // Is this the libdef file?


                            if (flowDirItem === libDefFileName) {
                              libDefFilePath = _node.path.join(flowDirPath, flowDirItem);
                              return;
                            } // Is this a test file?


                            var isValidTestFile = _libDefs.TEST_FILE_NAME_RE.test(flowDirItem);

                            if (isValidTestFile) {
                              testFilePaths.push(flowDirItemPath);
                              return;
                            }

                            throw new _ValidationError.ValidationError("Unexpected file: ".concat(libDefFileName, ". This directory can only contain test files ") + "or a libdef file named ".concat('`' + libDefFileName + '`', "."));
                          } else {
                            throw new _ValidationError.ValidationError("Unexpected sub-directory. This directory can only contain test " + "files or a libdef file named ".concat('`' + libDefFileName + '`', "."));
                          }
                        };

                        _context.sent.forEach(_context.t0);

                        if (!(libDefFilePath === null)) {
                          _context.next = 10;
                          break;
                        }

                        libDefFilePath = _node.path.join(flowDirPath, libDefFileName);
                        throw new _ValidationError.ValidationError("No libdef file found. Looking for a file named ".concat(libDefFileName));

                      case 10:
                        libDefs.push({
                          scope: scope,
                          name: pkgName,
                          version: pkgVersionStr,
                          flowVersion: flowVersion,
                          path: libDefFilePath,
                          testFilePaths: testFilePaths
                        });

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x18) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 23:
            return _context2.abrupt("return", libDefs);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _extractLibDefsFromNpmPkgDir.apply(this, arguments);
}

function getCacheNpmLibDefs() {
  return _getCacheNpmLibDefs.apply(this, arguments);
}

function _getCacheNpmLibDefs() {
  _getCacheNpmLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _cacheRepoUtils.ensureCacheRepo)();

          case 2:
            _context3.next = 4;
            return (0, _cacheRepoUtils.verifyCLIVersion)();

          case 4:
            return _context3.abrupt("return", getNpmLibDefs(_node.path.join((0, _cacheRepoUtils.getCacheRepoDir)(), 'definitions')));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getCacheNpmLibDefs.apply(this, arguments);
}

var PKG_NAMEVER_RE = /^(.*)_v\^?([0-9]+)\.([0-9]+|x)\.([0-9]+|x)(-.*)?$/;

function parsePkgNameVer(pkgNameVer) {
  var pkgNameVerMatches = pkgNameVer.match(PKG_NAMEVER_RE);

  if (pkgNameVerMatches == null) {
    throw new _ValidationError.ValidationError("Malformed npm package name! " + "Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH> but instead got ".concat(pkgNameVer));
  }

  var _pkgNameVerMatches = _slicedToArray(pkgNameVerMatches, 6),
      _ = _pkgNameVerMatches[0],
      pkgName = _pkgNameVerMatches[1],
      major = _pkgNameVerMatches[2],
      minor = _pkgNameVerMatches[3],
      patch = _pkgNameVerMatches[4],
      prerel = _pkgNameVerMatches[5];

  major = validateVersionNumPart(major, 'major');
  minor = validateVersionPart(minor, 'minor');
  patch = validateVersionPart(patch, 'patch');

  if (prerel != null) {
    prerel = prerel.substr(1);
  }

  return {
    pkgName: pkgName,
    pkgVersion: {
      major: major,
      minor: minor,
      patch: patch,
      prerel: prerel
    }
  };
}
/**
 * Given a number-or-wildcard part of a version string (i.e. a `minor` or
 * `patch` part), parse the string into either a number or 'x'.
 */


function validateVersionPart(part, partName) {
  if (part === 'x') {
    return part;
  }

  return validateVersionNumPart(part, partName);
}
/**
 * Given a number-only part of a version string (i.e. the `major` part), parse
 * the string into a number.
 */


function validateVersionNumPart(part, partName) {
  var num = parseInt(part, 10);

  if (String(num) !== part) {
    throw new _ValidationError.ValidationError("Invalid ".concat(partName, " number: '").concat(part, "'. Expected a number."));
  }

  return num;
}

function pkgVersionMatch(pkgSemver, libDefSemverRaw) {
  // The package version should be treated as a semver implicitly prefixed by a
  // `^`. (i.e.: "foo_v2.2.x" is the same range as "^2.2.x")
  // UNLESS it is prefixed by the equals character (i.e. "foo_=v2.2.x")
  var libDefSemver = libDefSemverRaw[0] !== '=' && libDefSemverRaw[0] !== '^' ? '^' + libDefSemverRaw : libDefSemverRaw;

  if (_semver2.default.valid(pkgSemver)) {
    // Test the single package version against the LibDef range
    return _semver2.default.satisfies(pkgSemver, libDefSemver);
  }

  if (_semver2.default.valid(libDefSemver)) {
    // Test the single LibDef version against the package range
    return _semver2.default.satisfies(libDefSemver, pkgSemver);
  }

  if (!(_semver2.default.validRange(pkgSemver) && _semver2.default.validRange(libDefSemver))) {
    return false;
  }

  var pkgRange = new _semver2.default.Range(pkgSemver);
  var libDefRange = new _semver2.default.Range(libDefSemver);

  if (libDefRange.set[0].length !== 2) {
    throw new Error('Invalid npm libdef version! It appears to be a non-continugous range.');
  }

  var libDefLower = (0, _semver.getRangeLowerBound)(libDefRange);
  var libDefUpper = (0, _semver.getRangeUpperBound)(libDefRange);

  var pkgBelowLower = _semver2.default.gtr(libDefLower, pkgSemver);

  var pkgAboveUpper = _semver2.default.ltr(libDefUpper, pkgSemver);

  if (pkgBelowLower || pkgAboveUpper) {
    return false;
  }

  var pkgLower = pkgRange.set[0][0].semver.version;
  return libDefRange.test(pkgLower);
}

function filterLibDefs(defs, filter) {
  return defs.filter(function (def) {
    var filterMatch = false;

    switch (filter.type) {
      case 'exact':
        var fullName = def.scope ? "".concat(def.scope, "/").concat(def.name) : def.name;
        filterMatch = filter.pkgName.toLowerCase() === fullName.toLowerCase() && pkgVersionMatch(filter.pkgVersion, def.version);
        break;

      default:
        filter;
    }

    if (!filterMatch) {
      return false;
    }

    var filterFlowVersion = filter.flowVersion;

    if (filterFlowVersion !== undefined) {
      var flowVersion = def.flowVersion;

      switch (flowVersion.kind) {
        case 'all':
          return true;

        case 'ranged':
        case 'specific':
          return _semver2.default.satisfies((0, _flowVersion.toSemverString)(filterFlowVersion), (0, _flowVersion.toSemverString)(def.flowVersion));

        default:
          flowVersion;
      }
    }

    return true;
  }).sort(function (a, b) {
    var aZeroed = a.version.replace(/x/g, '0');
    var bZeroed = b.version.replace(/x/g, '0');
    return _semver2.default.gt(aZeroed, bZeroed) ? -1 : 1;
  });
}

function _npmExists(_x5) {
  return _npmExists2.apply(this, arguments);
}

function _npmExists2() {
  _npmExists2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(pkgName) {
    var pkgUrl;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            pkgUrl = "https://www.npmjs.com/package/".concat(pkgName);
            return _context4.abrupt("return", (0, _got.default)(pkgUrl, {
              method: 'HEAD'
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _npmExists2.apply(this, arguments);
}

function findNpmLibDef(_x6, _x7, _x8) {
  return _findNpmLibDef.apply(this, arguments);
}

function _findNpmLibDef() {
  _findNpmLibDef = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(pkgName, pkgVersion, flowVersion) {
    var libDefs, filteredLibDefs;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getCacheNpmLibDefs();

          case 2:
            libDefs = _context5.sent;
            filteredLibDefs = filterLibDefs(libDefs, {
              type: 'exact',
              pkgName: pkgName,
              pkgVersion: pkgVersion,
              flowVersion: flowVersion
            });
            return _context5.abrupt("return", filteredLibDefs.length === 0 ? null : filteredLibDefs[0]);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _findNpmLibDef.apply(this, arguments);
}

function getInstalledNpmLibDefs(_x9, _x10) {
  return _getInstalledNpmLibDefs.apply(this, arguments);
}
/**
 * Retrieve single libdef.
 */


function _getInstalledNpmLibDefs() {
  _getInstalledNpmLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(flowProjectRootDir, libdefDir) {
    var typedefDir, libDefDirPath, installedLibDefs, filesInNpmDir;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            typedefDir = libdefDir || 'flow-typed';
            libDefDirPath = _node.path.join(flowProjectRootDir, typedefDir, 'npm');
            installedLibDefs = new Map();
            _context7.next = 5;
            return _node.fs.exists(libDefDirPath);

          case 5:
            if (!_context7.sent) {
              _context7.next = 11;
              break;
            }

            _context7.next = 8;
            return (0, _fileUtils.getFilesInDir)(libDefDirPath, true);

          case 8:
            filesInNpmDir = _context7.sent;
            _context7.next = 11;
            return P.all(_toConsumableArray(filesInNpmDir).map(
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6(fileName) {
                var fullFilePath, terseFilePath, fileStat, fileContent, signedCodeVer, matches, scope, nameVer, pkgNameVer, pkgName, pkgVersion, flowVerMatches, flowVerStr, flowDirStr, flowVer;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        fullFilePath = _node.path.join(libDefDirPath, fileName);
                        terseFilePath = _node.path.relative(flowProjectRootDir, fullFilePath);
                        _context6.next = 4;
                        return _node.fs.stat(fullFilePath);

                      case 4:
                        fileStat = _context6.sent;

                        if (!fileStat.isFile()) {
                          _context6.next = 32;
                          break;
                        }

                        _context6.next = 8;
                        return _node.fs.readFile(fullFilePath);

                      case 8:
                        fileContent = _context6.sent.toString();

                        if (!(0, _codeSign.verifySignedCode)(fileContent)) {
                          _context6.next = 32;
                          break;
                        }

                        signedCodeVer = (0, _codeSign.getSignedCodeVersion)(fileContent);

                        if (!(signedCodeVer === null)) {
                          _context6.next = 13;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 13:
                        matches = signedCodeVer.match(/([^\/]+)\/(@[^\/]+\/)?([^\/]+)\/([^\/]+)/);

                        if (!(matches == null)) {
                          _context6.next = 16;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 16:
                        if (!(matches[1] === '<<STUB>>')) {
                          _context6.next = 19;
                          break;
                        }

                        installedLibDefs.set(terseFilePath, {
                          kind: 'Stub',
                          name: matches[2]
                        });
                        return _context6.abrupt("return");

                      case 19:
                        scope = matches[2] == null ? null : matches[2].substr(0, matches[2].length - 1);
                        nameVer = matches[3];

                        if (!(nameVer === null)) {
                          _context6.next = 23;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 23:
                        pkgNameVer = parsePkgNameVer(nameVer);

                        if (!(pkgNameVer === null)) {
                          _context6.next = 26;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 26:
                        pkgName = pkgNameVer.pkgName, pkgVersion = pkgNameVer.pkgVersion;
                        flowVerMatches = matches[4].match(/^flow_(>=|<=)?(v[^ ]+) ?(<=(v.+))?$/);
                        flowVerStr = flowVerMatches == null ? matches[3] : flowVerMatches[3] == null ? flowVerMatches[2] : "".concat(flowVerMatches[2], "-").concat(flowVerMatches[4]);
                        flowDirStr = "flow_".concat(flowVerStr);
                        flowVer = flowVerMatches == null ? (0, _flowVersion.parseDirString)(flowDirStr) : (0, _flowVersion.parseDirString)(flowDirStr);
                        installedLibDefs.set(terseFilePath, {
                          kind: 'LibDef',
                          libDef: {
                            scope: scope,
                            name: pkgName,
                            version: (0, _semver.versionToString)(pkgVersion),
                            flowVersion: flowVer,
                            path: terseFilePath,
                            testFilePaths: []
                          }
                        });

                      case 32:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              return function (_x19) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 11:
            return _context7.abrupt("return", installedLibDefs);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _getInstalledNpmLibDefs.apply(this, arguments);
}

function getSingleLibdef(_x11, _x12, _x13) {
  return _getSingleLibdef.apply(this, arguments);
}
/**
 * Retrieve a list of *all* npm libdefs.
 */


function _getSingleLibdef() {
  _getSingleLibdef = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(itemName, npmDefsDirPath, validating) {
    var itemPath, itemStat, _ref8, scope, scopeDirItems, settled;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            itemPath = _node.path.join(npmDefsDirPath, itemName);
            _context9.next = 3;
            return _node.fs.stat(itemPath);

          case 3:
            itemStat = _context9.sent;

            if (!itemStat.isDirectory()) {
              _context9.next = 21;
              break;
            }

            if (!(itemName[0] === '@')) {
              _context9.next = 16;
              break;
            }

            // This must be a scoped npm package, so go one directory deeper
            scope = itemName;
            _context9.next = 9;
            return _node.fs.readdir(itemPath);

          case 9:
            scopeDirItems = _context9.sent;
            _context9.next = 12;
            return P.all(scopeDirItems.map(
            /*#__PURE__*/
            function () {
              var _ref7 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee8(itemName) {
                var itemPath, itemStat;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        itemPath = _node.path.join(npmDefsDirPath, scope, itemName);
                        _context8.next = 3;
                        return _node.fs.stat(itemPath);

                      case 3:
                        itemStat = _context8.sent;

                        if (!itemStat.isDirectory()) {
                          _context8.next = 10;
                          break;
                        }

                        _context8.next = 7;
                        return extractLibDefsFromNpmPkgDir(itemPath, scope, itemName, validating);

                      case 7:
                        return _context8.abrupt("return", _context8.sent);

                      case 10:
                        throw new _ValidationError.ValidationError("Expected only sub-directories in this dir!");

                      case 11:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));

              return function (_x20) {
                return _ref7.apply(this, arguments);
              };
            }()));

          case 12:
            settled = _context9.sent;
            return _context9.abrupt("return", (_ref8 = []).concat.apply(_ref8, _toConsumableArray(settled)));

          case 16:
            _context9.next = 18;
            return extractLibDefsFromNpmPkgDir(itemPath, null, // No scope
            itemName, validating);

          case 18:
            return _context9.abrupt("return", _context9.sent);

          case 19:
            _context9.next = 22;
            break;

          case 21:
            throw new _ValidationError.ValidationError("Expected only directories to be present in this directory.");

          case 22:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _getSingleLibdef.apply(this, arguments);
}

function getNpmLibDefs(_x14, _x15) {
  return _getNpmLibDefs.apply(this, arguments);
}

function _getNpmLibDefs() {
  _getNpmLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(defsDirPath, validating) {
    var _ref10;

    var npmDefsDirPath, dirItems, errors, proms, settled;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            npmDefsDirPath = _node.path.join(defsDirPath, 'npm');
            _context11.next = 3;
            return _node.fs.readdir(npmDefsDirPath);

          case 3:
            dirItems = _context11.sent;
            errors = [];
            proms = dirItems.map(
            /*#__PURE__*/
            function () {
              var _ref9 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee10(itemName) {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.prev = 0;
                        _context10.next = 3;
                        return getSingleLibdef(itemName, npmDefsDirPath, validating);

                      case 3:
                        return _context10.abrupt("return", _context10.sent);

                      case 6:
                        _context10.prev = 6;
                        _context10.t0 = _context10["catch"](0);
                        errors.push(_context10.t0);

                      case 9:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this, [[0, 6]]);
              }));

              return function (_x21) {
                return _ref9.apply(this, arguments);
              };
            }());
            _context11.next = 8;
            return P.all(proms);

          case 8:
            settled = _context11.sent;

            if (!errors.length) {
              _context11.next = 11;
              break;
            }

            throw errors;

          case 11:
            return _context11.abrupt("return", (_ref10 = []).concat.apply(_ref10, _toConsumableArray(settled)).filter(Boolean));

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _getNpmLibDefs.apply(this, arguments);
}

function getNpmLibDefVersionHash(_x16, _x17) {
  return _getNpmLibDefVersionHash.apply(this, arguments);
}

function _getNpmLibDefVersionHash() {
  _getNpmLibDefVersionHash = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(repoDirPath, libDef) {
    var latestCommitHash;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0, _git.findLatestFileCommitHash)(repoDirPath, _node.path.relative(repoDirPath, libDef.path));

          case 2:
            latestCommitHash = _context12.sent;
            return _context12.abrupt("return", "".concat(latestCommitHash.substr(0, 10), "/") + (libDef.scope === null ? '' : "".concat(libDef.scope, "/")) + "".concat(libDef.name, "_").concat(libDef.version, "/") + "flow_".concat((0, _flowVersion.toSemverString)(libDef.flowVersion)));

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));
  return _getNpmLibDefVersionHash.apply(this, arguments);
}

function getScopedPackageName(libDef) {
  return (libDef.scope === null ? '' : "".concat(libDef.scope, "/")) + "".concat(libDef.name);
}