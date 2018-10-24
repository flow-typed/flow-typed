"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSignedCodeVersion = getSignedCodeVersion;
exports.signCode = signCode;
exports.signCodeStream = signCodeStream;
exports.verifySignedCode = verifySignedCode;

var _md = _interopRequireDefault(require("md5"));

var _through = _interopRequireDefault(require("through"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VERSION_COMMENT_RE = /\/\/ flow-typed version: (.*)$/;

function getSignedCodeVersion(signedCode) {
  var _signedCode$split = signedCode.split('\n'),
      _signedCode$split2 = _slicedToArray(_signedCode$split, 2),
      _ = _signedCode$split2[0],
      versionComment = _signedCode$split2[1];

  var versionMatches = versionComment.trim().match(VERSION_COMMENT_RE);

  if (versionMatches == null) {
    return null;
  }

  return versionMatches[1];
}

function signCode(code, version) {
  var versionedCode = "// flow-typed version: ".concat(version, "\n\n").concat(code);
  var hash = (0, _md.default)(versionedCode);
  return "// flow-typed signature: ".concat(hash, "\n").concat(versionedCode);
}

function signCodeStream(version) {
  var code = '';
  return (0, _through.default)(function write(data) {
    code += data;
  }, function end() {
    this.emit('data', signCode(code, version));
    this.emit('close');
  });
}

var HASH_COMMENT_RE = /\/\/ flow-typed signature: (.*)$/;

function verifySignedCode(signedCode) {
  var signedCodeLines = signedCode.split('\n');

  var _signedCodeLines = _slicedToArray(signedCodeLines, 1),
      hashComment = _signedCodeLines[0];

  var hashMatches = hashComment.trim().match(HASH_COMMENT_RE);

  if (hashMatches == null) {
    return false;
  }

  var _hashMatches = _slicedToArray(hashMatches, 2),
      _ = _hashMatches[0],
      hash = _hashMatches[1];

  var versionedCode = signedCodeLines.slice(1).join('\n');
  return (0, _md.default)(versionedCode) === hash;
}