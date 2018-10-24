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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Mocks for the node modules
var node_fs = jest.genMockFromModule('fs');
var child_process = node_child_process;
exports.child_process = child_process;
var fs = {
  // This is a custom function that our tests can use during setup to specify
  // what the files on the "mock" filesystem should look like when any of the
  // `fs` APIs are used.
  mockFiles: {},
  __setMockFiles: function __setMockFiles(newMockFiles) {
    fs.mockFiles = newMockFiles;
  },
  createReadStream: node_fs.createReadStream,
  createWriteStream: node_fs.createWriteStream,
  // $FlowFixMe
  exists: jest.fn(function (dirOrFilePath) {
    return new Promise(function (resolve) {
      process.nextTick(function () {
        return resolve(fs.mockFiles[dirOrFilePath] !== undefined);
      });
    });
  }),
  mkdir: node_fs.mkdir,
  readdir: node_fs.readdir,
  // $FlowFixMe
  readFile: jest.fn(function (filePath) {
    return new Promise(function (resolve, reject) {
      process.nextTick(function () {
        if (fs.mockFiles[filePath]) {
          resolve(fs.mockFiles[filePath]);
        } else {
          reject(new Error("ENOENT: no such file or directory, open '".concat(filePath, "'")));
        }
      });
    });
  }),
  rename: node_fs.rename,
  rmdir: node_fs.rmdir,
  stat: node_fs.stat,
  statSync: node_fs.statSync,
  Stats: node_fs.Stats,
  unlink: node_fs.unlink,
  writeFile: node_fs.writeFile
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