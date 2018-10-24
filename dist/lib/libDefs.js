"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ensureCacheRepo = ensureCacheRepo;
exports.updateCacheRepo = updateCacheRepo;
exports.getLibDefs = getLibDefs;
exports.parseRepoDirItem = parseRepoDirItem;
exports.getCacheLibDefs = getCacheLibDefs;
exports.filterLibDefs = filterLibDefs;
exports._REMOTE_REPO_URL = exports._LAST_UPDATED_FILE = exports._CACHE_REPO_GIT_DIR = exports._CACHE_REPO_EXPIRY = exports._CACHE_REPO_DIR = exports._cacheRepoAssure = exports.TEST_FILE_NAME_RE = void 0;

var _semver = _interopRequireDefault(require("semver"));

var _git = require("./git.js");

var _fileUtils = require("./fileUtils.js");

var _node = require("./node.js");

var _semver2 = require("./semver.js");

var _flowVersion = require("./flowVersion.js");

var _ValidationError = require("./ValidationError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var P = Promise;
var TEST_FILE_NAME_RE = /^test_.*\.js$/;
exports.TEST_FILE_NAME_RE = TEST_FILE_NAME_RE;

var CACHE_DIR = _node.path.join(_node.os.homedir(), '.flow-typed');

var CACHE_REPO_DIR = _node.path.join(CACHE_DIR, 'repo');

exports._CACHE_REPO_DIR = CACHE_REPO_DIR;
var REMOTE_REPO_URL = 'https://github.com/flowtype/flow-typed.git';
exports._REMOTE_REPO_URL = REMOTE_REPO_URL;

var LAST_UPDATED_FILE = _node.path.join(CACHE_DIR, 'lastUpdated');

exports._LAST_UPDATED_FILE = LAST_UPDATED_FILE;

function cloneCacheRepo(_x) {
  return _cloneCacheRepo.apply(this, arguments);
}

function _cloneCacheRepo() {
  _cloneCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(verbose) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fileUtils.mkdirp)(CACHE_REPO_DIR);

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _git.cloneInto)(REMOTE_REPO_URL, CACHE_REPO_DIR);

          case 5:
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            writeVerbose(verbose, 'ERROR: Unable to clone the local cache repo.');
            throw _context.t0;

          case 11:
            _context.next = 13;
            return _node.fs.writeFile(LAST_UPDATED_FILE, String(Date.now()));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 7]]);
  }));
  return _cloneCacheRepo.apply(this, arguments);
}

var CACHE_REPO_GIT_DIR = _node.path.join(CACHE_REPO_DIR, '.git');

exports._CACHE_REPO_GIT_DIR = CACHE_REPO_GIT_DIR;

function rebaseCacheRepo(_x2) {
  return _rebaseCacheRepo.apply(this, arguments);
}
/**
 * Utility wrapper for ensureCacheRepo with an update expiry of 0 hours.
 */


function _rebaseCacheRepo() {
  _rebaseCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(verbose) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _node.fs.exists(CACHE_REPO_DIR);

          case 2:
            _context2.t0 = _context2.sent;

            if (!_context2.t0) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return _node.fs.exists(CACHE_REPO_GIT_DIR);

          case 6:
            _context2.t0 = _context2.sent;

          case 7:
            if (!_context2.t0) {
              _context2.next = 22;
              break;
            }

            _context2.prev = 8;
            _context2.next = 11;
            return (0, _git.rebaseRepoMaster)(CACHE_REPO_DIR);

          case 11:
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t1 = _context2["catch"](8);
            writeVerbose(verbose, 'ERROR: Unable to rebase the local cache repo. ' + _context2.t1.message);
            return _context2.abrupt("return", false);

          case 17:
            _context2.next = 19;
            return _node.fs.writeFile(LAST_UPDATED_FILE, String(Date.now()));

          case 19:
            return _context2.abrupt("return", true);

          case 22:
            _context2.next = 24;
            return cloneCacheRepo(verbose);

          case 24:
            return _context2.abrupt("return", true);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 13]]);
  }));
  return _rebaseCacheRepo.apply(this, arguments);
}

function updateCacheRepo(_x3) {
  return _updateCacheRepo.apply(this, arguments);
}
/**
 * Ensure that the CACHE_REPO_DIR exists and is recently rebased.
 * (else: create/rebase it)
 */


