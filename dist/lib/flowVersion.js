"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDirString = parseDirString;
exports.parseFlowSpecificVer = parseFlowSpecificVer;
exports.disjointVersionsAll = disjointVersionsAll;
exports.toDirString = toDirString;
exports.toSemverString = toSemverString;
exports.__parseVersion = _parseVersion;

var _ValidationError = require("./ValidationError");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _parseVerNum(numStr, verName, context) {
  var num = parseInt(numStr, 10);

  if (String(num) !== numStr) {
    throw new _ValidationError.ValidationError("'".concat(context, "': Invalid ").concat(verName, " number: '").concat(numStr, "'. Expected a number."));
  }

  return num;
}

function _parseVerNumOrX(numStr, verName, context) {
  if (numStr == null) {
    return 'x';
  }

  if (numStr === 'x') {
    return numStr;
  }

  return _parseVerNum(numStr, verName, context);
}

function _parseVersion(verStr, expectPossibleRangeUpper) {
  if (verStr[0] !== 'v') {
    throw new _ValidationError.ValidationError('Flow version ranges must start with a `v`!');
  }

  var verParts = verStr.slice(1).match(/^([0-9]+)\.([0-9]+|x)(\.([0-9]+|x))?/);
  var majorStr, minorStr, patchStr;

  if (verParts == null) {
    if (verStr[1] === 'x') {
      throw new _ValidationError.ValidationError('The major version of a Flow version string cannot be `x`, it must ' + 'be a number!');
    } else {
      throw new _ValidationError.ValidationError('Flow versions must be a non-range semver with an exact major version ' + 'and either an exact minor version or an `x` minor ver. Instead got: ' + verStr);
    }
  } else {
    majorStr = verParts[1];
    minorStr = verParts[2];
    patchStr = verParts[4];
  }

  var _ref = [_parseVerNum(majorStr, 'major', verStr), _parseVerNumOrX(minorStr, 'minor', verStr), _parseVerNumOrX(patchStr, 'patch', verStr)],
      major = _ref[0],
      minor = _ref[1],
      patch = _ref[2];
  var verAfterParts = verStr.substr(verParts[0].length + 1);

  if (patchStr != null && verAfterParts[0] === '-' && verAfterParts[1] != null) {
    if (expectPossibleRangeUpper) {
      // A `-` could indicate either a range or a prerel. This is technically
      // a real ambiguity in our versioning syntax -- but luckily it's rarely
      // encountered.
      //
      // To deal with this, we try parsing as a version. If it parses we assume
      // a range. If it doesn't parse as a version, we assume a pre-rel
      // identifier.
      //
      // This is excitingly inefficient but because it operates on tiny inputs
      // (and only sometimes) it shouldn't be an issue in practice.
      try {
        _parseVersion(verAfterParts.substr(1), false);

        return [verParts[0].length + 1, {
          major: major,
          minor: minor,
          patch: patch,
          prerel: null
        }];
      } catch (e) {
        // It's possible that a prerel *and* a range co-exist!
        // v0.1.x-prerel-v0.2.x
        var prerelParts = verAfterParts.substr(1).split('-'); // ['prerel', 'v0.2.x']

        var prerel = prerelParts.shift(); // 'prerel'

        while (prerelParts.length > 0) {
          try {
            _parseVersion(prerelParts.join('-'), false);

            break;
          } catch (e) {
            prerel += '-' + prerelParts.shift();
          }
        }

        return [verParts[0].length + '-'.length + prerel.length + 1, {
          major: major,
          minor: minor,
          patch: patch,
          prerel: prerel
        }];
      }
    } else {
      // After the `-` must be a prerel
      return [verStr.length + 1, {
        major: major,
        minor: minor,
        patch: patch,
        prerel: verAfterParts.substr(1)
      }];
    }
  } else {
    return [verParts[0].length + 1, {
      major: major,
      minor: minor,
      patch: patch,
      prerel: null
    }];
  }
}

function parseDirString(verStr) {
  if (verStr.substr(0, 'flow_'.length) !== 'flow_') {
    throw new _ValidationError.ValidationError('Flow versions must start with `flow_` but instead got ' + verStr);
  }

  var afterPrefix = verStr.substr('flow_'.length);

  if (afterPrefix === 'all' || afterPrefix === 'vx.x.x') {
    return {
      kind: 'all'
    };
  } else if (afterPrefix[0] === '-') {
    return {
      kind: 'ranged',
      lower: null,
      upper: _parseVersion(verStr.substr('flow_-'.length), false)[1]
    };
  } else {
    var _parseVersion2 = _parseVersion(afterPrefix, true),
        _parseVersion3 = _slicedToArray(_parseVersion2, 2),
        offset = _parseVersion3[0],
        lowerVer = _parseVersion3[1];

    if (offset === afterPrefix.length) {
      return {
        kind: 'specific',
        ver: lowerVer
      };
    } else if (afterPrefix[offset] === '-') {
      var upperVer = offset + 1 === afterPrefix.length ? null : _parseVersion(afterPrefix.substr(offset + 1), false)[1];
      return {
        kind: 'ranged',
        lower: lowerVer,
        upper: upperVer
      };
    } else {
      throw new _ValidationError.ValidationError("Unexpected trailing characters: ".concat(afterPrefix.substr(offset)));
    }
  }
}

