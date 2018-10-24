"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureCacheRepo = ensureCacheRepo;
exports.getCacheRepoDir = getCacheRepoDir;
exports.verifyCLIVersion = verifyCLIVersion;
exports._clearCustomCacheDir = clearCustomCacheDir;
exports._getCacheRepoGitDir = getCacheRepoGitDir;
exports._getLastUpdatedFile = getLastUpdatedFile;
exports._setCustomCacheDir = setCustomCacheDir;
exports._REMOTE_REPO_URL = exports._cacheRepoEnsureToken = exports._CACHE_REPO_EXPIRY = void 0;

var _fileUtils = require("./fileUtils");

var _git = require("./git");

var _node = require("./node");

var _semver = _interopRequireDefault(require("semver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CACHE_REPO_EXPIRY = 1000 * 60; // 1 minute

exports._CACHE_REPO_EXPIRY = CACHE_REPO_EXPIRY;
var REMOTE_REPO_URL = 'https://github.com/flowtype/flow-typed.git';
exports._REMOTE_REPO_URL = REMOTE_REPO_URL;

function cloneCacheRepo() {
  return _cloneCacheRepo.apply(this, arguments);
}

function _cloneCacheRepo() {
  _cloneCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fileUtils.mkdirp)(getCacheRepoDir());

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _git.cloneInto)(REMOTE_REPO_URL, getCacheRepoDir());

          case 5:
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            console.error('ERROR: Unable to clone local cache repo!');
            throw _context.t0;

          case 11:
            _context.next = 13;
            return _node.fs.writeFile(getLastUpdatedFile(), String(Date.now()));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 7]]);
  }));
  return _cloneCacheRepo.apply(this, arguments);
}

var customCacheDir = null;

function getCacheDir() {
  return customCacheDir === null ? _node.path.join(_node.os.homedir(), '.flow-typed') : customCacheDir;
}

function clearCustomCacheDir() {
  customCacheDir = null;
}

function setCustomCacheDir(dir) {
  customCacheDir = dir;
}

function getCacheRepoGitDir() {
  return _node.path.join(getCacheRepoDir(), '.git');
}

function getLastUpdatedFile() {
  return _node.path.join(getCacheRepoDir(), 'lastUpdated');
}

function rebaseCacheRepo() {
  return _rebaseCacheRepo.apply(this, arguments);
}
/**
 * Ensure that the CACHE_REPO_DIR exists and is recently rebased.
 * (else: create/rebase it)
 */