function _updateCacheRepo() {
  _updateCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(verbose) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return ensureCacheRepo(verbose, 0);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _updateCacheRepo.apply(this, arguments);
}

var CACHE_REPO_EXPIRY = 1000 * 60; // 1 minute

exports._CACHE_REPO_EXPIRY = CACHE_REPO_EXPIRY;
var _cacheRepoAssure = {
  lastAssured: 0,
  pendingAssure: Promise.resolve()
};
exports._cacheRepoAssure = _cacheRepoAssure;

function ensureCacheRepo(_x4) {
  return _ensureCacheRepo.apply(this, arguments);
} // Exported for tests -- since we really want this part well-tested.


function _ensureCacheRepo() {
  _ensureCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(verbose) {
    var cacheRepoExpiry,
        prevAssure,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            cacheRepoExpiry = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : CACHE_REPO_EXPIRY;

            if (!(_cacheRepoAssure.lastAssured + 5 * 1000 * 60 >= Date.now())) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", _cacheRepoAssure.pendingAssure);

          case 3:
            _cacheRepoAssure.lastAssured = Date.now();
            prevAssure = _cacheRepoAssure.pendingAssure;
            return _context5.abrupt("return", _cacheRepoAssure.pendingAssure = prevAssure.then(function () {
              return _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4() {
                var repoDirExists, repoGitDirExists, lastUpdated, lastUpdatedRaw, lastUpdatedNum, rebaseSuccessful;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        repoDirExists = _node.fs.exists(CACHE_REPO_DIR);
                        repoGitDirExists = _node.fs.exists(CACHE_REPO_GIT_DIR);
                        _context4.next = 4;
                        return repoDirExists;

                      case 4:
                        _context4.t0 = !_context4.sent;

                        if (_context4.t0) {
                          _context4.next = 9;
                          break;
                        }

                        _context4.next = 8;
                        return repoGitDirExists;

                      case 8:
                        _context4.t0 = !_context4.sent;

                      case 9:
                        if (!_context4.t0) {
                          _context4.next = 16;
                          break;
                        }

                        writeVerbose(verbose, '• flow-typed cache not found, fetching from GitHub...', false);
                        _context4.next = 13;
                        return cloneCacheRepo(verbose);

                      case 13:
                        writeVerbose(verbose, 'done.');
                        _context4.next = 31;
                        break;

                      case 16:
                        lastUpdated = 0;
                        _context4.next = 19;
                        return _node.fs.exists(LAST_UPDATED_FILE);

                      case 19:
                        if (!_context4.sent) {
                          _context4.next = 25;
                          break;
                        }

                        _context4.next = 22;
                        return _node.fs.readFile(LAST_UPDATED_FILE);

                      case 22:
                        lastUpdatedRaw = _context4.sent;
                        lastUpdatedNum = parseInt(lastUpdatedRaw, 10);

                        if (String(lastUpdatedNum) === String(lastUpdatedRaw)) {
                          lastUpdated = lastUpdatedNum;
                        }

                      case 25:
                        if (!(lastUpdated + cacheRepoExpiry < Date.now())) {
                          _context4.next = 31;
                          break;
                        }

                        writeVerbose(verbose, '• rebasing flow-typed cache...', false);
                        _context4.next = 29;
                        return rebaseCacheRepo(verbose);

                      case 29:
                        rebaseSuccessful = _context4.sent;

                        if (rebaseSuccessful) {
                          writeVerbose(verbose, 'done.');
                        } else {
                          writeVerbose(verbose, "\nNOTE: Unable to rebase local cache! If you don't currently " + "have internet connectivity, no worries -- we'll update the " + 'local cache the next time you do.\n');
                        }

                      case 31:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }))();
            }));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _ensureCacheRepo.apply(this, arguments);
}

function addLibDefs(_x5, _x6) {
  return _addLibDefs.apply(this, arguments);
}
/**
 * Given a 'definitions/npm' dir, return a list of LibDefs that it contains.
 */