function parseFlowSpecificVer(verStr) {
  var flowVer = parseDirString("flow_".concat(verStr));

  switch (flowVer.kind) {
    case 'specific':
      return flowVer.ver;

    case 'all':
    case 'ranged':
      throw new _ValidationError.ValidationError("This is not a specific Flow version.");

    default:
      flowVer;
  }

  return {
    major: -1,
    minor: 'x',
    patch: 'x',
    prerel: null
  };
}
/**
 * Given two version ranges a and b, determine whether a is before b.
 */


function lt(n1, n2) {
  if (n1 === 'x' || n2 === 'x') return false;
  if (n1 < n2) return true;
  if (n1 > n2) return false;
  return 'maybe';
}

function before(a, b) {
  var test = lt(a.major, b.major);
  if (test !== 'maybe') return test;
  test = lt(a.minor, b.minor);
  if (test !== 'maybe') return test;
  test = lt(a.patch, b.patch);
  if (test !== 'maybe') return test;
  return false;
}
/**
 * Given a version range, returns the max version satisfying the range.
 */


function maxSat(ver) {
  switch (ver.kind) {
    case 'all':
      return null;

    case 'ranged':
      return ver.upper;

    case 'specific':
      return ver.ver;

    default:
      ver;
      throw new Error('Unexpected FlowVersion kind!');
  }
}
/**
 * Given a version range, returns the min version satisfying the range.
 */


function minSat(ver) {
  switch (ver.kind) {
    case 'all':
      return null;

    case 'ranged':
      return ver.lower;

    case 'specific':
      return ver.ver;

    default:
      ver;
      throw new Error('Unexpected FlowVersion kind!');
  }
}
/**
 * Given two versions, returns whether they are disjoint.
 */


function _before(a, b) {
  // If a is undefined, it denotes the maximum version. If b is undefined, it
  // denotes the minimum version.
  if (a && b) return before(a, b);
  return false;
}

function disjointVersions(a, b) {
  return _before(maxSat(a), minSat(b)) || _before(maxSat(b), minSat(a));
}
/**
 * Given an array of versions, returns whether they are mutually disjoint.
 */


function _disjointVersionsAll(vers, len, i) {
  if (i + 1 >= len) return true;

  for (var j = i + 1; j < len; j++) {
    if (!disjointVersions(vers[i], vers[j])) {
      return false;
    }
  }

  return _disjointVersionsAll(vers, len, i + 1);
}

function disjointVersionsAll(vers) {
  return _disjointVersionsAll(vers, vers.length, 0);
}

function toDirString(ver) {
  switch (ver.kind) {
    case 'all':
      return 'flow_all';

    case 'specific':
      {
        var str = "flow_v".concat(ver.ver.major, ".").concat(ver.ver.minor);

        if (ver.ver.patch !== null) {
          str += ".".concat(ver.ver.patch);

          if (ver.ver.prerel) {
            str += "-".concat(ver.ver.prerel);
          }
        }

        return str;
      }

    case 'ranged':
      {
        var lower = ver.lower,
            upper = ver.upper;
        var _str = 'flow_';

        if (lower !== null) {
          _str += "v".concat(lower.major, ".").concat(lower.minor);

          if (lower.patch !== null) {
            _str += ".".concat(lower.patch);

            if (lower.prerel !== null) {
              _str += "-".concat(lower.prerel);
            }
          }
        }

        _str += '-';

        if (upper !== null) {
          _str += "v".concat(upper.major, ".").concat(upper.minor);

          if (upper.patch !== null) {
            _str += ".".concat(upper.patch);

            if (upper.prerel !== null) {
              _str += "-".concat(upper.prerel);
            }
          }
        }

        return _str;
      }

    default:
      ver;
      throw new Error('Unexpected FlowVersion kind!');
  }
}

function toSemverString(ver) {
  switch (ver.kind) {
    case 'all':
      return 'vx.x.x';

    case 'specific':
      return toDirString(ver).substr('flow_'.length);

    case 'ranged':
      {
        var upper = ver.upper,
            lower = ver.lower;
        var str = '';

        if (lower !== null) {
          str += ">=v".concat(lower.major, ".").concat(lower.minor);

          if (lower.patch !== null) {
            str += ".".concat(lower.patch);

            if (lower.prerel !== null) {
              str += "-".concat(lower.prerel);
            }
          }

          if (upper !== null) {
            str += ' ';
          }
        }

        if (upper !== null) {
          str += "<=v".concat(upper.major, ".").concat(upper.minor);

          if (upper.patch !== null) {
            str += ".".concat(upper.patch);

            if (upper.prerel !== null) {
              str += "-".concat(upper.prerel);
            }
          }
        }

        return str;
      }

    default:
      ver;
      throw new Error('Unexpected FlowVersion kind!');
  }
} // Exported for tests