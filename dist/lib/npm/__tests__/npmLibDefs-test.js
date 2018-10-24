"use strict";

var _npmLibDefs = require("../npmLibDefs");

var _path = _interopRequireDefault(require("path"));

var _ValidationError = require("../../ValidationError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_FIXTURE_ROOT = _path.default.join(__dirname, '__npmLibDefs-fixtures__');

describe('npmLibDefs', function () {
  describe('extractLibDefsFromNpmPkgDir', function () {
    var FIXTURE_ROOT = _path.default.join(BASE_FIXTURE_ROOT, 'extractLibDefsFromNpmPkgDir');

    it('succeeds on well-formed repo',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var UNDERSCORE_PATH, defs;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              UNDERSCORE_PATH = _path.default.join(FIXTURE_ROOT, 'well-formed', 'definitions', 'npm', 'underscore_v1.x.x');
              _context.next = 3;
              return (0, _npmLibDefs._extractLibDefsFromNpmPkgDir)(UNDERSCORE_PATH, null, 'underscore_v1.x.x');

            case 3:
              defs = _context.sent;
              expect(defs).toEqual(expect.arrayContaining([{
                flowVersion: {
                  kind: 'ranged',
                  lower: {
                    major: 0,
                    minor: 13,
                    patch: 'x',
                    prerel: null
                  },
                  upper: {
                    major: 0,
                    minor: 37,
                    patch: 'x',
                    prerel: null
                  }
                },
                name: 'underscore',
                path: _path.default.join(UNDERSCORE_PATH, 'flow_v0.13.x-v0.37.x', 'underscore_v1.x.x.js'),
                scope: null,
                testFilePaths: [_path.default.join(UNDERSCORE_PATH, 'test_underscore-v1.js')],
                version: 'v1.x.x'
              }, {
                flowVersion: {
                  kind: 'ranged',
                  lower: {
                    major: 0,
                    minor: 38,
                    patch: 'x',
                    prerel: null
                  },
                  upper: null
                },
                name: 'underscore',
                path: _path.default.join(UNDERSCORE_PATH, 'flow_v0.38.x-', 'underscore_v1.x.x.js'),
                scope: null,
                testFilePaths: [_path.default.join(UNDERSCORE_PATH, 'test_underscore-v1.js'), _path.default.join(UNDERSCORE_PATH, 'flow_v0.38.x-', 'test_underscore.js')],
                version: 'v1.x.x'
              }]));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
    it('fails on bad package dir name',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var UNDERSCORE_PATH;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              UNDERSCORE_PATH = _path.default.join(FIXTURE_ROOT, 'bad-pkg-namever', 'definitions', 'npm', 'underscore_v1');
              _context2.next = 3;
              return expect((0, _npmLibDefs._extractLibDefsFromNpmPkgDir)(UNDERSCORE_PATH, null, 'underscore_v1')).rejects.toThrow('Malformed npm package name! Expected the name to be ' + 'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH> but instead got underscore_v1');

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));
    it('fails on unexpected files',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var UNDERSCORE_PATH;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              UNDERSCORE_PATH = _path.default.join(FIXTURE_ROOT, 'unexpected-pkg-file', 'definitions', 'npm', 'underscore_v1.x.x');
              _context3.next = 3;
              return expect((0, _npmLibDefs._extractLibDefsFromNpmPkgDir)(UNDERSCORE_PATH, null, 'underscore_v1.x.x')).rejects.toThrow('Flow versions must start with `flow_` but instead got asdfdir');

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));
    it('fails if flow versions overlap',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var UNDERSCORE_PATH;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              UNDERSCORE_PATH = _path.default.join(FIXTURE_ROOT, 'overlapping-flow-versions', 'definitions', 'npm', 'underscore_v1.x.x');
              _context4.next = 3;
              return expect((0, _npmLibDefs._extractLibDefsFromNpmPkgDir)(UNDERSCORE_PATH, null, 'underscore_v1.x.x')).rejects.toThrow('Flow versions not disjoint!');

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));
    it('fails if no libdefs are found',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var UNDERSCORE_PATH;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              UNDERSCORE_PATH = _path.default.join(FIXTURE_ROOT, 'empty-libdef-dir', 'definitions', 'npm', 'underscore_v1.x.x');
              _context5.next = 3;
              return expect((0, _npmLibDefs._extractLibDefsFromNpmPkgDir)(UNDERSCORE_PATH, null, 'underscore_v1.x.x')).rejects.toThrow('No libdef files found!');

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }))); // Fails at random (see #1229)
    // it('fails if libdef not published on npm', async () => {
    //   const TOTALLY_NOT_REAL_PKG_PATH = path.join(
    //     FIXTURE_ROOT,
    //     'pkg-not-on-npm',
    //     'definitions',
    //     'npm',
    //     'totally-not-real-pkg_v1.x.x',
    //   );
    //   const errs = new Map();
    //   const defsPromise2 = extractLibDefsFromNpmPkgDir(
    //     TOTALLY_NOT_REAL_PKG_PATH,
    //     null,
    //     'totally-not-real-pkg_v1.x.x',
    //     errs,
    //     true,
    //   );
    //   expect((await defsPromise2).length).toBe(2);
    //   expect([...errs.entries()]).toEqual([
    //     ['totally-not-real-pkg', ['Package does not exist on npm!']],
    //   ]);
    // });
  });
  describe('findNpmLibDef', function () {
    describe('when no cached libDefs found', function () {
      it('returns null',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var pkgName, pkgVersion, flowVersion;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                jest.setTimeout(10000);
                pkgName = 'jest-test-npm-package';
                pkgVersion = 'v1.0.0';
                flowVersion = {
                  kind: 'all'
                };
                _context6.next = 6;
                return expect((0, _npmLibDefs.findNpmLibDef)(pkgName, pkgVersion, flowVersion)).resolves.toEqual(null);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));
    });
    describe('when non-semver package provided', function () {
      it("doesn't throw error",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var pkgName, pkgVersion, flowVersion, filtered, error;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                pkgName = 'flow-bin';
                pkgVersion = 'github:flowtype/flow-bin';
                flowVersion = {
                  kind: 'all'
                };
                _context7.prev = 3;
                _context7.next = 6;
                return (0, _npmLibDefs.findNpmLibDef)(pkgName, pkgVersion, flowVersion);

              case 6:
                filtered = _context7.sent;
                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](3);
                error = _context7.t0;

              case 12:
                expect(error).toBeUndefined();
                expect(filtered).toBeNull();

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 9]]);
      })));
    });
  });
  describe('getInstalledNpmLibDefs', function () {
    var FIXTURE_ROOT = _path.default.join(BASE_FIXTURE_ROOT, 'getInstalledNpmLibDefs');

    it('returns an empty map when /flow-typed dir not present',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8() {
      var installedLibdefs;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _npmLibDefs.getInstalledNpmLibDefs)(_path.default.join(FIXTURE_ROOT, 'emptyFlowTypedDir'));

            case 2:
              installedLibdefs = _context8.sent;
              expect(installedLibdefs.size).toBe(0);

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    })));
    it('finds unscoped libdefs',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9() {
      var installedLibdefs, semverLibDef;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return (0, _npmLibDefs.getInstalledNpmLibDefs)(_path.default.join(FIXTURE_ROOT, 'unscopedLibDefs'));

            case 2:
              installedLibdefs = _context9.sent;
              expect(installedLibdefs.size).toBe(2);
              semverLibDef = installedLibdefs.get('flow-typed/npm/semver_v5.1.x.js'); // Since Flow doesn't understand Jest/Jasmine predicates, we wrap in a
              // vanilla one

              if (semverLibDef == null) {
                expect(semverLibDef).not.toEqual(null);
              } else {
                if (semverLibDef.kind !== 'LibDef') {
                  expect(semverLibDef.kind).toBe('LibDef');
                } else {
                  expect(semverLibDef.libDef).toEqual({
                    flowVersion: {
                      kind: 'specific',
                      ver: {
                        major: 0,
                        minor: 27,
                        patch: 0,
                        prerel: null
                      }
                    },
                    name: 'semver',
                    path: 'flow-typed/npm/semver_v5.1.x.js',
                    scope: null,
                    testFilePaths: [],
                    version: 'v5.1.x'
                  });
                }
              }

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    })));
    it('finds scoped libdefs',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee10() {
      var installedLibdefs, semverLibDef;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return (0, _npmLibDefs.getInstalledNpmLibDefs)(_path.default.join(FIXTURE_ROOT, 'scopedLibDefs'));

            case 2:
              installedLibdefs = _context10.sent;
              expect(installedLibdefs.size).toBe(1);
              semverLibDef = installedLibdefs.get('flow-typed/npm/@kadira/storybook_v1.x.x.js'); // Since Flow doesn't understand Jest/Jasmine predicates, we wrap in a
              // vanilla one

              if (semverLibDef == null) {
                expect(semverLibDef).not.toEqual(null);
              } else {
                if (semverLibDef.kind !== 'LibDef') {
                  expect(semverLibDef.kind).toBe('LibDef');
                } else {
                  expect(semverLibDef.libDef).toEqual({
                    flowVersion: {
                      kind: 'specific',
                      ver: {
                        major: 0,
                        minor: 30,
                        patch: 'x',
                        prerel: null
                      }
                    },
                    name: 'storybook',
                    path: 'flow-typed/npm/@kadira/storybook_v1.x.x.js',
                    scope: '@kadira',
                    testFilePaths: [],
                    version: 'v1.x.x'
                  });
                  expect((0, _npmLibDefs.getScopedPackageName)(semverLibDef.libDef)).toEqual('@kadira/storybook');
                }
              }

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    })));
    it('finds libDef with fully-bounded semver range',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee11() {
      var installedLibdefs, semverLibDef;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return (0, _npmLibDefs.getInstalledNpmLibDefs)(_path.default.join(FIXTURE_ROOT, 'unscopedLibDefs'));

            case 2:
              installedLibdefs = _context11.sent;
              expect(installedLibdefs.size).toBe(2);
              semverLibDef = installedLibdefs.get('flow-typed/npm/react-redux_v5.x.x.js'); // Since Flow doesn't understand Jest/Jasmine predicates, we wrap in a
              // vanilla one

              if (semverLibDef == null) {
                expect(semverLibDef).not.toEqual(null);
              } else {
                if (semverLibDef.kind !== 'LibDef') {
                  expect(semverLibDef.kind).toBe('LibDef');
                } else {
                  expect(semverLibDef.libDef).toEqual({
                    flowVersion: {
                      kind: 'ranged',
                      lower: {
                        major: 0,
                        minor: 30,
                        patch: 'x',
                        prerel: null
                      },
                      upper: {
                        major: 0,
                        minor: 52,
                        patch: 'x',
                        prerel: null
                      }
                    },
                    name: 'react-redux',
                    path: 'flow-typed/npm/react-redux_v5.x.x.js',
                    scope: null,
                    testFilePaths: [],
                    version: 'v5.x.x'
                  });
                }
              }

            case 6:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    })));
  });
  describe('getNpmLibDefs', function () {
    var FIXTURE_ROOT = _path.default.join(BASE_FIXTURE_ROOT, 'getNpmLibDefs');

    it('parses npm scope name correctly',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee12() {
      var FIXTURE_DIR, libDefs, scopedLibDefs;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              FIXTURE_DIR = _path.default.join(FIXTURE_ROOT, 'scoped-pkgs', 'definitions');
              _context12.next = 3;
              return (0, _npmLibDefs.getNpmLibDefs)(FIXTURE_DIR);

            case 3:
              libDefs = _context12.sent;
              expect(libDefs.length).toBe(4);
              scopedLibDefs = libDefs.filter(function (def) {
                return def.scope !== null;
              });
              expect(scopedLibDefs.length).toBe(2);

            case 7:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    })));
    it('errors when an unexpected file is in definitions/npm/',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee13() {
      var FIXTURE_DIR;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              FIXTURE_DIR = _path.default.join(FIXTURE_ROOT, 'unexpected-file', 'definitions');
              _context13.next = 3;
              return expect((0, _npmLibDefs.getNpmLibDefs)(FIXTURE_DIR)).rejects.toEqual([new _ValidationError.ValidationError("Expected only directories to be present in this directory.")]);

            case 3:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    })));
  });
  describe('parsePkgNameVer', function () {
    it('parses non-wildcard libs', function () {
      expect((0, _npmLibDefs._parsePkgNameVer)('lib_v1.2.3')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 3
        }
      });
      expect((0, _npmLibDefs._parsePkgNameVer)('lib_v1.2.3-asdf')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'asdf'
        }
      });
    });
    it('parses wildcard minor libs', function () {
      expect((0, _npmLibDefs._parsePkgNameVer)('lib_v1.x.x')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 'x',
          patch: 'x'
        }
      });
      expect((0, _npmLibDefs._parsePkgNameVer)('lib_v1.x.x-asdf')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: 'asdf'
        }
      });
    });
    it('parses wildcard patch libs', function () {
      expect((0, _npmLibDefs._parsePkgNameVer)('lib_v1.2.x')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 'x'
        }
      });
      expect((0, _npmLibDefs._parsePkgNameVer)('lib_v1.2.x-asdf')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 'x',
          prerel: 'asdf'
        }
      });
    });
    it('errors on wildcard major', function () {
      expect(function () {
        return (0, _npmLibDefs._parsePkgNameVer)('lib_vx.x.x');
      }).toThrow('Malformed npm package name! Expected the name to be ' + 'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH> but instead got lib_vx.x.x');
    });
  });
  describe('validateVersionNumPart', function () {
    it('returns a number when a string-number is given', function () {
      expect((0, _npmLibDefs._validateVersionNumPart)('42', '')).toBe(42);
    });
    it('errors when a non-number-string is given', function () {
      var errmsg = "Invalid major number: 'x'. Expected a number.";
      expect(function () {
        return (0, _npmLibDefs._validateVersionNumPart)('x', 'major');
      }).toThrow(errmsg);
    });
  });
  describe('validateVersionPart', function () {
    it('returns "x" when given "x"', function () {
      expect((0, _npmLibDefs._validateVersionPart)('x', '')).toBe('x');
    });
  });
});