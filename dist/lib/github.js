"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitHubClient = gitHubClient;

var _rest = _interopRequireDefault(require("@octokit/rest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT = new _rest.default();

if (process.env.GH_TOK) {
  CLIENT.authenticate({
    type: 'oauth',
    token: process.env.GH_TOK
  });
}

function gitHubClient() {
  return CLIENT;
}