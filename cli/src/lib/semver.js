// @flow

import * as semver from "semver";

type VersionRange = ">=" | "<=";
export type Version = {
  range?: VersionRange,
  major: number | "x",
  minor: number | "x",
  patch: number | "x",
  upperBound?: Version, // TODO: rename to otherBound
};

export function emptyVersion(): Version {
  return {
    range: '<=',
    major: 'x',
    minor: 'x',
    patch: 'x'
  };
}

export function copyVersion(ver: Version): Version {
  return {
    range: ver.range,
    major: ver.major,
    minor: ver.minor,
    patch: ver.patch,
  };
}

/**
 * Given two versions (can be ranges), returns < 0 if a's lower
 * bound is less than b's lower bound. When used as a comparator,
 * his should sort a list of ranges in ascending order by lower bound.
 */
function _replaceVersionPart(part) {
  return typeof part === 'string' ? 0 : part;
}
export function sortVersions(a: Version, b: Version): number {
  if (a.major !== b.major) {
    return _replaceVersionPart(a.major) - _replaceVersionPart(b.major);
  } else if (a.minor !== b.minor) {
    return _replaceVersionPart(a.minor) - _replaceVersionPart(b.minor);
  } else if (a.patch !== b.patch) {
    return _replaceVersionPart(a.patch) - _replaceVersionPart(b.patch);
  }
  return 0;
};

/**
 * Given a version range, returns the max version satisfying the range.
 */
function maxSat(ver: Version): ?Version {
  if (ver.range === '>=') {
    // TODO: ensure that if ver.upperBound exists, it is "greater than" ver
    return ver.upperBound;
  };
  return ver;
}

/**
 * Given a version range, returns the min version satisfying the range.
 */
function minSat(ver: Version): ?Version {
  if (ver.range === '<=') {
    // TODO: ensure that if ver.upperBound exists, it is "lesser than" ver
    return ver.upperBound;
  };
  return ver;
}

/**
 * Given two version ranges a and b, determine whether a is before b.
 */
function lt(n1: number | "x", n2: number | "x"): boolean | "maybe" {
  if (typeof n1 === 'string' || typeof n2 === 'string') return false;
  if (n1 < n2) return true;
  if (n1 > n2) return false;
  return "maybe";
}
function before(a: Version, b: Version): boolean {
  let test = lt(a.major, b.major);
  if (test !== "maybe") return test;
  test = lt(a.minor, b.minor);
  if (test !== "maybe") return test;
  test = lt(a.patch, b.patch);
  if (test !== "maybe") return test;
  return false;
}

/**
 * Given two versions, returns whether they are disjoint.
 */
function _before(a: ?Version, b: ?Version): boolean {
  // If a is undefined, it denotes the maximum version. If b is undefined, it
  // denotes the minimum version.
  if (a && b) return before(a, b);
  return false;
}
export function disjointVersions(a: Version, b: Version): boolean {
  return _before (maxSat(a), minSat(b)) || _before (maxSat(b), minSat(a));
}

/**
 * Given a version range, returns if the range is satisfiable.
 */
export function isSatVersion(ver: Version): boolean {
  const upperBound = ver.upperBound;
  if (upperBound) {
    if (upperBound.range === '>=' && ver.range !== '>=') {
      return !(before (ver, upperBound));
    }
    if (upperBound.range === '<=' && ver.range !== '<=') {
      return !(before (upperBound, ver));
    }
    return true;
  }
  return true;
}

/**
 * Given an array of versions, returns whether they are mutually disjoint.
 */
function _disjointVersionsAll(vers, len, i) {
  if (i+1 >= len) return true;
  for (let j = i+1; j < len; j++) {
    if (!disjointVersions(vers[i], vers[j])) return false;
  }
  return _disjointVersionsAll(vers, len, i+1);
}
export function disjointVersionsAll(vers: Array<Version>): boolean {
  return _disjointVersionsAll(vers, vers.length, 0);
}

