"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = exports.path = exports.os = exports.https = exports.fs = exports.child_process = void 0;

var node_child_process = _interopRequireWildcard(require("child_process"));

var node_https = _interopRequireWildcard(require("https"));

var node_os = _interopRequireWildcard(require("os"));

var node_path = _interopRequireWildcard(require("path"));

var node_url = _interopRequireWildcard(require("url"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var child_process = {
  exec: node_child_process.exec,
  execP: function execP(command, options) {
    return new Promise(function (res, rej) {
      node_child_process.exec(command, options, function (err, stdout, stderr) {
        if (err) {
          rej(err);
        } else {
          res({
            stdout: new Buffer(stdout),
            stderr: new Buffer(stderr)
          });
        }
      });
    });
  },
  execFileP: function execFileP(command, argsOrOptions, options) {
    var _args;

    var _opts;

    if (Array.isArray(argsOrOptions)) {
      _args = argsOrOptions;
      _opts = options ? options : {};
    } else {
      _args = [];
      _opts = argsOrOptions ? argsOrOptions : {};
    }

    return new Promise(function (res, rej) {
      node_child_process.execFile(command, _args, _opts, function (err, stdout, stderr) {
        if (err) {
          rej(err);
        } else {
          res({
            stdout: stdout,
            stderr: stderr
          });
        }
      });
    });
  },
  spawnP: function spawnP(command, args, options) {
    return new Promise(function (res, rej) {
      var process = node_child_process.spawn(command, args, options);
      var stderr = '';
      var stdout = '';
      process.stdout.on('data', function (chunk) {
        return stdout += chunk;
      });
      process.stderr.on('data', function (chunk) {
        return stderr += chunk;
      });
      process.on('close', function (exitCode) {
        if (exitCode === 0) {
          res({
            stderr: stderr,
            stdout: stdout,
            exitCode: exitCode
          });
        } else {
          rej({
            stderr: stderr,
            stdout: stdout,
            exitCode: exitCode
          });
        }
      });
    });
  }
};
exports.child_process = child_process;
var fs = {
  appendFile: _fsExtra.default.appendFile,
  close: _fsExtra.default.close,
  createReadStream: _fsExtra.default.createReadStream,
  createWriteStream: _fsExtra.default.createWriteStream,
  exists: _fsExtra.default.exists,
  mkdir: _fsExtra.default.mkdir,
  open: _fsExtra.default.open,
  readdir: _fsExtra.default.readdir,
  readFile: _fsExtra.default.readFile,
  rename: _fsExtra.default.rename,
  rmdir: _fsExtra.default.rmdir,
  stat: _fsExtra.default.stat,
  statSync: _fsExtra.default.statSync,
  Stats: _fsExtra.default.Stats,
  unlink: _fsExtra.default.unlink,
  writeFile: _fsExtra.default.writeFile
};
exports.fs = fs;
var https = node_https;
exports.https = https;
var os = node_os;
exports.os = os;
var path = node_path;
exports.path = path;
var url = node_url;
exports.url = url;