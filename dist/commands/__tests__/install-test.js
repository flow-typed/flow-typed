"use strict";

var _cacheRepoUtils = require("../../lib/cacheRepoUtils");

var _fileUtils = require("../../lib/fileUtils");

var _flowVersion = require("../../lib/flowVersion");

var _git = require("../../lib/git");

var _node = require("../../lib/node");

var _npmLibDefs = require("../../lib/npm/npmLibDefs");

var _TEST_UTILS = require("../../lib/TEST_UTILS");

var _install = require("../install");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('../../lib/git').rebaseRepoMaster = jest.fn();

var BASE_FIXTURE_ROOT = _node.path.join(__dirname, '__install-fixtures__');

function _mock(mockFn) {
  return mockFn;
}

function touchFile(_x) {
  return _touchFile.apply(this, arguments);
}

function _touchFile() {
  _touchFile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee19(filePath) {
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.t0 = _node.fs;
            _context19.next = 3;
            return _node.fs.open(filePath, 'w');

          case 3:
            _context19.t1 = _context19.sent;
            _context19.next = 6;
            return _context19.t0.close.call(_context19.t0, _context19.t1);

          case 6:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, this);
  }));
  return _touchFile.apply(this, arguments);
}

function writePkgJson(_x2, _x3) {
  return _writePkgJson.apply(this, arguments);
}

function _writePkgJson() {
  _writePkgJson = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee20(filePath, pkgJson) {
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return _node.fs.writeFile(filePath, JSON.stringify(pkgJson));

          case 2:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, this);
  }));
  return _writePkgJson.apply(this, arguments);
}