// TODO: This has some egregious duplication with
//       libDef.getLocalLibDefFlowVersions(). Need to better consolidate logic
const VER = 'v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)';
const VERSION_RE = new RegExp(
  `^([><]=?)?${VER}(_([><]=?)${VER})?$`
);
export function stringToVersion(verStr: string): Version {
  const versionParts = verStr.match(VERSION_RE);
  if (versionParts == null) {
    throw new Error(
      `${verStr} is a malformed version string. Expected a version formatted ` +
      "as `" + VERSION_RE.toString() + "`"
    );
  }
  let [
    _1, range, major, minor, patch,
    _2, upperRange, upperMajor, upperMinor, upperPatch,
  ] = versionParts;
  if (range != null && range !== ">=" && range !== "<=") {
    throw new Error(`'${verStr}': Invalid version range: ${range}`);
  }
  if (upperRange != null && upperRange !== ">=" && upperRange !== "<=") {
    throw new Error(
      `'${verStr}': Invalid version upper-bound range: ${upperRange}`
    );
  }

  major = _validateVersionNumberPart(verStr, "major", major);
  if (minor !== "x") {
    minor = _validateVersionNumberPart(verStr, "minor", minor);
  }
  if (patch !== "x") {
    patch = _validateVersionNumberPart(verStr, "patch", patch);
  }

  let upperBound;
  if (upperMajor) {
    upperMajor = _validateVersionNumberPart(verStr, "upper-bound major", upperMajor);
    if (upperMinor !== "x") {
      upperMinor = _validateVersionNumberPart(verStr, "upper-bound minor", upperMinor);
    }
    if (upperPatch !== "x") {
      upperPatch = _validateVersionNumberPart(verStr, "upper-bound patch", upperPatch);
    }
    upperBound = {
      range: upperRange,
      major: upperMajor,
      minor: upperMinor,
      patch: upperPatch,
    };
  }

  if (range === '<=' && major === minor === patch === 0) {
    throw new Error(
      `It doesn't make sense to have a version range of '<=v0.0.0'!`
    );
  }

  return {range, major, minor, patch, upperBound};
};

export function versionToString(ver: Version): string {
  const rangeStr = ver.range ? ver.range : '';
  const upperBoundStr = ver.upperBound ? `_${versionToString(ver.upperBound)}` : '';
  return `${rangeStr}v${ver.major}.${ver.minor}.${ver.patch}${upperBoundStr}`;
};

function _validateVersionNumberPart(context, partName, part) {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    throw new Error(
      `${context}: Invalid ${partName} number. Expected a number.`
    );
  }
  return num;
}

/**
 * Just like semver.satisfies(), except it handles simple wildcard + range
 * operators in the "version" operand.
 *
 * Note that this is a quick and basic version that could probably be optimized
 * for common cases -- but will worry about that later.
 */
export function wildcardSatisfies(ver: Version, range: string): boolean {
  if (ver.major === 'x' && ver.minor === 'x' && ver.patch === 'x') {
    return true;
  } else if (ver.major === 'x') {
    const verCopy = copyVersion(ver);
    for (let i = 0; i <= 9; i++) {
      verCopy.major = i;
      if (wildcardSatisfies(verCopy, range)) {
        return true;
      }
    }
    return false;
  } else if (ver.minor === 'x') {
    const verCopy = copyVersion(ver);
    for (let i = 0; i <= 9; i++) {
      verCopy.minor = i;
      if (wildcardSatisfies(verCopy, range)) {
        return true;
      }
    }
    return false;
  } else if (ver.patch === 'x') {
    const verCopy = copyVersion(ver);
    for (let i = 0; i <= 9; i++) {
      verCopy.patch = i;
      if (wildcardSatisfies(verCopy, range)) {
        return true;
      }
    }
    return false;
  } else {
    return semver.satisfies(versionToString(ver), range);
  }
};
