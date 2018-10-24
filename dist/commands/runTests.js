"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;
exports.run = run;
exports.description = exports.name = void 0;

var _node = require("../lib/node.js");

var _fileUtils = require("../lib/fileUtils.js");

var _github = require("../lib/github.js");

var _libDefs = require("../lib/libDefs.js");

var _isInFlowTypedRepo = _interopRequireDefault(require("../lib/isInFlowTypedRepo"));

var _flowVersion = require("../lib/flowVersion");

var _git = require("../lib/git");

var _got = _interopRequireDefault(require("got"));

var semver = _interopRequireWildcard(require("semver"));

var unzip = _interopRequireWildcard(require("unzipper"));

var _ValidationError = require("../lib/ValidationError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Used to decide which binary to fetch for each version of Flow
var BIN_PLATFORM = function (_) {
  switch (_node.os.type()) {
    case 'Linux':
      return 'linux64';

    case 'Darwin':
      return 'osx';

    case 'Windows_NT':
      return 'win64';

    default:
      throw new Error('Unsupported os.type()! ' + _node.os.type());
  }
}();

var PKG_ROOT_DIR = _node.path.join(__dirname, '..', '..');

var TEST_DIR = _node.path.join(PKG_ROOT_DIR, '.test-dir');

var BIN_DIR = _node.path.join(PKG_ROOT_DIR, '.flow-bins-cache');

var P = Promise;

/**
 * Scan the definitions/ directory to extract a flat list of TestGroup
 * structs. Each TestGroup represents a Package/PackageVersion/FlowVersion
 * directory.
 */
var basePathRegex = new RegExp('definitions/npm/(@[^/]*/)?[^/]*/?');

function getTestGroups(_x) {
  return _getTestGroups.apply(this, arguments);
}
/**
 * Memoized function that queries the GitHub releases for Flow, downloads the
 * zip for each version, extracts the zip, and moves the binary to
 * TEST_BIN/flow-vXXX for use later when running tests.
 */


function _getTestGroups() {
  _getTestGroups = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(repoDirPath) {
    var onlyChanged,
        libDefs,
        diff,
        changedDefs,
        baseDiff,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onlyChanged = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            _context.next = 3;
            return (0, _libDefs.getLibDefs)(repoDirPath);

          case 3:
            libDefs = _context.sent;

            if (!onlyChanged) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return (0, _git.getDiff)();

          case 7:
            diff = _context.sent;
            // $FlowFixMe
            baseDiff = diff.map(function (d) {
              var match = d.match(basePathRegex);

              if (match) {
                return match[0];
              }
            }).filter(function (d) {
              return d != null;
            });
            changedDefs = baseDiff.map(function (d) {
              return (0, _libDefs.parseRepoDirItem)(d).pkgName;
            });
            libDefs = libDefs.filter(function (def) {
              return changedDefs.includes(def.pkgName);
            });

          case 11:
            return _context.abrupt("return", libDefs.map(function (libDef) {
              var groupID = "".concat(libDef.pkgName, "_").concat(libDef.pkgVersionStr, "/").concat(libDef.flowVersionStr);
              return {
                id: groupID,
                testFilePaths: libDef.testFilePaths,
                libDefPath: libDef.path,
                flowVersion: libDef.flowVersion
              };
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getTestGroups.apply(this, arguments);
}

var _flowBinVersionPromise = null;

function getOrderedFlowBinVersions() {
  return _getOrderedFlowBinVersions.apply(this, arguments);
}

function _getOrderedFlowBinVersions() {
  _getOrderedFlowBinVersions = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var numberOfReleases,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            numberOfReleases = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 15;

            if (!(_flowBinVersionPromise !== null)) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", _flowBinVersionPromise);

          case 3:
            return _context4.abrupt("return", _flowBinVersionPromise = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var IS_WINDOWS, GH_CLIENT, QUERY_PAGE_SIZE, OS_ARCH_FILTER_RE, page, apiPayload, flowBins;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('Fetching all Flow binaries...');
                      IS_WINDOWS = _node.os.type() === 'Windows_NT';
                      GH_CLIENT = (0, _github.gitHubClient)(); // We only test against the latest numberOfReleases Versions

                      QUERY_PAGE_SIZE = numberOfReleases;
                      OS_ARCH_FILTER_RE = new RegExp("flow-".concat(BIN_PLATFORM));
                      page = 0;
                      _context3.next = 8;
                      return GH_CLIENT.repos.getReleases({
                        owner: 'facebook',
                        repo: 'flow',
                        page: page++,
                        per_page: QUERY_PAGE_SIZE
                      });

                    case 8:
                      apiPayload = _context3.sent;
                      flowBins = apiPayload.data.filter(function (rel) {
                        // Temporary fix for https://github.com/facebook/flow/issues/5922
                        if (rel.tag_name === 'v0.67.0') {
                          console.log('==========================================================================================');
                          console.log('We are temporarily skipping v0.67.0 due to https://github.com/facebook/flow/issues/5922');
                          console.log('==========================================================================================');
                          return false;
                        } // Temporary fixes for https://github.com/flowtype/flow-typed/issues/2422


                        if (rel.tag_name === 'v0.63.0' || rel.tag_name === 'v0.70.0') {
                          console.log('==========================================================================================');
                          console.log("We are temporarily skipping ".concat(rel.tag_name, " due to https://github.com/flowtype/flow-typed/issues/2422"));
                          console.log('==========================================================================================');
                          return false;
                        } // We only support flow 0.53.0 and newer


                        if (semver.lt(rel.tag_name, '0.53.0')) {
                          return false;
                        } // Because flow 0.57 was broken before 0.57.3 on the Windows platform, we also skip those versions when running on windows.


                        if (IS_WINDOWS && (semver.eq(rel.tag_name, '0.57.0') || semver.eq(rel.tag_name, '0.57.1') || semver.eq(rel.tag_name, '0.57.2'))) {
                          return false;
                        }

                        return true;
                      }).map(function (rel) {
                        // Find the binary zip in the list of assets
                        var binZip = rel.assets.filter(function (_ref2) {
                          var name = _ref2.name;
                          return OS_ARCH_FILTER_RE.test(name) && !/-latest.zip$/.test(name);
                        }).map(function (asset) {
                          return asset.browser_download_url;
                        });

                        if (binZip.length !== 1) {
                          throw new Error('Unexpected number of ' + BIN_PLATFORM + ' assets for flow-' + rel.tag_name + '! ' + JSON.stringify(binZip));
                        } else {
                          var version = rel.tag_name[0] === 'v' ? rel.tag_name : 'v' + rel.tag_name;
                          return {
                            version: version,
                            binURL: binZip[0]
                          };
                        }
                      }).sort(function (a, b) {
                        return semver.lt(a.version, b.version) ? -1 : 1;
                      });
                      _context3.next = 12;
                      return P.all(flowBins.map(
                      /*#__PURE__*/
                      function () {
                        var _ref4 = _asyncToGenerator(
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee2(_ref3) {
                          var version, binURL, zipPath, binPath, flowBinDirPath;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  version = _ref3.version, binURL = _ref3.binURL;
                                  zipPath = _node.path.join(BIN_DIR, 'flow-' + version + '.zip');
                                  binPath = _node.path.join(BIN_DIR, 'flow-' + version + (IS_WINDOWS ? '.exe' : ''));
                                  _context2.next = 5;
                                  return _node.fs.exists(binPath);

                                case 5:
                                  if (!_context2.sent) {
                                    _context2.next = 7;
                                    break;
                                  }

                                  return _context2.abrupt("return");

                                case 7:
                                  _context2.next = 9;
                                  return new Promise(function (res, rej) {
                                    console.log('  Fetching flow-%s...', version);

                                    _got.default.stream(binURL, {
                                      headers: {
                                        'User-Agent': 'flow-typed Test Runner ' + '(github.com/flowtype/flow-typed)'
                                      }
                                    }).on('error', function (err) {
                                      return rej(err);
                                    }).pipe(_node.fs.createWriteStream(zipPath).on('close', function () {
                                      console.log('    flow-%s finished downloading.', version);
                                      res();
                                    }));
                                  });

                                case 9:
                                  // Extract the flow binary
                                  flowBinDirPath = _node.path.join(BIN_DIR, 'TMP-flow-' + version);
                                  _context2.next = 12;
                                  return _node.fs.mkdir(flowBinDirPath);

                                case 12:
                                  console.log('  Extracting flow-%s...', version);
                                  _context2.next = 15;
                                  return new Promise(function (res, rej) {
                                    var unzipExtractor = unzip.Extract({
                                      path: flowBinDirPath
                                    });
                                    unzipExtractor.on('error', function (err) {
                                      rej(err);
                                    });
                                    unzipExtractor.on('close', function () {
                                      res();
                                    });

                                    _node.fs.createReadStream(zipPath).pipe(unzipExtractor);
                                  });

                                case 15:
                                  if (!IS_WINDOWS) {
                                    _context2.next = 20;
                                    break;
                                  }

                                  _context2.next = 18;
                                  return _node.fs.rename(_node.path.join(flowBinDirPath, 'flow', 'flow.exe'), _node.path.join(BIN_DIR, 'flow-' + version + '.exe'));

                                case 18:
                                  _context2.next = 24;
                                  break;

                                case 20:
                                  _context2.next = 22;
                                  return _node.fs.rename(_node.path.join(flowBinDirPath, 'flow', 'flow'), _node.path.join(BIN_DIR, 'flow-' + version));

                                case 22:
                                  _context2.next = 24;
                                  return _node.child_process.execP(['chmod', '755', _node.path.join(BIN_DIR, 'flow-' + version)].join(' '));

                                case 24:
                                  console.log('  Removing flow-%s artifacts...', version);
                                  _context2.next = 27;
                                  return P.all([(0, _fileUtils.recursiveRmdir)(flowBinDirPath), _node.fs.unlink(zipPath)]);

                                case 27:
                                  console.log('    flow-%s complete!', version);

                                case 28:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));

                        return function (_x24) {
                          return _ref4.apply(this, arguments);
                        };
                      }()));

                    case 12:
                      console.log('Finished fetching Flow binaries.\n');
                      return _context3.abrupt("return", flowBins.map(function (bin) {
                        return bin.version;
                      }));

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }))());

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getOrderedFlowBinVersions.apply(this, arguments);
}

var flowNameRegex = /^flow-v[0-9]+.[0-9]+.[0-9]+(\.exe)?$/;
/**
 * flow filename should be `flow-vx.x.x`
 * @param {string} name
 */

function checkFlowFilename(name) {
  return flowNameRegex.test(name);
}
/**
 * Return the sorted list of cached flow binaries that have previously been retrieved from github
 * and cached in the `.flow-bins-cache` directory.  This function is usually called when a failure
 * has occurred when attempting to refresh the flow releases from github, i.e. offline or over
 * API limit.
 */


function getCachedFlowBinVersions() {
  return _getCachedFlowBinVersions.apply(this, arguments);
}

function _getCachedFlowBinVersions() {
  _getCachedFlowBinVersions = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var numberOfReleases,
        versions,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            numberOfReleases = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 15;
            _context5.next = 3;
            return _node.fs.readdir(_node.path.join(BIN_DIR));

          case 3:
            _context5.t0 = checkFlowFilename;

            _context5.t1 = function (dir) {
              return dir.slice(6);
            };

            versions = _context5.sent.filter(_context5.t0).map(_context5.t1);
            // sort the versions that we have inplace
            versions.sort(function (a, b) {
              return semver.lt(a, b) ? -1 : 1;
            });
            versions.splice(0, versions.length - numberOfReleases); // return the versions with a leading 'v' to satisfy the expected return value

            return _context5.abrupt("return", versions.map(function (version) {
              return "v".concat(version);
            }));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _getCachedFlowBinVersions.apply(this, arguments);
}

function writeFlowConfig(_x2, _x3, _x4) {
  return _writeFlowConfig.apply(this, arguments);
}

function _writeFlowConfig() {
  _writeFlowConfig = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(repoDirPath, testDirPath, libDefPath) {
    var destFlowConfigPath, flowConfigData;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            destFlowConfigPath = _node.path.join(testDirPath, '.flowconfig');
            flowConfigData = ['[libs]', _node.path.basename(libDefPath), _node.path.join(repoDirPath, '..', '__util__', 'tdd_framework.js'), '', '[options]', 'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$ExpectError', 'include_warnings=true', '', // Be sure to ignore stuff in the node_modules directory of the flow-typed
            // CLI repository!
            '[ignore]', _node.path.join(testDirPath, '..', '..', 'node_modules')].join('\n');
            _context6.next = 4;
            return _node.fs.writeFile(destFlowConfigPath, flowConfigData);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _writeFlowConfig.apply(this, arguments);
}

function testTypeDefinition(flowVer, testDirPath) {
  return new Promise(function (res) {
    var child = _node.child_process.exec([_node.path.join(BIN_DIR, 'flow-' + flowVer), 'check', '--strip-root', '--all', testDirPath].join(' '));

    var stdErrOut = '';
    child.stdout.on('data', function (data) {
      return stdErrOut += data;
    });
    child.stderr.on('data', function (data) {
      return stdErrOut += data;
    });
    child.on('error', function (execError) {
      res({
        stdErrOut: stdErrOut,
        errCode: null,
        execError: execError
      });
    });
    child.on('close', function (errCode) {
      res({
        stdErrOut: stdErrOut,
        errCode: errCode,
        execError: null
      });
    });
  });
}

function runFlowTypeDefTests(_x5, _x6, _x7) {
  return _runFlowTypeDefTests.apply(this, arguments);
}

function _runFlowTypeDefTests() {
  _runFlowTypeDefTests = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(flowVersionsToRun, groupId, testDirPath) {
    var errors, testBatch;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            errors = [];

          case 1:
            if (!(flowVersionsToRun.length > 0)) {
              _context8.next = 7;
              break;
            }

            // Run tests in batches to avoid saturation
            testBatch = flowVersionsToRun.slice(0, Math.min(flowVersionsToRun.length, 5)).map(function (group) {
              return flowVersionsToRun.shift(), group;
            });
            _context8.next = 5;
            return P.all(testBatch.map(
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee7(flowVer) {
                var testRunId, _ref6, stdErrOut, errCode, execError;

                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        testRunId = groupId + ' (flow-' + flowVer + ')';
                        console.log('Testing %s...', testRunId);
                        _context7.next = 4;
                        return testTypeDefinition(flowVer, testDirPath);

                      case 4:
                        _ref6 = _context7.sent;
                        stdErrOut = _ref6.stdErrOut;
                        errCode = _ref6.errCode;
                        execError = _ref6.execError;

                        if (execError !== null) {
                          errors.push(testRunId + ': Error executing Flow process: ' + execError.stack);
                        } else if (!stdErrOut.endsWith('Found 0 errors\n')) {
                          errors.push(testRunId + ': Unexpected Flow errors(' + String(errCode) + '):\n' + stdErrOut + '\n' + String(execError));
                        }

                      case 9:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));

              return function (_x25) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 5:
            _context8.next = 1;
            break;

          case 7:
            return _context8.abrupt("return", errors);

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _runFlowTypeDefTests.apply(this, arguments);
}

function testLowestCapableFlowVersion(_x8, _x9, _x10) {
  return _testLowestCapableFlowVersion.apply(this, arguments);
}

function _testLowestCapableFlowVersion() {
  _testLowestCapableFlowVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(lowerVersions, testDirPath, lowestFlowVersionRan) {
    var lowerFlowVersionsToRun, lowestCapableFlowVersion, lowerTestBatch;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            lowerFlowVersionsToRun = lowerVersions;
            lowestCapableFlowVersion = lowestFlowVersionRan;

          case 2:
            if (!(lowerFlowVersionsToRun.length > 0)) {
              _context10.next = 8;
              break;
            }

            lowerTestBatch = lowerFlowVersionsToRun.slice(0, Math.min(lowerFlowVersionsToRun.length, 5)).map(function (group) {
              return lowerFlowVersionsToRun.shift(), group;
            });
            _context10.next = 6;
            return P.all(lowerTestBatch.map(
            /*#__PURE__*/
            function () {
              var _ref7 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee9(flowVer) {
                var _ref8, stdErrOut, execError;

                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return testTypeDefinition(flowVer, testDirPath);

                      case 2:
                        _ref8 = _context9.sent;
                        stdErrOut = _ref8.stdErrOut;
                        execError = _ref8.execError;

                        if (execError !== null || !stdErrOut.endsWith('Found 0 errors\n')) {
                          lowerFlowVersionsToRun = [];
                        } else {
                          lowestCapableFlowVersion = semver.lt(lowestCapableFlowVersion, flowVer) ? lowestCapableFlowVersion : flowVer;
                        }

                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));

              return function (_x26) {
                return _ref7.apply(this, arguments);
              };
            }()));

          case 6:
            _context10.next = 2;
            break;

          case 8:
            return _context10.abrupt("return", lowestCapableFlowVersion);

          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));
  return _testLowestCapableFlowVersion.apply(this, arguments);
}

function findLowestCapableFlowVersion(_x11, _x12, _x13, _x14, _x15) {
  return _findLowestCapableFlowVersion.apply(this, arguments);
}
/**
 * Remove all files except flow instances
 */


function _findLowestCapableFlowVersion() {
  _findLowestCapableFlowVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(repoDirPath, orderedFlowVersions, lowestFlowVersionRan, testDirPath, libDefPath) {
    var lowerFlowVersionsToRun;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            lowerFlowVersionsToRun = orderedFlowVersions.filter(function (flowVer) {
              return semver.lt(flowVer, lowestFlowVersionRan);
            });
            lowerFlowVersionsToRun.reverse();
            _context11.next = 4;
            return writeFlowConfig(repoDirPath, testDirPath, libDefPath);

          case 4:
            _context11.next = 6;
            return testLowestCapableFlowVersion(lowerFlowVersionsToRun, testDirPath, lowestFlowVersionRan);

          case 6:
            return _context11.abrupt("return", _context11.sent);

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _findLowestCapableFlowVersion.apply(this, arguments);
}

function removeTrashFromBinDir() {
  return _removeTrashFromBinDir.apply(this, arguments);
}
/**
 * Given a TestGroup structure determine all versions of Flow that match the
 * FlowVersion specification and, for each, run `flow check` on the test
 * directory.
 */


function _removeTrashFromBinDir() {
  _removeTrashFromBinDir = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13() {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _node.fs.readdir(_node.path.join(BIN_DIR));

          case 2:
            _context13.t0 = function (name) {
              return !checkFlowFilename(name);
            };

            _context13.t1 =
            /*#__PURE__*/
            function () {
              var _ref9 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee12(el) {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return _node.fs.unlink(_node.path.resolve(BIN_DIR, el));

                      case 2:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));

              return function (_x27) {
                return _ref9.apply(this, arguments);
              };
            }();

            _context13.sent.filter(_context13.t0).forEach(_context13.t1);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));
  return _removeTrashFromBinDir.apply(this, arguments);
}

function runTestGroup(_x16, _x17, _x18) {
  return _runTestGroup.apply(this, arguments);
}

function _runTestGroup() {
  _runTestGroup = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15(repoDirPath, testGroup, orderedFlowVersions) {
    var testDirName, testDirPath, destLibDefPath, copiedFileNames, testGrpFlowSemVerRange, flowVersionsToRun, lowestFlowVersionRan, flowErrors, lowestCapableFlowVersion;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            // Some older versions of Flow choke on ">"/"<"/"="
            testDirName = testGroup.id.replace(/\//g, '--').replace(/>/g, 'gt').replace(/</g, 'lt').replace(/=/g, 'eq');
            testDirPath = _node.path.join(TEST_DIR, testDirName);
            _context15.next = 4;
            return _node.fs.exists(testDirPath);

          case 4:
            if (!_context15.sent) {
              _context15.next = 6;
              break;
            }

            throw new Error("Trying to run ".concat(testGroup.id, ", but test dir already exists! I'm") + "confused... Bailing out!");

          case 6:
            _context15.prev = 6;
            _context15.next = 9;
            return _node.fs.mkdir(testDirPath);

          case 9:
            // Copy files into the test dir
            destLibDefPath = _node.path.join(testDirPath, _node.path.basename(testGroup.libDefPath));
            copiedFileNames = new Set();
            _context15.next = 13;
            return P.all([P.all(testGroup.testFilePaths.map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee14(filePath, idx) {
                var fileName, destBasename;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        // Because there could be multiple test files with the same basename,
                        // we disambiguate each one with a locally-unique index.
                        //
                        // i.e. underscore/v1.x.x/test-underscore.js
                        //      underscore/v1.x.x/flow-v0.22.x/test-underscore.js
                        //
                        // Only mangles the name when there's a naming collision. Otherwise, uses the original.
                        fileName = _node.path.basename(filePath);
                        destBasename = copiedFileNames.has(fileName) ? "".concat(idx, "-").concat(fileName) : fileName;
                        copiedFileNames.add(destBasename);
                        _context14.next = 5;
                        return (0, _fileUtils.copyFile)(filePath, _node.path.join(testDirPath, destBasename));

                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));

              return function (_x28, _x29) {
                return _ref10.apply(this, arguments);
              };
            }())), (0, _fileUtils.copyFile)(testGroup.libDefPath, destLibDefPath)]);

          case 13:
            // For each compatible version of Flow, run `flow check` and verify there
            // are no errors.
            testGrpFlowSemVerRange = (0, _flowVersion.toSemverString)(testGroup.flowVersion);
            flowVersionsToRun = orderedFlowVersions.filter(function (flowVer) {
              return semver.satisfies(flowVer, testGrpFlowSemVerRange);
            }); // Windows hasn't flow < 30.0 but we have tests for flow < 30.0. We need skip it. Example: redux_v3

            if (flowVersionsToRun.length) {
              _context15.next = 17;
              break;
            }

            return _context15.abrupt("return", []);

          case 17:
            lowestFlowVersionRan = flowVersionsToRun[0];
            _context15.next = 20;
            return writeFlowConfig(repoDirPath, testDirPath, testGroup.libDefPath);

          case 20:
            _context15.next = 22;
            return runFlowTypeDefTests(flowVersionsToRun, testGroup.id, testDirPath);

          case 22:
            flowErrors = _context15.sent;
            _context15.next = 25;
            return findLowestCapableFlowVersion(repoDirPath, orderedFlowVersions, lowestFlowVersionRan, testDirPath, testGroup.libDefPath);

          case 25:
            lowestCapableFlowVersion = _context15.sent;

            if (lowestCapableFlowVersion !== lowestFlowVersionRan) {
              console.log("Tests for ".concat(testGroup.id, " ran successfully on flow ").concat(lowestCapableFlowVersion, ".\n        Consider setting ").concat(lowestCapableFlowVersion, " as the lower bound!"));
            }

            return _context15.abrupt("return", flowErrors);

          case 28:
            _context15.prev = 28;
            _context15.next = 31;
            return _node.fs.exists(testDirPath);

          case 31:
            if (!_context15.sent) {
              _context15.next = 34;
              break;
            }

            _context15.next = 34;
            return (0, _fileUtils.recursiveRmdir)(testDirPath);

          case 34:
            return _context15.finish(28);

          case 35:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, this, [[6,, 28, 35]]);
  }));
  return _runTestGroup.apply(this, arguments);
}

