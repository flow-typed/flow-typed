"use strict";

var _node = require("../node.js");

var _libDefs = require("../libDefs.js");

var _flowVersion = require("../flowVersion");

var _git = require("../git.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.enableAutomock();
jest.unmock('../libDefs.js');
jest.unmock('../semver.js');
jest.unmock('semver');
jest.unmock('../flowVersion');

/**
 * Jest's process of mocking in place fools Flow, so we use this as an explicit
 * escape hatch when we need to side-step Flow.
 */
function _mock(mockFn) {
  return mockFn;
}

describe('libDefs', function () {
  describe('ensureCacheRepo', function () {
    beforeEach(function () {
      _mock(_git.cloneInto).mockClear();

      _mock(_git.rebaseRepoMaster).mockClear();

      _libDefs._cacheRepoAssure.lastAssured = 0;
      _libDefs._cacheRepoAssure.pendingAssure = Promise.resolve();
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
              return (0, _libDefs._ensureCacheRepo)();

            case 2:
              expect(_mock(_git.cloneInto).mock.calls).toEqual([[_libDefs._REMOTE_REPO_URL, _libDefs._CACHE_REPO_DIR]]);
              expect(_mock(_node.fs.writeFile).mock.calls.length).toBe(1);
              expect(_mock(_node.fs.writeFile).mock.calls[0][0]).toBe(_libDefs._LAST_UPDATED_FILE);

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
                return dirPath === _libDefs._CACHE_REPO_DIR || dirPath === _libDefs._CACHE_REPO_GIT_DIR;
              });

              _context2.next = 3;
              return (0, _libDefs._ensureCacheRepo)();

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
                return dirPath === _libDefs._CACHE_REPO_DIR || dirPath === _libDefs._CACHE_REPO_GIT_DIR;
              });

              _mock(_node.fs.readFile).mockImplementation(function (filePath) {
                if (filePath === _libDefs._LAST_UPDATED_FILE) {
                  return String(Date.now() - _libDefs._CACHE_REPO_EXPIRY - 1);
                }
              });

              _context3.next = 4;
              return (0, _libDefs._ensureCacheRepo)();

            case 4:
              expect(_mock(_git.rebaseRepoMaster).mock.calls[0]).toEqual([_libDefs._CACHE_REPO_DIR]);

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
                return dirPath === _libDefs._CACHE_REPO_DIR || dirPath === _libDefs._CACHE_REPO_GIT_DIR || dirPath === _libDefs._LAST_UPDATED_FILE;
              });

              _mock(_node.fs.readFile).mockImplementation(function (filePath) {
                if (filePath === _libDefs._LAST_UPDATED_FILE) {
                  return String(Date.now());
                }
              });

              _context4.next = 4;
              return (0, _libDefs._ensureCacheRepo)();

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
  describe('updateCacheRepo', function () {
    beforeEach(function () {
      _mock(_git.rebaseRepoMaster).mockClear();

      _libDefs._cacheRepoAssure.lastAssured = 0;
      _libDefs._cacheRepoAssure.pendingAssure = Promise.resolve();
    });
    it('rebases if present on disk + lastUpdated is old',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _mock(_node.fs.exists).mockImplementation(function (dirPath) {
                return dirPath === _libDefs._CACHE_REPO_DIR || dirPath === _libDefs._CACHE_REPO_GIT_DIR;
              });

              _mock(_node.fs.readFile).mockImplementation(function (filePath) {
                if (filePath === _libDefs._LAST_UPDATED_FILE) {
                  return String(Date.now() - _libDefs._CACHE_REPO_EXPIRY - 1);
                }
              });

              _context5.next = 4;
              return (0, _libDefs.updateCacheRepo)();

            case 4:
              expect(_mock(_git.rebaseRepoMaster).mock.calls).toEqual([[_libDefs._CACHE_REPO_DIR]]);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));
  });
  describe('filterLibDefs', function () {
    function _generateMockLibdef(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersionStr: verStr,
        flowVersion: (0, _flowVersion.parseDirString)(flowVerStr),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: []
      };
    }

    describe('fuzzy filter', function () {
      it('filters on exact name', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'fuzzy',
          term: 'mori'
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });
      it('filters on differently-cased name', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'fuzzy',
          term: 'Mori'
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });
      it('filters on partial name', function () {
        var fixture = [_generateMockLibdef('**mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori**', 'v0.3.x', 'flow_v0.18.x-'), _generateMockLibdef('mo**ri', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'fuzzy',
          term: 'mori'
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });
      it('filters on flow version', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'fuzzy',
          term: 'mori',
          flowVersionStr: 'v0.19.0'
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });
    describe('exact-name filter', function () {
      it('filters on exact name', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact-name',
          term: 'mori'
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });
      it('filters on differently-cased name', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact-name',
          term: 'Mori'
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });
      it('DOES NOT filter on partial name', function () {
        var fixture = [_generateMockLibdef('**mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-'), _generateMockLibdef('mo**ri', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact-name',
          term: 'mori'
        });
        expect(filtered).toEqual([fixture[1]]);
      });
      it('filters on flow version', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact-name',
          term: 'mori',
          flowVersionStr: 'v0.19.0'
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });
    describe('exact filter', function () {
      it('filters on exact name', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('notmori', 'v0.3.x', 'flow_v0.22.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.30.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.1'
        });
        expect(filtered).toEqual([fixture[0]]);
      });
      it('filters on differently-cased name', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('notmori', 'v0.3.x', 'flow_v0.22.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.28.0',
          pkgName: 'Mori',
          pkgVersionStr: 'v0.3.x'
        });
        expect(filtered).toEqual([fixture[0]]);
      });
      it('DOES NOT filter on partial name', function () {
        var fixture = [_generateMockLibdef('**mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori**', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mo**ri', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.28.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.1'
        });
        expect(filtered).toEqual([fixture[3]]);
      });
      it('filters on flow version', function () {
        var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.x', 'flow_v0.18.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.19.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.x'
        });
        expect(filtered).toEqual([fixture[1]]);
      });
      it('filters and orders from highest to lowest version', function () {
        var fixture = [_generateMockLibdef('mori', 'v2.x.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v3.x.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v2.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v2.1.x', 'flow_v0.22.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.22.0',
          pkgName: 'mori',
          pkgVersionStr: 'v2.3.0'
        });
        expect(filtered).toEqual([fixture[2], fixture[3], fixture[0]]);
      });
      it('filters using default (implied ^) and equals libdef versions', function () {
        var fixture = [_generateMockLibdef('mori', 'v2.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', '=v2.3.x', 'flow_v0.22.x-')];
        var filtered = (0, _libDefs.filterLibDefs)(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.22.0',
          pkgName: 'mori',
          pkgVersionStr: 'v2.4.0'
        });
        expect(filtered).toEqual([fixture[0]]);
      });
      describe('given a package range', function () {
        it('DOES NOT match when libdef range does not intersect package range', function () {
          var fixture = [_generateMockLibdef('mori', 'v0.2.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.4.x', 'flow_v0.22.x-')];
          var filtered = (0, _libDefs.filterLibDefs)(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.x.x',
            pkgName: 'mori',
            pkgVersionStr: '^0.3.0'
          });
          expect(filtered).toEqual([]);
        });
        it('DOES NOT match when ranges intersect but package supports older ' + 'versions than libdef', function () {
          var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-')];
          var filtered = (0, _libDefs.filterLibDefs)(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.22.0',
            pkgName: 'mori',
            pkgVersionStr: '>=0.2.9 <0.3.0'
          });
          expect(filtered).toEqual([]);
        });
        it('matches when ranges intersect and libdef supports older versions', function () {
          var fixture = [_generateMockLibdef('mori', 'v0.3.x', 'flow_v0.22.x-'), _generateMockLibdef('mori', 'v0.3.8', 'flow_v0.22.x-')];
          var filtered = (0, _libDefs.filterLibDefs)(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.22.0',
            pkgName: 'mori',
            pkgVersionStr: '>=0.3.2 <0.3.8'
          });
          expect(filtered).toEqual([fixture[0]]);
        });
      });
    });
  });
});