function _addLibDefs() {
  _addLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(pkgDirPath, libDefs) {
    var parsedDirItem;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            parsedDirItem = parseRepoDirItem(pkgDirPath);
            _context6.next = 3;
            return parseLibDefsFromPkgDir(parsedDirItem, pkgDirPath);

          case 3:
            _context6.t0 = function (libDef) {
              return libDefs.push(libDef);
            };

            _context6.sent.forEach(_context6.t0);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _addLibDefs.apply(this, arguments);
}

function getLibDefs(_x7) {
  return _getLibDefs.apply(this, arguments);
}

function _getLibDefs() {
  _getLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(defsDir) {
    var libDefs, defsDirItems;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            libDefs = [];
            _context9.next = 3;
            return _node.fs.readdir(defsDir);

          case 3:
            defsDirItems = _context9.sent;
            _context9.next = 6;
            return P.all(defsDirItems.map(
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee8(item) {
                var itemPath, itemStat, scope, _defsDirItems, error;

                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        itemPath = _node.path.join(defsDir, item);
                        _context8.next = 3;
                        return _node.fs.stat(itemPath);

                      case 3:
                        itemStat = _context8.sent;

                        if (!itemStat.isDirectory()) {
                          _context8.next = 18;
                          break;
                        }

                        if (!(item.charAt(0) === '@')) {
                          _context8.next = 14;
                          break;
                        }

                        // directory is of the form '@<scope>', so go one level deeper
                        scope = item;
                        _context8.next = 9;
                        return _node.fs.readdir(itemPath);

                      case 9:
                        _defsDirItems = _context8.sent;
                        _context8.next = 12;
                        return P.all(_defsDirItems.map(
                        /*#__PURE__*/
                        function () {
                          var _ref4 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee7(item) {
                            var itemPath, itemStat, error;
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    itemPath = _node.path.join(defsDir, scope, item);
                                    _context7.next = 3;
                                    return _node.fs.stat(itemPath);

                                  case 3:
                                    itemStat = _context7.sent;

                                    if (!itemStat.isDirectory()) {
                                      _context7.next = 9;
                                      break;
                                    }

                                    _context7.next = 7;
                                    return addLibDefs(itemPath, libDefs);

                                  case 7:
                                    _context7.next = 11;
                                    break;

                                  case 9:
                                    error = "Expected only directories in the 'definitions/npm/@<scope>' directory!";
                                    throw new _ValidationError.ValidationError(error);

                                  case 11:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));

                          return function (_x12) {
                            return _ref4.apply(this, arguments);
                          };
                        }()));

                      case 12:
                        _context8.next = 16;
                        break;

                      case 14:
                        _context8.next = 16;
                        return addLibDefs(itemPath, libDefs);

                      case 16:
                        _context8.next = 20;
                        break;

                      case 18:
                        error = "Expected only directories in the 'definitions/npm' directory!";
                        throw new _ValidationError.ValidationError(error);

                      case 20:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));

              return function (_x11) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 6:
            return _context9.abrupt("return", libDefs);

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _getLibDefs.apply(this, arguments);
}

function parsePkgFlowDirVersion(pkgFlowDirPath) {
  var pkgFlowDirName = _node.path.basename(pkgFlowDirPath);

  return (0, _flowVersion.parseDirString)(pkgFlowDirName);
}
/**
 * Given a parsed package name and version and a path to the package directory
 * on disk, scan the directory and generate a list of LibDefs for each
 * flow-versioned definition file.
 */


function parseLibDefsFromPkgDir(_x8, _x9) {
  return _parseLibDefsFromPkgDir.apply(this, arguments);
}
/**
 * Given the path to a directory item in the 'definitions' directory, parse the
 * directory's name into a package name and version.
 */


function _parseLibDefsFromPkgDir() {
  _parseLibDefsFromPkgDir = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(_ref, pkgDirPath) {
    var pkgName, pkgVersion, pkgVersionStr, pkgDirItems, commonTestFiles, flowDirs, libDefs;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            pkgName = _ref.pkgName, pkgVersion = _ref.pkgVersion;
            pkgVersionStr = (0, _semver2.versionToString)(pkgVersion);
            _context11.next = 4;
            return _node.fs.readdir(pkgDirPath);

          case 4:
            pkgDirItems = _context11.sent;
            commonTestFiles = [];
            flowDirs = [];
            pkgDirItems.forEach(function (pkgDirItem) {
              var pkgDirItemPath = _node.path.join(pkgDirPath, pkgDirItem);

              var pkgDirItemStat = _node.fs.statSync(pkgDirItemPath);

              if (pkgDirItemStat.isFile()) {
                if (_node.path.extname(pkgDirItem) === '.swp') {
                  return;
                }

                var isValidTestFile = validateTestFile(pkgDirItemPath);

                if (isValidTestFile) {
                  commonTestFiles.push(pkgDirItemPath);
                }
              } else if (pkgDirItemStat.isDirectory()) {
                flowDirs.push([pkgDirItemPath, parsePkgFlowDirVersion(pkgDirItemPath)]);
              } else {
                throw new _ValidationError.ValidationError('Unexpected directory item: ' + pkgDirItemPath);
              }
            });

            if ((0, _flowVersion.disjointVersionsAll)(flowDirs.map(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  _ = _ref6[0],
                  ver = _ref6[1];

              return ver;
            }))) {
              _context11.next = 10;
              break;
            }

            throw new _ValidationError.ValidationError('Flow versions not disjoint!');

          case 10:
            if (!(flowDirs.length === 0)) {
              _context11.next = 12;
              break;
            }

            throw new _ValidationError.ValidationError('No libdef files found!');

          case 12:
            libDefs = [];
            _context11.next = 15;
            return P.all(flowDirs.map(
            /*#__PURE__*/
            function () {
              var _ref8 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee10(_ref7) {
                var _ref9, flowDirPath, flowVersion, testFilePaths, basePkgName, libDefFileName, libDefFilePath, error;

                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _ref9 = _slicedToArray(_ref7, 2), flowDirPath = _ref9[0], flowVersion = _ref9[1];
                        testFilePaths = [].concat(commonTestFiles);
                        basePkgName = pkgName.charAt(0) === '@' ? pkgName.split(_node.path.sep).pop() : pkgName;
                        libDefFileName = "".concat(basePkgName, "_").concat(pkgVersionStr, ".js");
                        _context10.next = 6;
                        return _node.fs.readdir(flowDirPath);

                      case 6:
                        _context10.t0 = function (flowDirItem) {
                          var flowDirItemPath = _node.path.join(flowDirPath, flowDirItem);

                          var flowDirItemStat = _node.fs.statSync(flowDirItemPath);

                          if (flowDirItemStat.isFile()) {
                            // If we couldn't discern the package name, we've already recorded an
                            // error for that -- so try to avoid spurious downstream errors.
                            if (pkgName === 'ERROR') {
                              return;
                            }

                            if (_node.path.extname(flowDirItem) === '.swp') {
                              return;
                            }

                            if (flowDirItem === libDefFileName) {
                              libDefFilePath = _node.path.join(flowDirPath, flowDirItem);
                              return;
                            }

                            var isValidTestFile = validateTestFile(flowDirItemPath);

                            if (isValidTestFile) {
                              testFilePaths.push(flowDirItemPath);
                            }
                          } else {
                            var error = 'Unexpected directory item: ' + flowDirItemPath;
                            throw new _ValidationError.ValidationError(error);
                          }
                        };

                        _context10.sent.forEach(_context10.t0);

                        if (!(libDefFilePath == null)) {
                          _context10.next = 14;
                          break;
                        }

                        libDefFilePath = _node.path.join(flowDirPath, libDefFileName);

                        if (!(pkgName !== 'ERROR')) {
                          _context10.next = 13;
                          break;
                        }

                        error = 'No libdef file found!';
                        throw new _ValidationError.ValidationError(error);

                      case 13:
                        return _context10.abrupt("return");

                      case 14:
                        libDefs.push({
                          pkgName: pkgName,
                          pkgVersionStr: pkgVersionStr,
                          flowVersion: flowVersion,
                          flowVersionStr: (0, _flowVersion.toDirString)(flowVersion),
                          path: libDefFilePath,
                          testFilePaths: testFilePaths
                        });

                      case 15:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));

              return function (_x13) {
                return _ref8.apply(this, arguments);
              };
            }()));

          case 15:
            return _context11.abrupt("return", libDefs);

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _parseLibDefsFromPkgDir.apply(this, arguments);
}

var REPO_DIR_ITEM_NAME_RE = /^(.*)_v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)(-.*)?$/;

