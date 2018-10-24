"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.commit = commit;
exports.setLocalConfig = setLocalConfig;
exports.getDiff = getDiff;
exports.cloneInto = cloneInto;
exports.init = init;
exports.findLatestFileCommitHash = findLatestFileCommitHash;
exports.rebaseRepoMaster = rebaseRepoMaster;

var _which = _interopRequireDefault(require("which"));

var _node = require("./node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getGitPath() {
  return _getGitPath.apply(this, arguments);
}

function _getGitPath() {
  _getGitPath = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return which('git');

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            throw new Error("Unable to find ".concat('`', "git", '`', " installed on this system: ", _context.t0.message));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));
  return _getGitPath.apply(this, arguments);
}

function which(executable) {
  return new Promise(function (res, rej) {
    (0, _which.default)(executable, function (err, resolvedPath) {
      if (err) {
        rej(err);
      } else {
        res(resolvedPath);
      }
    });
  });
}

function add(_x, _x2) {
  return _add.apply(this, arguments);
}

function _add() {
  _add = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(repoPath, pathToAdd) {
    var gitPath;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return _node.child_process.spawnP(gitPath, ['add', pathToAdd], {
              cwd: repoPath
            });

          case 6:
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](3);
            throw new Error("Error adding staged file(s) to git repo: ".concat(_context2.t0.message));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 8]]);
  }));
  return _add.apply(this, arguments);
}

function commit(_x3, _x4) {
  return _commit.apply(this, arguments);
}

function _commit() {
  _commit = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(dirPath, message) {
    var gitPath;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context3.sent;
            _context3.prev = 3;
            _context3.next = 6;
            return _node.child_process.spawnP(gitPath, ['commit', '-a', '-m', message], {
              cwd: dirPath
            });

          case 6:
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](3);
            console.error(_context3.t0); //throw new Error(`Error creating a commit in git repo: ${e.message}`);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[3, 8]]);
  }));
  return _commit.apply(this, arguments);
}

function setLocalConfig(_x5, _x6, _x7) {
  return _setLocalConfig.apply(this, arguments);
}

function _setLocalConfig() {
  _setLocalConfig = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(dirPath, name, value) {
    var gitPath;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context4.sent;
            _context4.prev = 3;
            _context4.next = 6;
            return _node.child_process.spawnP(gitPath, ['config', name, JSON.stringify(value)], {
              cwd: dirPath
            });

          case 6:
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](3);
            console.error(_context4.t0); //throw new Error(`Error creating a commit in git repo: ${e.message}`);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[3, 8]]);
  }));
  return _setLocalConfig.apply(this, arguments);
}

function getDiff() {
  return _getDiff.apply(this, arguments);
}

function _getDiff() {
  _getDiff = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var gitPath, _ref, stdout, _ref2, headDiff;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context5.sent;
            _context5.prev = 3;
            _context5.next = 6;
            return _node.child_process.spawnP(gitPath, ['diff', '--name-only']);

          case 6:
            _ref = _context5.sent;
            stdout = _ref.stdout;

            if (!(stdout === '')) {
              _context5.next = 14;
              break;
            }

            _context5.next = 11;
            return _node.child_process.spawnP(gitPath, ['diff', 'HEAD~1', '--name-only']);

          case 11:
            _ref2 = _context5.sent;
            headDiff = _ref2.stdout;
            stdout = headDiff;

          case 14:
            return _context5.abrupt("return", stdout.split('\n'));

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](3);
            return _context5.abrupt("return", []);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[3, 17]]);
  }));
  return _getDiff.apply(this, arguments);
}

function cloneInto(_x8, _x9) {
  return _cloneInto.apply(this, arguments);
}

function _cloneInto() {
  _cloneInto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(gitURL, destDirPath) {
    var gitPath;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context6.sent;
            _context6.prev = 3;
            _context6.next = 6;
            return _node.child_process.spawnP(gitPath, ['clone', gitURL, destDirPath]);

          case 6:
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](3);
            throw new Error("Error cloning repo: ".concat(_context6.t0.message));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[3, 8]]);
  }));
  return _cloneInto.apply(this, arguments);
}

function init(_x10) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(dirPath) {
    var gitPath;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context7.sent;
            _context7.prev = 3;
            _context7.next = 6;
            return _node.child_process.spawnP(gitPath, ['init'], {
              cwd: dirPath
            });

          case 6:
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](3);
            throw new Error("Error init-ing git repo: ".concat(_context7.t0.message));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[3, 8]]);
  }));
  return _init.apply(this, arguments);
}

function findLatestFileCommitHash(_x11, _x12) {
  return _findLatestFileCommitHash.apply(this, arguments);
}

function _findLatestFileCommitHash() {
  _findLatestFileCommitHash = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(repoPath, filePath) {
    var gitPath, _ref3, stdout;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context8.sent;
            _context8.prev = 3;
            _context8.next = 6;
            return _node.child_process.spawnP(gitPath, ['log', '--pretty=%H', filePath], {
              cwd: repoPath
            });

          case 6:
            _ref3 = _context8.sent;
            stdout = _ref3.stdout;
            return _context8.abrupt("return", stdout.trim());

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](3);
            throw new Error("Error finding latest commit hash for ".concat(filePath, ": ").concat(_context8.t0.message));

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[3, 11]]);
  }));
  return _findLatestFileCommitHash.apply(this, arguments);
}

function rebaseRepoMaster(_x13) {
  return _rebaseRepoMaster.apply(this, arguments);
}

function _rebaseRepoMaster() {
  _rebaseRepoMaster = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(repoDirPath) {
    var gitPath, stderr;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return getGitPath();

          case 2:
            gitPath = _context9.sent;
            _context9.next = 5;
            return _node.child_process.spawnP(gitPath, ['checkout', 'master'], {
              cwd: repoDirPath
            }).catch(function (_ref4) {
              var stderr = _ref4.stderr;
              throw new Error('Error checking out the `master` branch of the following repo:\n' + "".concat(repoDirPath, "\n\n").concat(stderr));
            });

          case 5:
            _context9.prev = 5;
            _context9.next = 8;
            return _node.child_process.execFileP(gitPath, ['pull', '--rebase'], {
              cwd: repoDirPath
            });

          case 8:
            _context9.next = 14;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](5);
            stderr = _context9.t0.stderr;
            throw new Error('Error rebasing the `master` branch of the following repo:\n' + "".concat(repoDirPath, "\n\n").concat(stderr));

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[5, 10]]);
  }));
  return _rebaseRepoMaster.apply(this, arguments);
}