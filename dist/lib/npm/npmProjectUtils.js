"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackageJsonDepVersionStr = findPackageJsonDepVersionStr;
exports.findPackageJsonPath = findPackageJsonPath;
exports.getPackageJsonDependencies = getPackageJsonDependencies;
exports.getPackageJsonData = getPackageJsonData;
exports.determineFlowVersion = determineFlowVersion;
exports.findFlowSpecificVer = findFlowSpecificVer;

var _fileUtils = require("../fileUtils.js");

var _node = require("../node.js");

var _semver = require("../semver.js");

var _semver2 = _interopRequireDefault(require("semver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PKG_JSON_DEP_FIELDS = ['dependencies', 'devDependencies', 'peerDependencies', 'bundledDependencies'];

function findPackageJsonDepVersionStr(_x, _x2) {
  return _findPackageJsonDepVersionStr.apply(this, arguments);
}

function _findPackageJsonDepVersionStr() {
  _findPackageJsonDepVersionStr = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(pkgJson, depName) {
    var matchedFields, deps;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            matchedFields = [];
            deps = PKG_JSON_DEP_FIELDS.reduce(function (deps, section) {
              var contentSection = pkgJson.content[section];

              if (contentSection && contentSection[depName]) {
                matchedFields.push(section);
                deps.push(contentSection[depName]);
              }

              return deps;
            }, []);

            if (!(deps.length === 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", null);

          case 6:
            if (!(deps.length === 1)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", deps.pop());

          case 10:
            throw new Error("Found ".concat(depName, " listed in ").concat(String(deps.length), " places in ") + "".concat(pkgJson.pathStr, "!"));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _findPackageJsonDepVersionStr.apply(this, arguments);
}

function findPackageJsonPath(_x3) {
  return _findPackageJsonPath.apply(this, arguments);
} // TODO: Write tests for this


function _findPackageJsonPath() {
  _findPackageJsonPath = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(pathStr) {
    var pkgJsonPathStr;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _fileUtils.searchUpDirPath)(pathStr,
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(p) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _node.fs.exists(_node.path.join(p, 'package.json'));

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x7) {
                return _ref.apply(this, arguments);
              };
            }());

          case 2:
            pkgJsonPathStr = _context3.sent;

            if (!(pkgJsonPathStr === null)) {
              _context3.next = 5;
              break;
            }

            throw new Error("Unable to find a package.json for ".concat(pathStr, "!"));

          case 5:
            return _context3.abrupt("return", _node.path.join(pkgJsonPathStr, 'package.json'));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _findPackageJsonPath.apply(this, arguments);
}

function getPackageJsonDependencies(pkgJson, ignoreDeps) {
  var depFields = PKG_JSON_DEP_FIELDS.filter(function (field) {
    return ignoreDeps.indexOf(field.slice(0, -12)) === -1;
  });
  return depFields.reduce(function (deps, section) {
    var contentSection = pkgJson.content[section];

    if (contentSection) {
      Object.keys(contentSection).forEach(function (pkgName) {
        if (deps[pkgName]) {
          console.warn("Found ".concat(pkgName, " listed twice in package.json!"));
        }

        deps[pkgName] = contentSection[pkgName];
      });
    }

    return deps;
  }, {});
}

function getPackageJsonData(_x4) {
  return _getPackageJsonData.apply(this, arguments);
}

function _getPackageJsonData() {
  _getPackageJsonData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(pathStr) {
    var pkgJsonPath, pkgJsonContent;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return findPackageJsonPath(pathStr);

          case 2:
            pkgJsonPath = _context4.sent;
            _context4.next = 5;
            return _node.fs.readFile(pkgJsonPath);

          case 5:
            pkgJsonContent = _context4.sent;
            return _context4.abrupt("return", {
              pathStr: pkgJsonPath,
              content: JSON.parse(pkgJsonContent.toString())
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getPackageJsonData.apply(this, arguments);
}

function determineFlowVersion(_x5) {
  return _determineFlowVersion.apply(this, arguments);
}

function _determineFlowVersion() {
  _determineFlowVersion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(pathStr) {
    var pkgJsonData, flowBinVersionStr, flowVerStr, flowVerRange, cliPkgJson, cliFlowVer;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getPackageJsonData(pathStr);

          case 2:
            pkgJsonData = _context5.sent;
            _context5.next = 5;
            return findPackageJsonDepVersionStr(pkgJsonData, 'flow-bin');

          case 5:
            flowBinVersionStr = _context5.sent;

            if (!(flowBinVersionStr !== null)) {
              _context5.next = 18;
              break;
            }

            if (!_semver2.default.valid(flowBinVersionStr)) {
              _context5.next = 11;
              break;
            }

            flowVerStr = flowBinVersionStr;
            _context5.next = 17;
            break;

          case 11:
            flowVerRange = new _semver2.default.Range(flowBinVersionStr);

            if (!(flowVerRange.set[0].length !== 2)) {
              _context5.next = 16;
              break;
            }

            cliPkgJson = require('../../../package.json');
            cliFlowVer = cliPkgJson.devDependencies['flow-bin'];
            throw new Error("Unable to extract flow-bin version from package.json!\n" + "Never use a complex version range with flow-bin. Always use a " + "specific version (i.e. \"".concat(cliFlowVer, "\")."));

          case 16:
            flowVerStr = flowVerRange.set[0][0].semver.version;

          case 17:
            return _context5.abrupt("return", (0, _semver.stringToVersion)('v' + flowVerStr));

          case 18:
            return _context5.abrupt("return", null);

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _determineFlowVersion.apply(this, arguments);
}

function findFlowSpecificVer(_x6) {
  return _findFlowSpecificVer.apply(this, arguments);
}

function _findFlowSpecificVer() {
  _findFlowSpecificVer = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(startingPath) {
    var flowSemver, major;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return determineFlowVersion(startingPath);

          case 2:
            flowSemver = _context6.sent;

            if (!(flowSemver === null)) {
              _context6.next = 5;
              break;
            }

            throw new Error('Failed to find a flow-bin dependency in package.json.\n' + 'Please install flow-bin: `npm install --save-dev flow-bin`');

          case 5:
            if (!(flowSemver.range !== undefined)) {
              _context6.next = 7;
              break;
            }

            throw new Error("Unable to extract flow-bin version from package.json!\n" + "Never use a complex version range with flow-bin. Always use a " + "specific major/minor version (i.e. \"^0.39\").");

          case 7:
            major = flowSemver.major;

            if (!(major === 'x')) {
              _context6.next = 10;
              break;
            }

            throw new Error("Unable to extract flow-bin version from package.json!\n" + "Never use a wildcard major version with flow-bin!");

          case 10:
            return _context6.abrupt("return", {
              major: major,
              minor: flowSemver.minor,
              patch: flowSemver.patch,
              prerel: flowSemver.prerel == null ? null : flowSemver.prerel
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _findFlowSpecificVer.apply(this, arguments);
}