function runTests(_x19, _x20, _x21, _x22) {
  return _runTests.apply(this, arguments);
}

function _runTests() {
  _runTests = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16(repoDirPath, testPatterns, onlyChanged, numberOfFlowVersions) {
    var testPatternRes, testGroups, results, testGroup, orderedFlowVersions, testGroupErrors;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            testPatternRes = testPatterns.map(function (patt) {
              return new RegExp(patt, 'g');
            });
            _context16.next = 3;
            return getTestGroups(repoDirPath, onlyChanged);

          case 3:
            _context16.t0 = function (testGroup) {
              if (testPatternRes.length === 0) {
                return true;
              }

              for (var i = 0; i < testPatternRes.length; i++) {
                var pattern = testPatternRes[i];

                if (testGroup.id.match(pattern) != null) {
                  return true;
                }
              }

              return false;
            };

            testGroups = _context16.sent.filter(_context16.t0);
            _context16.prev = 5;
            _context16.next = 8;
            return _node.fs.exists(TEST_DIR);

          case 8:
            if (!_context16.sent) {
              _context16.next = 11;
              break;
            }

            _context16.next = 11;
            return (0, _fileUtils.recursiveRmdir)(TEST_DIR);

          case 11:
            _context16.next = 13;
            return _node.fs.mkdir(TEST_DIR);

          case 13:
            results = new Map();

          case 14:
            if (!(testGroups.length > 0)) {
              _context16.next = 36;
              break;
            }

            testGroup = testGroups.shift(); //Prepare bin folder to collect flow instances

            _context16.next = 18;
            return removeTrashFromBinDir();

          case 18:
            orderedFlowVersions = void 0;
            _context16.prev = 19;
            _context16.next = 22;
            return getOrderedFlowBinVersions(numberOfFlowVersions);

          case 22:
            orderedFlowVersions = _context16.sent;
            _context16.next = 30;
            break;

          case 25:
            _context16.prev = 25;
            _context16.t1 = _context16["catch"](19);
            _context16.next = 29;
            return getCachedFlowBinVersions(numberOfFlowVersions);

          case 29:
            orderedFlowVersions = _context16.sent;

          case 30:
            _context16.next = 32;
            return runTestGroup(repoDirPath, testGroup, orderedFlowVersions);

          case 32:
            testGroupErrors = _context16.sent;

            if (testGroupErrors.length > 0) {
              (function () {
                var errors = results.get(testGroup.id) || [];
                testGroupErrors.forEach(function (err) {
                  return errors.push(err);
                });
                results.set(testGroup.id, errors);
              })();
            }

            _context16.next = 14;
            break;

          case 36:
            return _context16.abrupt("return", results);

          case 37:
            _context16.prev = 37;
            _context16.next = 40;
            return _node.fs.exists(TEST_DIR);

          case 40:
            if (!_context16.sent) {
              _context16.next = 43;
              break;
            }

            _context16.next = 43;
            return (0, _fileUtils.recursiveRmdir)(TEST_DIR);

          case 43:
            return _context16.finish(37);

          case 44:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, this, [[5,, 37, 44], [19, 25]]);
  }));
  return _runTests.apply(this, arguments);
}