function _rebaseCacheRepo() {
  _rebaseCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _node.fs.exists(getCacheRepoDir());

          case 2:
            _context2.t0 = _context2.sent;

            if (!_context2.t0) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return _node.fs.exists(getCacheRepoGitDir());

          case 6:
            _context2.t0 = _context2.sent;

          case 7:
            if (!_context2.t0) {
              _context2.next = 22;
              break;
            }

            _context2.prev = 8;
            _context2.next = 11;
            return (0, _git.rebaseRepoMaster)(getCacheRepoDir());

          case 11:
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t1 = _context2["catch"](8);
            console.error('ERROR: Unable to rebase the local cache repo. ' + _context2.t1.message);
            return _context2.abrupt("return", false);

          case 17:
            _context2.next = 19;
            return _node.fs.writeFile(getLastUpdatedFile(), String(Date.now()));

          case 19:
            return _context2.abrupt("return", true);

          case 22:
            _context2.next = 24;
            return cloneCacheRepo();

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

var cacheRepoEnsureToken = {
  lastEnsured: 0,
  pendingEnsurance: Promise.resolve()
};
exports._cacheRepoEnsureToken = cacheRepoEnsureToken;

function ensureCacheRepo() {
  return _ensureCacheRepo.apply(this, arguments);
}

function _ensureCacheRepo() {
  _ensureCacheRepo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var cacheRepoExpiry,
        prevEnsurance,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cacheRepoExpiry = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : CACHE_REPO_EXPIRY;

            if (!(cacheRepoEnsureToken.lastEnsured + 5 * 1000 * 60 >= Date.now())) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", cacheRepoEnsureToken.pendingEnsurance);

          case 3:
            cacheRepoEnsureToken.lastEnsured = Date.now();
            prevEnsurance = cacheRepoEnsureToken.pendingEnsurance;
            return _context4.abrupt("return", cacheRepoEnsureToken.pendingEnsurance = prevEnsurance.then(function () {
              return _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3() {
                var repoDirExists, repoGitDirExists, lastUpdated, lastUpdatedRaw, lastUpdatedNum, rebaseSuccessful;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        repoDirExists = _node.fs.exists(getCacheRepoDir());
                        repoGitDirExists = _node.fs.exists(getCacheRepoGitDir());
                        _context3.next = 4;
                        return repoDirExists;

                      case 4:
                        _context3.t0 = !_context3.sent;

                        if (_context3.t0) {
                          _context3.next = 9;
                          break;
                        }

                        _context3.next = 8;
                        return repoGitDirExists;

                      case 8:
                        _context3.t0 = !_context3.sent;

                      case 9:
                        if (!_context3.t0) {
                          _context3.next = 15;
                          break;
                        }

                        console.log("\u2022 flow-typed cache not found, fetching from GitHub...");
                        _context3.next = 13;
                        return cloneCacheRepo();

                      case 13:
                        _context3.next = 30;
                        break;

                      case 15:
                        lastUpdated = 0;
                        _context3.next = 18;
                        return _node.fs.exists(getLastUpdatedFile());

                      case 18:
                        if (!_context3.sent) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.next = 21;
                        return _node.fs.readFile(getLastUpdatedFile());

                      case 21:
                        lastUpdatedRaw = _context3.sent;
                        lastUpdatedNum = parseInt(lastUpdatedRaw, 10);

                        if (String(lastUpdatedNum) === String(lastUpdatedRaw)) {
                          lastUpdated = lastUpdatedNum;
                        }

                      case 24:
                        if (!(lastUpdated + cacheRepoExpiry < Date.now())) {
                          _context3.next = 30;
                          break;
                        }

                        console.log('• rebasing flow-typed cache...');
                        _context3.next = 28;
                        return rebaseCacheRepo();

                      case 28:
                        rebaseSuccessful = _context3.sent;

                        if (!rebaseSuccessful) {
                          console.log("\nNOTE: Unable to rebase local cache! If you don't currently " + "have internet connectivity, no worries -- we'll update the " + 'local cache the next time you do.\n');
                        }

                      case 30:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }))();
            }));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _ensureCacheRepo.apply(this, arguments);
}

function getCacheRepoDir() {
  return _node.path.join(getCacheDir(), 'repo');
}

function verifyCLIVersion() {
  return _verifyCLIVersion.apply(this, arguments);
}

function _verifyCLIVersion() {
  _verifyCLIVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var metadataPath, metadata, compatibleCLIRange, thisCLIPkgJsonPath, thisCLIPkgJson, thisCLIVersion;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            metadataPath = _node.path.join(getCacheRepoDir(), 'definitions', '.cli-metadata.json');
            _context5.t0 = JSON;
            _context5.t1 = String;
            _context5.next = 5;
            return _node.fs.readFile(metadataPath);

          case 5:
            _context5.t2 = _context5.sent;
            _context5.t3 = (0, _context5.t1)(_context5.t2);
            metadata = _context5.t0.parse.call(_context5.t0, _context5.t3);
            compatibleCLIRange = metadata.compatibleCLIRange;

            if (compatibleCLIRange) {
              _context5.next = 11;
              break;
            }

            throw new Error("Unable to find the 'compatibleCLIRange' property in ".concat(metadataPath, ". ") + "You might need to update your flow-typed CLI to the latest version.");

          case 11:
            thisCLIPkgJsonPath = _node.path.join(__dirname, '..', '..', 'package.json');
            _context5.t4 = JSON;
            _context5.t5 = String;
            _context5.next = 16;
            return _node.fs.readFile(thisCLIPkgJsonPath);

          case 16:
            _context5.t6 = _context5.sent;
            _context5.t7 = (0, _context5.t5)(_context5.t6);
            thisCLIPkgJson = _context5.t4.parse.call(_context5.t4, _context5.t7);
            thisCLIVersion = thisCLIPkgJson.version;

            if (_semver.default.satisfies(thisCLIVersion, compatibleCLIRange)) {
              _context5.next = 22;
              break;
            }

            throw new Error("Please upgrade your flow-typed CLI! This CLI is version " + "".concat(thisCLIVersion, ", but the latest flow-typed definitions are only ") + "compatible with flow-typed@".concat(compatibleCLIRange));

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _verifyCLIVersion.apply(this, arguments);
}