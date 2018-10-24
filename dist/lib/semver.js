"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyVersion = emptyVersion;
exports.getRangeLowerBound = getRangeLowerBound;
exports.getRangeUpperBound = getRangeUpperBound;
exports.stringToVersion = stringToVersion;
exports.versionToString = versionToString;

var semver = _interopRequireWildcard(require("semver"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function emptyVersion() {
  return {
    range: '<=',
    major: 'x',
    minor: 'x',
    patch: 'x',
    prerel: null
  };
}

function getRangeLowerBound(rangeRaw) {
  var range = typeof rangeRaw === 'string' ? new semver.Range(rangeRaw) : rangeRaw;
  return range.set[0][0].semver.version;
}

function getRangeUpperBound(rangeRaw) {
  var range = typeof rangeRaw === 'string' ? new semver.Range(rangeRaw) : rangeRaw;
  return range.set[0][1].semver.version;
} // TODO: This has some egregious duplication with
//       libDef.getLocalLibDefFlowVersions(). Need to better consolidate logic


var VER = 'v([0-9]+).([0-9]+|x).([0-9]+|x)(-.*)?';
var VERSION_RE = new RegExp("^([><]=?)?".concat(VER, "(_([><]=?)").concat(VER, ")?$"));

function stringToVersion(verStr) {
  var versionParts = verStr.match(VERSION_RE);

  if (versionParts == null) {
    throw new Error("".concat(verStr, " is a malformed version string. Expected a version formatted ") + 'as `' + VERSION_RE.toString() + '`');
  }

  var _versionParts = _slicedToArray(versionParts, 12),
      _1 = _versionParts[0],
      range = _versionParts[1],
      major = _versionParts[2],
      minor = _versionParts[3],
      patch = _versionParts[4],
      prerel = _versionParts[5],
      _2 = _versionParts[6],
      upperRange = _versionParts[7],
      upperMajor = _versionParts[8],
      upperMinor = _versionParts[9],
      upperPatch = _versionParts[10],
      upperPrerel = _versionParts[11];

  if (range != null && range !== '>=' && range !== '<=') {
    throw new Error("'".concat(verStr, "': Invalid version range: ").concat(range));
  }

  if (upperRange != null && upperRange !== '>=' && upperRange !== '<=') {
    throw new Error("'".concat(verStr, "': Invalid version upper-bound range: ").concat(upperRange));
  }

  major = _validateVersionNumberPart(verStr, 'major', major);

  if (minor !== 'x') {
    minor = _validateVersionNumberPart(verStr, 'minor', minor);
  }

  if (patch !== 'x') {
    patch = _validateVersionNumberPart(verStr, 'patch', patch);
  }

  var upperBound;

  if (upperMajor) {
    upperMajor = _validateVersionNumberPart(verStr, 'upper-bound major', upperMajor);

    if (upperMinor !== 'x') {
      upperMinor = _validateVersionNumberPart(verStr, 'upper-bound minor', upperMinor);
    }

    if (upperPatch !== 'x') {
      upperPatch = _validateVersionNumberPart(verStr, 'upper-bound patch', upperPatch);
    }

    upperBound = {
      range: upperRange,
      major: upperMajor,
      minor: upperMinor,
      patch: upperPatch,
      prerel: upperPrerel.substr(1)
    };
  }

  if (range === '<=' && major === minor === patch === 0) {
    throw new Error("It doesn't make sense to have a version range of '<=v0.0.0'!");
  }

  if (prerel != null) {
    prerel = prerel.substr(1);
  }

  return {
    range: range,
    major: major,
    minor: minor,
    patch: patch,
    prerel: prerel,
    upperBound: upperBound
  };
}

function versionToString(ver) {
  var rangeStr = ver.range ? ver.range : '';
  var upperStr = ver.upperBound ? "_".concat(versionToString(ver.upperBound)) : '';
  var prerel = ver.prerel == null ? '' : "-".concat(ver.prerel);
  return "".concat(rangeStr, "v").concat(ver.major, ".").concat(ver.minor, ".").concat(ver.patch).concat(prerel).concat(upperStr);
}

function _validateVersionNumberPart(context, partName, part) {
  var num = parseInt(part, 10);

  if (String(num) !== part) {
    throw new Error("".concat(context, ": Invalid ").concat(partName, " number. Expected a number."));
  }

  return num;
}