var name = 'run-tests';
exports.name = name;
var description = 'Run definition tests for library definitions in the flow-typed project';
exports.description = description;

function setup(yargs) {
  return yargs.usage("$0 ".concat(name, " - ").concat(description)).options({
    path: {
      describe: 'Override default path for libdef root (Mainly for testing purposes)',
      type: 'string',
      demand: false
    },
    onlyChanged: {
      type: 'boolean',
      description: 'Run only changed definition tests',
      demand: false
    },
    numberOfFlowVersions: {
      type: 'number',
      description: 'Only run against the latest X versions of flow',
      demand: false
    }
  });
}

function run(_x23) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee17(argv) {
    var testPatterns, onlyChanged, numberOfFlowVersions, cwd, basePath, cwdDefsNPMPath, repoDirPath, results;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return _node.fs.exists(BIN_DIR);

          case 2:
            if (_context17.sent) {
              _context17.next = 5;
              break;
            }

            _context17.next = 5;
            return _node.fs.mkdir(BIN_DIR);

          case 5:
            if ((0, _isInFlowTypedRepo.default)()) {
              _context17.next = 8;
              break;
            }

            console.log('This command only works in a clone of flowtype/flow-typed. ' + 'It is a tool used to run tests of the library definitions in the flow-typed project.');
            return _context17.abrupt("return", 1);

          case 8:
            testPatterns = argv._.slice(1);
            onlyChanged = Boolean(argv.onlyChanged);
            numberOfFlowVersions = Number(argv.numberOfFlowVersions) || 15;
            cwd = process.cwd();
            basePath = argv.path ? String(argv.path) : cwd;
            cwdDefsNPMPath = _node.path.join(basePath, 'definitions', 'npm');
            _context17.next = 16;
            return _node.fs.exists(cwdDefsNPMPath);

          case 16:
            if (!_context17.sent) {
              _context17.next = 20;
              break;
            }

            _context17.t0 = cwdDefsNPMPath;
            _context17.next = 21;
            break;

          case 20:
            _context17.t0 = _node.path.join(__dirname, '..', '..', '..', 'definitions', 'npm');

          case 21:
            repoDirPath = _context17.t0;

            if (onlyChanged) {
              console.log('Running changed definition tests against latest %s flow versions in %s...\n', numberOfFlowVersions, repoDirPath);
            } else {
              console.log('Running definition tests against latest %s flow versions in %s...\n', numberOfFlowVersions, repoDirPath);
            }

            _context17.prev = 23;
            _context17.next = 26;
            return runTests(repoDirPath, testPatterns, onlyChanged, numberOfFlowVersions);

          case 26:
            results = _context17.sent;
            _context17.next = 37;
            break;

          case 29:
            _context17.prev = 29;
            _context17.t1 = _context17["catch"](23);

            if (!(_context17.t1 instanceof _ValidationError.ValidationError)) {
              _context17.next = 36;
              break;
            }

            console.error(_context17.t1.message);
            return _context17.abrupt("return", 1);

          case 36:
            throw _context17.t1;

          case 37:
            console.log(' ');
            Array.from(results).forEach(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  testGroupName = _ref12[0],
                  errors = _ref12[1];

              console.log('ERROR: %s', testGroupName);
              errors.forEach(function (err) {
                return console.log(' * %s\n', err.split('\n').map(function (line, idx) {
                  return idx === 0 ? line : '   ' + line;
                }).join('\n'));
              });
            });

            if (!(results.size === 0)) {
              _context17.next = 42;
              break;
            }

            console.log('All tests passed!');
            return _context17.abrupt("return", 0);

          case 42:
            return _context17.abrupt("return", 1);

          case 43:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, this, [[23, 29]]);
  }));
  return _run.apply(this, arguments);
}