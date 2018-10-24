"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testProject = testProject;

var _fileUtils = require("./fileUtils");

var _node = require("./node");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TMP_DIR = _node.os.tmpdir();

var pendingTestProjects = new Map();

function testProject(_x) {
  return _testProject.apply(this, arguments);
}

function _testProject() {
  _testProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(cb) {
    var _ROOT_DIR, i, ROOT_DIR;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ROOT_DIR = null;
            i = 0;

          case 2:
            if (!(i < 10)) {
              _context.next = 17;
              break;
            }

            _ROOT_DIR = _node.path.join(TMP_DIR, 'install-cmd-test-dir-' + Math.floor(Math.random() * 10000 + 837208));

            if (pendingTestProjects.has(_ROOT_DIR)) {
              _context.next = 14;
              break;
            }

            pendingTestProjects.set(_ROOT_DIR, true);
            _context.next = 8;
            return _node.fs.exists(_ROOT_DIR);

          case 8:
            if (!_context.sent) {
              _context.next = 11;
              break;
            }

            pendingTestProjects.delete(_ROOT_DIR);
            return _context.abrupt("continue", 14);

          case 11:
            _context.next = 13;
            return (0, _fileUtils.mkdirp)(_ROOT_DIR);

          case 13:
            return _context.abrupt("break", 17);

          case 14:
            i++;
            _context.next = 2;
            break;

          case 17:
            ROOT_DIR = _ROOT_DIR;

            if (!(ROOT_DIR === null)) {
              _context.next = 20;
              break;
            }

            throw new Error('Unable to create a test flow project directory!');

          case 20:
            _context.next = 22;
            return cb(ROOT_DIR);

          case 22:
            _context.next = 24;
            return (0, _fileUtils.recursiveRmdir)(ROOT_DIR);

          case 24:
            pendingTestProjects.delete(ROOT_DIR);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _testProject.apply(this, arguments);
}