"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyDir = copyDir;
exports.copyFile = copyFile;
exports.getFilesInDir = getFilesInDir;
exports.mkdirp = mkdirp;
exports.recursiveRmdir = recursiveRmdir;
exports.searchUpDirPath = searchUpDirPath;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _node = require("./node.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var P = Promise;

function copyDir(srcPath, destPath) {
  return new Promise(function (res, rej) {
    _fsExtra.default.copy(srcPath, destPath, function (err) {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}

function copyFile(srcPath, destPath, preProcessor) {
  return new Promise(function (res, rej) {
    var reader = _node.fs.createReadStream(srcPath);

    reader.on('error', rej);

    var writer = _node.fs.createWriteStream(destPath);

    writer.on('error', rej);
    writer.on('close', res);

    if (preProcessor) {
      reader.pipe(preProcessor);
      preProcessor.pipe(writer);
    } else {
      reader.pipe(writer);
    }
  });
}

function getFilesInDir(_x) {
  return _getFilesInDir.apply(this, arguments);
}

function _getFilesInDir() {
  _getFilesInDir = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(dirPath) {
    var recursive,
        dirItems,
        dirItemStats,
        installedLibDefs,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            recursive = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
            _context2.next = 3;
            return _node.fs.readdir(dirPath);

          case 3:
            dirItems = _context2.sent;
            _context2.next = 6;
            return P.all(dirItems.map(function (item) {
              return _node.fs.stat(_node.path.join(dirPath, item));
            }));

          case 6:
            dirItemStats = _context2.sent;
            installedLibDefs = new Set();
            _context2.next = 10;
            return P.all(dirItems.map(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(itemName, idx) {
                var itemStat, itemPath, subDirFiles;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        itemStat = dirItemStats[idx];

                        if (!itemStat.isFile()) {
                          _context.next = 5;
                          break;
                        }

                        installedLibDefs.add(itemName);
                        _context.next = 11;
                        break;

                      case 5:
                        if (!(recursive && itemStat.isDirectory())) {
                          _context.next = 11;
                          break;
                        }

                        itemPath = _node.path.join(dirPath, itemName);
                        _context.next = 9;
                        return getFilesInDir(itemPath, recursive);

                      case 9:
                        subDirFiles = _context.sent;
                        subDirFiles.forEach(function (subItemName) {
                          return installedLibDefs.add(_node.path.join(itemName, subItemName));
                        });

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x5, _x6) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 10:
            return _context2.abrupt("return", installedLibDefs);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getFilesInDir.apply(this, arguments);
}

function mkdirp(path) {
  return new Promise(function (res, rej) {
    (0, _mkdirp.default)(path, function (err) {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}

function recursiveRmdir(_x2) {
  return _recursiveRmdir.apply(this, arguments);
}

function _recursiveRmdir() {
  _recursiveRmdir = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(dirPath) {
    var dirItems, dirItemStats;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _node.fs.readdir(dirPath);

          case 2:
            dirItems = _context4.sent;
            _context4.next = 5;
            return P.all(dirItems.map(function (item) {
              return _node.fs.stat(_node.path.join(dirPath, item));
            }));

          case 5:
            dirItemStats = _context4.sent;
            _context4.next = 8;
            return P.all(dirItems.map(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(itemName, idx) {
                var itemStat, itemPath;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        itemStat = dirItemStats[idx];
                        itemPath = _node.path.join(dirPath, itemName);

                        if (!itemStat.isFile()) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.next = 5;
                        return _node.fs.unlink(itemPath);

                      case 5:
                        _context3.next = 11;
                        break;

                      case 7:
                        _context3.next = 9;
                        return recursiveRmdir(itemPath);

                      case 9:
                        _context3.next = 11;
                        return _node.fs.rmdir(itemPath).catch(function (err) {
                          if (err.code === 'ENOENT') {
                            // Ignore ENOENT error
                            // it's okay if the files are already removed
                            return;
                          }

                          throw err;
                        });

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              return function (_x7, _x8) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 8:
            return _context4.abrupt("return", _node.fs.rmdir(dirPath));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _recursiveRmdir.apply(this, arguments);
}

function searchUpDirPath(_x3, _x4) {
  return _searchUpDirPath.apply(this, arguments);
}

function _searchUpDirPath() {
  _searchUpDirPath = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(startDir, testFn) {
    var currDir, lastDir;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            currDir = startDir;
            lastDir = null;

          case 2:
            if (!(currDir !== lastDir)) {
              _context5.next = 11;
              break;
            }

            _context5.next = 5;
            return testFn(currDir);

          case 5:
            if (!_context5.sent) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", currDir);

          case 7:
            lastDir = currDir;
            currDir = _node.path.resolve(currDir, '..');
            _context5.next = 2;
            break;

          case 11:
            return _context5.abrupt("return", null);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _searchUpDirPath.apply(this, arguments);
}