function parseRepoDirItem(dirItemPath) {
  var dirItem = _node.path.basename(dirItemPath);

  var itemMatches = dirItem.match(REPO_DIR_ITEM_NAME_RE);

  if (itemMatches == null) {
    var error = "'".concat(dirItem, "' is a malformed definitions/npm/ directory name! ") + "Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>";
    throw new _ValidationError.ValidationError(error);
  }

  var _itemMatches = _slicedToArray(itemMatches, 6),
      _ = _itemMatches[0],
      pkgName = _itemMatches[1],
      major = _itemMatches[2],
      minor = _itemMatches[3],
      patch = _itemMatches[4],
      prerel = _itemMatches[5];

  var item = _node.path.dirname(dirItemPath).split(_node.path.sep).pop();

  if (item.charAt(0) === '@') {
    pkgName = "".concat(item).concat(_node.path.sep).concat(pkgName);
  }

  major = validateVersionNumPart(major, 'major', dirItemPath);
  minor = validateVersionPart(minor, 'minor', dirItemPath);
  patch = validateVersionPart(patch, 'patch', dirItemPath);

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
 * Given a path to an assumed test file, ensure that it is named as expected.
 */


function validateTestFile(testFilePath) {
  var testFileName = _node.path.basename(testFilePath);

  return TEST_FILE_NAME_RE.test(testFileName);
}
/**
 * Given a number-only part of a version string (i.e. the `major` part), parse
 * the string into a number.
 */


function validateVersionNumPart(part, partName, context) {
  var num = parseInt(part, 10);

  if (String(num) !== part) {
    var error = "'".concat(context, "': Invalid ").concat(partName, " number: '").concat(part, "'. Expected a number.");
    throw new _ValidationError.ValidationError(error);
  }

  return num;
}
/**
 * Given a number-or-wildcard part of a version string (i.e. a `minor` or
 * `patch` part), parse the string into either a number or 'x'.
 */


function validateVersionPart(part, partName, context) {
  if (part === 'x') {
    return part;
  }

  return validateVersionNumPart(part, partName, context);
}
/**
 * Given a path to a 'definitions' dir, assert that the currently-running
 * version of the CLI is compatible with the repo.
 */


function verifyCLIVersion(_x10) {
  return _verifyCLIVersion.apply(this, arguments);
}
/**
 * Helper function to write verbose output only when an output stream was
 * provided.
 */


function _verifyCLIVersion() {
  _verifyCLIVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(defsDirPath) {
    var metadataFilePath, metadata, minCLIVersion, thisCLIVersion;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            metadataFilePath = _node.path.join(defsDirPath, '.cli-metadata.json');
            _context12.t0 = JSON;
            _context12.t1 = String;
            _context12.next = 5;
            return _node.fs.readFile(metadataFilePath);

          case 5:
            _context12.t2 = _context12.sent;
            _context12.t3 = (0, _context12.t1)(_context12.t2);
            metadata = _context12.t0.parse.call(_context12.t0, _context12.t3);

            if (metadata.compatibleCLIRange) {
              _context12.next = 10;
              break;
            }

            throw new Error("Unable to find the 'compatibleCLIRange' property in " + "".concat(metadataFilePath, ". You might need to update to a newer version of ") + "the Flow CLI.");

          case 10:
            minCLIVersion = metadata.compatibleCLIRange;
            thisCLIVersion = require('../../package.json').version;

            if (_semver.default.satisfies(thisCLIVersion, minCLIVersion)) {
              _context12.next = 14;
              break;
            }

            throw new Error("Please upgrade your CLI version! This CLI is version " + "".concat(thisCLIVersion, ", but the latest flow-typed definitions are only ") + "compatible with flow-typed@".concat(minCLIVersion));

          case 14:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));
  return _verifyCLIVersion.apply(this, arguments);
}