describe('install (command)', function () {
  describe('determineFlowVersion', function () {
    it('infers version from path if arg not passed', function () {
      return (0, _TEST_UTILS.testProject)(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(ROOT_DIR) {
          var ARBITRARY_PATH, flowVer;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ARBITRARY_PATH = _node.path.join(ROOT_DIR, 'some', 'arbitrary', 'path');
                  _context.next = 3;
                  return Promise.all([(0, _fileUtils.mkdirp)(ARBITRARY_PATH), touchFile(_node.path.join(ROOT_DIR, '.flowconfig')), writePkgJson(_node.path.join(ROOT_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.40.0'
                    }
                  })]);

                case 3:
                  _context.next = 5;
                  return (0, _install._determineFlowVersion)(ARBITRARY_PATH);

                case 5:
                  flowVer = _context.sent;
                  expect(flowVer).toEqual({
                    kind: 'specific',
                    ver: {
                      major: 0,
                      minor: 40,
                      patch: 0,
                      prerel: null
                    }
                  });

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x4) {
          return _ref.apply(this, arguments);
        };
      }());
    });
    it('uses explicitly specified version',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var explicitVer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _install._determineFlowVersion)('/', '0.7.0');

            case 2:
              explicitVer = _context2.sent;
              expect(explicitVer).toEqual({
                kind: 'specific',
                ver: {
                  major: 0,
                  minor: 7,
                  patch: 0,
                  prerel: null
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));
    it("uses 'v'-prefixed explicitly specified version",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var explicitVer;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _install._determineFlowVersion)('/', 'v0.7.0');

            case 2:
              explicitVer = _context3.sent;
              expect(explicitVer).toEqual({
                kind: 'specific',
                ver: {
                  major: 0,
                  minor: 7,
                  patch: 0,
                  prerel: null
                }
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));
  });
  describe('installNpmLibDefs', function () {
    var origConsoleError = console.error;
    beforeEach(function () {
      console.error = jest.fn();
    });
    afterEach(function () {
      console.error = origConsoleError;
    });
    it('errors if unable to find a project root (.flowconfig)', function () {
      return (0, _TEST_UTILS.testProject)(
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(ROOT_DIR) {
          var result;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _install._installNpmLibDefs)({
                    cwd: ROOT_DIR,
                    flowVersion: (0, _flowVersion.parseDirString)('flow_v0.40.0'),
                    explicitLibDefs: [],
                    libdefDir: 'flow-typed',
                    verbose: false,
                    overwrite: false,
                    skip: false,
                    ignoreDeps: []
                  });

                case 2:
                  result = _context4.sent;
                  expect(result).toBe(1);
                  expect(_mock(console.error).mock.calls).toEqual([['Error: Unable to find a flow project in the current dir or any of ' + "it's parent dirs!\n" + 'Please run this command from within a Flow project.']]);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x5) {
          return _ref4.apply(this, arguments);
        };
      }());
    });
    it("errors if an explicitly specified libdef arg doesn't match npm " + 'pkgver format', function () {
      return (0, _TEST_UTILS.testProject)(
      /*#__PURE__*/
      function () {
        var _ref5 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(ROOT_DIR) {
          var result;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return touchFile(_node.path.join(ROOT_DIR, '.flowconfig'));

                case 2:
                  _context5.next = 4;
                  return writePkgJson(_node.path.join(ROOT_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.40.0'
                    }
                  });

                case 4:
                  _context5.next = 6;
                  return (0, _install._installNpmLibDefs)({
                    cwd: ROOT_DIR,
                    flowVersion: (0, _flowVersion.parseDirString)('flow_v0.40.0'),
                    explicitLibDefs: ['INVALID'],
                    libdefDir: 'flow-typed',
                    verbose: false,
                    overwrite: false,
                    skip: false,
                    ignoreDeps: []
                  });

                case 6:
                  result = _context5.sent;
                  expect(result).toBe(1);
                  expect(_mock(console.error).mock.calls).toEqual([['ERROR: Package not found from package.json.\n' + 'Please specify version for the package in the format of `foo@1.2.3`']]);

                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x6) {
          return _ref5.apply(this, arguments);
        };
      }());
    });
    it('warns if 0 dependencies are found in package.json', function () {
      return (0, _TEST_UTILS.testProject)(
      /*#__PURE__*/
      function () {
        var _ref6 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6(ROOT_DIR) {
          var result;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return Promise.all([touchFile(_node.path.join(ROOT_DIR, '.flowconfig')), writePkgJson(_node.path.join(ROOT_DIR, 'package.json'), {
                    name: 'test'
                  })]);

                case 2:
                  _context6.next = 4;
                  return (0, _install._installNpmLibDefs)({
                    cwd: ROOT_DIR,
                    flowVersion: (0, _flowVersion.parseDirString)('flow_v0.40.0'),
                    explicitLibDefs: [],
                    libdefDir: 'flow-typed',
                    verbose: false,
                    overwrite: false,
                    skip: false,
                    ignoreDeps: []
                  });

                case 4:
                  result = _context6.sent;
                  expect(result).toBe(0);
                  expect(_mock(console.error).mock.calls).toEqual([["No dependencies were found in this project's package.json!"]]);

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x7) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
  });
  describe('installNpmLibDef', function () {
    var FIXTURE_ROOT = _node.path.join(BASE_FIXTURE_ROOT, 'installNpmLibDef');

    var FIXTURE_FAKE_CACHE_REPO_DIR = _node.path.join(FIXTURE_ROOT, 'fakeCacheRepo');

    var origConsoleLog = console.log;
    beforeEach(function () {
      console.log = jest.fn();
    });
    afterEach(function () {
      console.log = origConsoleLog;
    });
    it('installs scoped libdefs within a scoped directory', function () {
      return (0, _TEST_UTILS.testProject)(
      /*#__PURE__*/
      function () {
        var _ref7 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee7(ROOT_DIR) {
          var FAKE_CACHE_DIR, FAKE_CACHE_REPO_DIR, FLOWPROJ_DIR, FLOWTYPED_DIR, availableLibDefs;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  FAKE_CACHE_DIR = _node.path.join(ROOT_DIR, 'fakeCache');
                  FAKE_CACHE_REPO_DIR = _node.path.join(FAKE_CACHE_DIR, 'repo');
                  FLOWPROJ_DIR = _node.path.join(ROOT_DIR, 'flowProj');
                  FLOWTYPED_DIR = _node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm');
                  _context7.next = 6;
                  return Promise.all([(0, _fileUtils.mkdirp)(FAKE_CACHE_REPO_DIR), (0, _fileUtils.mkdirp)(FLOWTYPED_DIR)]);

                case 6:
                  _context7.next = 8;
                  return Promise.all([(0, _fileUtils.copyDir)(FIXTURE_FAKE_CACHE_REPO_DIR, FAKE_CACHE_REPO_DIR), touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.40.0'
                    }
                  })]);

                case 8:
                  _context7.next = 10;
                  return (0, _git.init)(FAKE_CACHE_REPO_DIR);

                case 10:
                  _context7.next = 12;
                  return (0, _git.add)(FAKE_CACHE_REPO_DIR, 'definitions');

                case 12:
                  _context7.next = 14;
                  return (0, _git.commit)(FAKE_CACHE_REPO_DIR, 'FIRST');

                case 14:
                  (0, _cacheRepoUtils._setCustomCacheDir)(FAKE_CACHE_DIR);
                  _context7.next = 17;
                  return (0, _npmLibDefs.getNpmLibDefs)(_node.path.join(FAKE_CACHE_REPO_DIR, 'definitions'));

                case 17:
                  availableLibDefs = _context7.sent;
                  _context7.next = 20;
                  return (0, _install._installNpmLibDef)(availableLibDefs[0], FLOWTYPED_DIR, false);

                case 20:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x8) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
  });
  describe('end-to-end tests', function () {
    var FIXTURE_ROOT = _node.path.join(BASE_FIXTURE_ROOT, 'end-to-end');

    var FIXTURE_FAKE_CACHE_REPO_DIR = _node.path.join(FIXTURE_ROOT, 'fakeCacheRepo');

    var origConsoleLog = console.log;
    var origConsoleError = console.error;
    beforeEach(function () {
      console.log = jest.fn();
      console.error = jest.fn();
    });
    afterEach(function () {
      console.log = origConsoleLog;
      console.error = origConsoleError;
    });

    function fakeProjectEnv(_x9) {
      return _fakeProjectEnv.apply(this, arguments);
    }

    function _fakeProjectEnv() {
      _fakeProjectEnv = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(runTest) {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return (0, _TEST_UTILS.testProject)(
                /*#__PURE__*/
                function () {
                  var _ref17 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee17(ROOT_DIR) {
                    var FAKE_CACHE_DIR, FAKE_CACHE_REPO_DIR, FLOWPROJ_DIR, FLOWTYPED_DIR, origCWD;
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            FAKE_CACHE_DIR = _node.path.join(ROOT_DIR, 'fakeCache');
                            FAKE_CACHE_REPO_DIR = _node.path.join(FAKE_CACHE_DIR, 'repo');
                            FLOWPROJ_DIR = _node.path.join(ROOT_DIR, 'flowProj');
                            FLOWTYPED_DIR = _node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm');
                            _context17.next = 6;
                            return Promise.all([(0, _fileUtils.mkdirp)(FAKE_CACHE_REPO_DIR), (0, _fileUtils.mkdirp)(FLOWTYPED_DIR)]);

                          case 6:
                            _context17.next = 8;
                            return (0, _fileUtils.copyDir)(FIXTURE_FAKE_CACHE_REPO_DIR, FAKE_CACHE_REPO_DIR);

                          case 8:
                            _context17.next = 10;
                            return (0, _git.init)(FAKE_CACHE_REPO_DIR);

                          case 10:
                            _context17.next = 12;
                            return Promise.all([(0, _git.setLocalConfig)(FAKE_CACHE_REPO_DIR, 'user.name', 'Test Author'), (0, _git.setLocalConfig)(FAKE_CACHE_REPO_DIR, 'user.email', 'test@flow-typed.org')]);

                          case 12:
                            _context17.next = 14;
                            return (0, _git.add)(FAKE_CACHE_REPO_DIR, 'definitions');

                          case 14:
                            _context17.next = 16;
                            return (0, _git.commit)(FAKE_CACHE_REPO_DIR, 'FIRST');

                          case 16:
                            (0, _cacheRepoUtils._setCustomCacheDir)(FAKE_CACHE_DIR);
                            origCWD = process.cwd;

                            process.cwd = function () {
                              return FLOWPROJ_DIR;
                            };

                            _context17.prev = 19;
                            _context17.next = 22;
                            return runTest(FLOWPROJ_DIR);

                          case 22:
                            _context17.prev = 22;
                            process.cwd = origCWD;
                            (0, _cacheRepoUtils._clearCustomCacheDir)();
                            return _context17.finish(22);

                          case 26:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee17, this, [[19,, 22, 26]]);
                  }));

                  return function (_x19) {
                    return _ref17.apply(this, arguments);
                  };
                }());

              case 2:
                return _context18.abrupt("return", _context18.sent);

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      return _fakeProjectEnv.apply(this, arguments);
    }

    it('installs available libdefs', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref8 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8(FLOWPROJ_DIR) {
          var fooLibDefContents;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context8.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false,
                    ignoreDeps: []
                  });

                case 4:
                  _context8.t0 = expect;
                  _context8.next = 7;
                  return Promise.all([_node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'flow-bin_v0.x.x.js')), _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'))]);

                case 7:
                  _context8.t1 = _context8.sent;
                  _context8.t2 = [true, true];
                  (0, _context8.t0)(_context8.t1).toEqual(_context8.t2);
                  _context8.next = 12;
                  return _node.fs.readFile(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'));

                case 12:
                  fooLibDefContents = _context8.sent.toString();
                  expect(fooLibDefContents).toContain('// flow-typed signature: ');
                  expect(fooLibDefContents).toContain('// flow-typed version: ');

                case 15:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x10) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
    it('ignores libdefs in dev, bundled, optional or peer dependencies when flagged', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref9 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee9(FLOWPROJ_DIR) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      foo: '1.2.3'
                    },
                    peerDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    optionalDependencies: {
                      foo: '2.0.0'
                    },
                    bundledDependencies: {
                      bar: '^1.6.9'
                    },
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'bar'))]);

                case 2:
                  _context9.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false,
                    ignoreDeps: ['dev', 'optional', 'bundled']
                  });

                case 4:
                  _context9.t0 = expect;
                  _context9.next = 7;
                  return Promise.all([_node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'flow-bin_v0.x.x.js')), _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js')), _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'bar_v1.x.x.js'))]);

                case 7:
                  _context9.t1 = _context9.sent;
                  _context9.t2 = [true, true, false];
                  (0, _context9.t0)(_context9.t1).toEqual(_context9.t2);

                case 10:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function (_x11) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    it('stubs unavailable libdefs', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref10 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee10(FLOWPROJ_DIR) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      someUntypedDep: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'someUntypedDep')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context10.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false
                  });

                case 4:
                  _context10.t0 = expect;
                  _context10.next = 7;
                  return _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'someUntypedDep_vx.x.x.js'));

                case 7:
                  _context10.t1 = _context10.sent;
                  (0, _context10.t0)(_context10.t1).toBe(true);

                case 9:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function (_x12) {
          return _ref10.apply(this, arguments);
        };
      }());
    });
    it("doesn't stub unavailable libdefs when --skip is passed", function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref11 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee11(FLOWPROJ_DIR) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      someUntypedDep: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'someUntypedDep')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context11.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: true
                  });

                case 4:
                  _context11.t0 = expect;
                  _context11.next = 7;
                  return _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm'));

                case 7:
                  _context11.t1 = _context11.sent;
                  (0, _context11.t0)(_context11.t1).toBe(true);

                case 9:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function (_x13) {
          return _ref11.apply(this, arguments);
        };
      }());
    });
    it('overwrites stubs when libdef becomes available (with --overwrite)', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref12 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee12(FLOWPROJ_DIR) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context12.next = 4;
                  return _node.fs.writeFile(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_vx.x.x.js'), '');

                case 4:
                  _context12.next = 6;
                  return (0, _install.run)({
                    _: [],
                    overwrite: true,
                    verbose: false,
                    skip: false
                  });

                case 6:
                  _context12.t0 = expect;
                  _context12.next = 9;
                  return Promise.all([_node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_vx.x.x.js')), _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'))]);

                case 9:
                  _context12.t1 = _context12.sent;
                  _context12.t2 = [false, true];
                  (0, _context12.t0)(_context12.t1).toEqual(_context12.t2);

                case 12:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        return function (_x14) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
    it("doesn't overwrite tweaked libdefs (without --overwrite)", function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref13 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee13(FLOWPROJ_DIR) {
          var libdefFilePath, libdefFileContent;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context13.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false
                  });

                case 4:
                  libdefFilePath = _node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'); // Tweak the libdef for foo

                  _context13.next = 7;
                  return _node.fs.readFile(libdefFilePath);

                case 7:
                  _context13.t0 = _context13.sent.toString();
                  libdefFileContent = _context13.t0 + '\n// TWEAKED!';
                  _context13.next = 11;
                  return _node.fs.writeFile(libdefFilePath, libdefFileContent);

                case 11:
                  _context13.next = 13;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false
                  });

                case 13:
                  _context13.t1 = expect;
                  _context13.next = 16;
                  return _node.fs.readFile(libdefFilePath);

                case 16:
                  _context13.next = 18;
                  return _context13.sent.toString();

                case 18:
                  _context13.t2 = _context13.sent;
                  _context13.t3 = libdefFileContent;
                  (0, _context13.t1)(_context13.t2).toBe(_context13.t3);

                case 21:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        return function (_x15) {
          return _ref13.apply(this, arguments);
        };
      }());
    });
    it('overwrites tweaked libdefs when --overwrite is passed', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref14 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee14(FLOWPROJ_DIR) {
          var libdefFilePath, libdefFileContent;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context14.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false
                  });

                case 4:
                  libdefFilePath = _node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'); // Tweak the libdef for foo

                  _context14.next = 7;
                  return _node.fs.readFile(libdefFilePath);

                case 7:
                  libdefFileContent = _context14.sent.toString();
                  _context14.next = 10;
                  return _node.fs.writeFile(libdefFilePath, libdefFileContent + '\n// TWEAKED!');

                case 10:
                  _context14.next = 12;
                  return (0, _install.run)({
                    _: [],
                    overwrite: true,
                    skip: false,
                    verbose: false
                  });

                case 12:
                  _context14.t0 = expect;
                  _context14.next = 15;
                  return _node.fs.readFile(libdefFilePath);

                case 15:
                  _context14.next = 17;
                  return _context14.sent.toString();

                case 17:
                  _context14.t1 = _context14.sent;
                  _context14.t2 = libdefFileContent;
                  (0, _context14.t0)(_context14.t1).toBe(_context14.t2);

                case 20:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        return function (_x16) {
          return _ref14.apply(this, arguments);
        };
      }());
    });
    it('uses flow-bin defined in another package.json', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref15 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee15(FLOWPROJ_DIR) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return Promise.all([touchFile(_node.path.join(FLOWPROJ_DIR, '.flowconfig')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), writePkgJson(_node.path.join(FLOWPROJ_DIR, '..', 'package.json'), {
                    name: 'parent',
                    devDependencies: {
                      'flow-bin': '^0.45.0'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, '..', 'node_modules', 'flow-bin'))]);

                case 2:
                  _context15.next = 4;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false,
                    packageDir: _node.path.join(FLOWPROJ_DIR, '..')
                  });

                case 4:
                  _context15.t0 = expect;
                  _context15.next = 7;
                  return _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'flow-typed', 'npm', 'foo_v1.x.x.js'));

                case 7:
                  _context15.t1 = _context15.sent;
                  (0, _context15.t0)(_context15.t1).toEqual(true);

                case 9:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        return function (_x17) {
          return _ref15.apply(this, arguments);
        };
      }());
    });
    it('uses .flowconfig from specified root directory', function () {
      return fakeProjectEnv(
      /*#__PURE__*/
      function () {
        var _ref16 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee16(FLOWPROJ_DIR) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return Promise.all([(0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'src')), writePkgJson(_node.path.join(FLOWPROJ_DIR, 'package.json'), {
                    name: 'test',
                    devDependencies: {
                      'flow-bin': '^0.43.0'
                    },
                    dependencies: {
                      foo: '1.2.3'
                    }
                  }), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'foo')), (0, _fileUtils.mkdirp)(_node.path.join(FLOWPROJ_DIR, 'node_modules', 'flow-bin'))]);

                case 2:
                  _context16.next = 4;
                  return touchFile(_node.path.join(FLOWPROJ_DIR, 'src', '.flowconfig'));

                case 4:
                  _context16.next = 6;
                  return (0, _install.run)({
                    _: [],
                    overwrite: false,
                    verbose: false,
                    skip: false,
                    rootDir: _node.path.join(FLOWPROJ_DIR, 'src')
                  });

                case 6:
                  _context16.t0 = expect;
                  _context16.next = 9;
                  return _node.fs.exists(_node.path.join(FLOWPROJ_DIR, 'src', 'flow-typed', 'npm', 'foo_v1.x.x.js'));

                case 9:
                  _context16.t1 = _context16.sent;
                  (0, _context16.t0)(_context16.t1).toEqual(true);

                case 11:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        return function (_x18) {
          return _ref16.apply(this, arguments);
        };
      }());
    });
  });
});