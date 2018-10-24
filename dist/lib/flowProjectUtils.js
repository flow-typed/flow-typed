"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findFlowRoot = findFlowRoot;

var _fileUtils = require("./fileUtils");

var _node = require("./node");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Find the project root
function findFlowRoot(_x) {
  return _findFlowRoot.apply(this, arguments);
}

function _findFlowRoot() {
  _findFlowRoot = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(start) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _fileUtils.searchUpDirPath)(start,
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(dirPath) {
                var flowConfigPath;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        flowConfigPath = _node.path.join(dirPath, '.flowconfig');
                        _context.prev = 1;
                        return _context.abrupt("return", _node.fs.statSync(flowConfigPath).isFile());

                      case 5:
                        _context.prev = 5;
                        _context.t0 = _context["catch"](1);
                        return _context.abrupt("return", false);

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[1, 5]]);
              }));

              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _findFlowRoot.apply(this, arguments);
}