function writeVerbose(stream, msg) {
  var writeNewline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (stream != null) {
    stream.write(msg + (writeNewline ? '\n' : ''));
  }
}
/**
 * Get a list of LibDefs from the flow-typed cache repo checkout.
 *
 * If the repo checkout does not exist or is out of date, it will be
 * created/updated automatically first.
 */


var CACHE_REPO_DEFS_DIR = _node.path.join(CACHE_REPO_DIR, 'definitions', 'npm');

function getCacheLibDefs() {
  return _getCacheLibDefs.apply(this, arguments);
}

function _getCacheLibDefs() {
  _getCacheLibDefs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13() {
    var verbose,
        _args13 = arguments;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            verbose = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : process.stdout;
            _context13.next = 3;
            return ensureCacheRepo(verbose);

          case 3:
            _context13.next = 5;
            return verifyCLIVersion(_node.path.join(CACHE_REPO_DIR, 'definitions'));

          case 5:
            return _context13.abrupt("return", getLibDefs(CACHE_REPO_DEFS_DIR));

          case 6:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));
  return _getCacheLibDefs.apply(this, arguments);
}

function packageNameMatch(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

function libdefMatchesPackageVersion(pkgSemver, defVersionRaw) {
  // The libdef version should be treated as a semver prefixed by a carat
  // (i.e: "foo_v2.2.x" is the same range as "^2.2.x")
  // UNLESS it is prefixed by the equals character (i.e. "foo_=v2.2.x")
  var defVersion = defVersionRaw;

  if (defVersionRaw[0] !== '=' && defVersionRaw[0] !== '^') {
    defVersion = '^' + defVersionRaw;
  }

  if (_semver.default.valid(pkgSemver)) {
    // test the single package version against the libdef range
    return _semver.default.satisfies(pkgSemver, defVersion);
  }

  if (_semver.default.valid(defVersion)) {
    // test the single defVersion agains the package range
    return _semver.default.satisfies(defVersion, pkgSemver);
  }

  var pkgRange = new _semver.default.Range(pkgSemver);
  var defRange = new _semver.default.Range(defVersion);

  if (defRange.set[0].length !== 2) {
    throw Error('Invalid libDef version, It appears to be a non-contiguous range.');
  }

  var defLowerB = defRange.set[0][0].semver.version;
  var defUpperB = defRange.set[0][1].semver.version;

  if (_semver.default.gtr(defLowerB, pkgSemver) || _semver.default.ltr(defUpperB, pkgSemver)) {
    return false;
  }

  var pkgLowerB = pkgRange.set[0][0].semver.version;
  return defRange.test(pkgLowerB);
}
/**
 * Filter a given list of LibDefs down using a specified filter.
 */


function filterLibDefs(defs, filter) {
  return defs.filter(function (def) {
    var filterMatch = false;

    switch (filter.type) {
      case 'exact':
        filterMatch = packageNameMatch(def.pkgName, filter.pkgName) && libdefMatchesPackageVersion(filter.pkgVersionStr, def.pkgVersionStr);
        break;

      case 'exact-name':
        filterMatch = packageNameMatch(def.pkgName, filter.term);
        break;

      case 'fuzzy':
        filterMatch = def.pkgName.toLowerCase().indexOf(filter.term.toLowerCase()) !== -1;
        break;

      default:
        throw new Error("'".concat(filter.type, "' is an unexpected filter type! This should never ") + "happen!");
    }

    if (!filterMatch) {
      return false;
    }

    var filterFlowVerStr = filter.flowVersionStr;

    if (filterFlowVerStr) {
      var flowVersion = def.flowVersion;

      switch (flowVersion.kind) {
        case 'all':
          return _semver.default.satisfies(filterFlowVerStr, def.flowVersionStr);

        case 'specific':
          return _semver.default.satisfies(filterFlowVerStr, def.flowVersionStr);

        case 'ranged':
          var upper = flowVersion.upper;

          if (upper) {
            var lowerSpecific = {
              kind: 'ranged',
              upper: null,
              lower: flowVersion.lower
            };
            var lowerSpecificSemver = (0, _flowVersion.toSemverString)(lowerSpecific);
            var upperSpecificSemver = (0, _flowVersion.toSemverString)({
              kind: 'specific',
              ver: upper
            });
            return _semver.default.satisfies(filterFlowVerStr, lowerSpecificSemver) && _semver.default.satisfies(filterFlowVerStr, upperSpecificSemver);
          } else {
            return _semver.default.satisfies(filterFlowVerStr, (0, _flowVersion.toSemverString)(def.flowVersion));
          }

        default:
          flowVersion;
          throw new Error('Unexpected FlowVersion kind!');
      }
    }

    return true;
  }).sort(function (a, b) {
    var aZeroed = a.pkgVersionStr.replace(/x/g, '0');
    var bZeroed = b.pkgVersionStr.replace(/x/g, '0');
    return _semver.default.gt(aZeroed, bZeroed) ? -1 : 1;
  });
}