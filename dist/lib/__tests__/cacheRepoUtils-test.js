"use strict";

var _cacheRepoUtils = require("../cacheRepoUtils");

var _git = require("../git");

var _node = require("../node");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../git');
jest.mock('../node');

function _mock(mockFn) {
  return mockFn;
}

describe('cacheRepoUtils', function () {
  describe('ensureCacheRepo', function () {
    var origConsoleLog = console.log;
    beforeEach(function () {
      _mock(_git.cloneInto).mockClear();

      _mock(_git.rebaseRepoMaster).mockClear();

      console.log = jest.fn();
      _cacheRepoUtils._cacheRepoEnsureToken.lastEnsured = 0;
      _cacheRepoUtils._cacheRepoEnsureToken.pendingEnsurance = Promise.resolve();
    });
    afterEach(function () {
      console.log = origConsoleLog;
    });
    it('clones the repo if not present on disk',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _cacheRepoUtils.ensureCacheRepo)();

            case 2:
              expect(_mock(_git.cloneInto).mock.calls).toEqual([[_cacheRepoUtils._REMOTE_REPO_URL, (0, _cacheRepoUtils.getCacheRepoDir)()]]);
              expect(_mock(_node.fs.writeFile).mock.calls.length).toBe(1);
              expect(_mock(_node.fs.writeFile).mock.calls[0][0]).toBe((0, _cacheRepoUtils._getLastUpdatedFile)());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
    it('does NOT clone the repo if already present on disk',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _mock(_node.fs.exists).mockImplementation(function (dirPath) {
                return dirPath === (0, _cacheRepoUtils.getCacheRepoDir)() || dirPath === (0, _cacheRepoUtils._getCacheRepoGitDir)();
              });

              _context2.next = 3;
              return (0, _cacheRepoUtils.ensureCacheRepo)();

            case 3:
              expect(_mock(_git.cloneInto).mock.calls).toEqual([]);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));
    it('rebases if present on disk + lastUpdated is old',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _mock(_node.fs.exists).mockImplementation(function (dirPath) {
                return dirPath === (0, _cacheRepoUtils.getCacheRepoDir)() || dirPath === (0, _cacheRepoUtils._getCacheRepoGitDir)();
              });

              _mock(_node.fs.readFile).mockImplementation(function (filePath) {
                if (filePath === (0, _cacheRepoUtils._getLastUpdatedFile)()) {
                  return String(Date.now() - _cacheRepoUtils._CACHE_REPO_EXPIRY - 1);
                }
              });

              _context3.next = 4;
              return (0, _cacheRepoUtils.ensureCacheRepo)();

            case 4:
              expect(_mock(_git.rebaseRepoMaster).mock.calls[0]).toEqual([(0, _cacheRepoUtils.getCacheRepoDir)()]);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));
    it('does NOT rebase if on disk, but lastUpdated is recent',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _mock(_node.fs.exists).mockImplementation(function (dirPath) {
                return dirPath === (0, _cacheRepoUtils.getCacheRepoDir)() || dirPath === (0, _cacheRepoUtils._getCacheRepoGitDir)() || dirPath === (0, _cacheRepoUtils._getLastUpdatedFile)();
              });

              _mock(_node.fs.readFile).mockImplementation(function (filePath) {
                if (filePath === (0, _cacheRepoUtils._getLastUpdatedFile)()) {
                  return String(Date.now());
                }
              });

              _context4.next = 4;
              return (0, _cacheRepoUtils.ensureCacheRepo)();

            case 4:
              expect(_mock(_git.rebaseRepoMaster).mock.calls).toEqual([]);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));
  });
  describe('verifyCLIVersion', function () {
    var realReadFile = _node.fs.readFile;
    beforeEach(function () {
      _node.fs.readFile = jest.fn();
    });
    afterEach(function () {
      _node.fs.readFile = realReadFile;
    });
    it('does not throw if the cli range is compatible',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var readFileMock, err;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              readFileMock = _mock(_node.fs.readFile);
              readFileMock.mockImplementation(function () {
                switch (readFileMock.mock.calls.length) {
                  case 1:
                    return Promise.resolve(JSON.stringify({
                      compatibleCLIRange: '^1.0.0'
                    }));

                  case 2:
                    return Promise.resolve(JSON.stringify({
                      version: '1.1.0'
                    }));

                  default:
                    throw new Error('Unexpected call to fs.readFile! Did this impl of ' + 'verifyCLIVersion change?');
                }
              });
              err = null;
              _context5.prev = 3;
              _context5.next = 6;
              return (0, _cacheRepoUtils.verifyCLIVersion)();

            case 6:
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](3);
              err = _context5.t0;

            case 11:
              expect(err).toBe(null);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[3, 8]]);
    })));
    it('throws if the cli range is incompatible',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var readFileMock, err;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              readFileMock = _mock(_node.fs.readFile);
              readFileMock.mockImplementation(function () {
                switch (readFileMock.mock.calls.length) {
                  case 1:
                    return Promise.resolve(JSON.stringify({
                      compatibleCLIRange: '0.0.0'
                    }));

                  case 2:
                    return Promise.resolve(JSON.stringify({
                      version: '1.0.0'
                    }));

                  default:
                    throw new Error('Unexpected call to fs.readFile! Did this impl of ' + 'verifyCLIVersion change?');
                }
              });
              err = null;
              _context6.prev = 3;
              _context6.next = 6;
              return (0, _cacheRepoUtils.verifyCLIVersion)();

            case 6:
              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](3);
              err = _context6.t0;

            case 11:
              expect(err && err.message).toBe('Please upgrade your flow-typed CLI! This CLI is version 1.0.0, but ' + 'the latest flow-typed definitions are only compatible with ' + 'flow-typed@0.0.0');

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[3, 8]]);
    })));
  });
});