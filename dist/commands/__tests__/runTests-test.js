"use strict";

var _runTests = require("../runTests");

var _node = require("../../lib/node");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('run-tests (command)', function () {
  describe('regression 1385', function () {
    var origConsoleLog = console.log;
    var status;
    beforeEach(
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var args;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log = jest.fn();
              args = {
                _: ['run-tests', 'regression-1385_v1.x.x'],
                numberOfFlowVersions: 1,
                path: _node.path.join(__dirname, '__runTests-fixtures__')
              };
              _context.next = 4;
              return (0, _runTests.run)(args);

            case 4:
              status = _context.sent;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })), 30000);
    afterEach(function () {
      console.log = origConsoleLog;
    });
    it("returns error code if $ExpectError test doesn't fail",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              expect(status).toEqual(1);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));
    it('console logs about unused suppression',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var expectedError, calls, lastErrorMsg;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              expectedError = "Unused suppression";
              calls = console.log.mock.calls;
              lastErrorMsg = calls[calls.length - 1][1];
              expect(lastErrorMsg).toContain(expectedError);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));
  });
});