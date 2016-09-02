// @flow

import * as semver from "semver";

type VersionRange = ">=" | "<=";
export type Version = {
  range?: VersionRange,
  major: number | "x",
  minor: number | "x",
  patch: number | "x",
  otherBound?: Version,
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
    // TODO: ensure that if ver.otherBound exists, it is "greater than" ver
    return ver.otherBound;
  };
  return ver;
}

/**
 * Given a version range, returns the min version satisfying the range.
 */
function minSat(ver: Version): ?Version {
  if (ver.range === '<=') {
    // TODO: ensure that if ver.otherBound exists, it is "lesser than" ver
    return ver.otherBound;
  };
  return ver;
}

/**
 * Given two version ranges a and b, determine whether a is strictly before b.
 */
function isWildcard(n: number | "x"): boolean {
  return (typeof n === 'string');
}
function strictSort(a: Version, b: Version): boolean {
  if (isWildcard(a.major) || isWildcard(b.major)) return false;
  if (a.major < b.major) return true;
  if (a.major === b.major) {
    if (isWildcard(a.minor) || isWildcard(b.minor)) return false;
    if (a.minor < b.minor) return true;
    if (a.minor === b.minor) {
      if (isWildcard(a.patch) || isWildcard(b.patch)) return false;
      if (a.patch < b.patch) return true;
      return false;
    };
    return false;
  };
  return false;
}

/**
 * Given two versions, returns whether they are disjoint.
 */
function _strictSort(a: ?Version, b: ?Version): boolean {
  // If a is undefined, it denotes the maximum version. If b is undefined, it
  // denotes the minimum version.
  if (a === undefined || b === undefined) return false;
  return strictSort(a, b);
}
export function disjointVersions(a: Version, b: Version): boolean {
  return _strictSort (maxSat(a), minSat(b)) || _strictSort (maxSat(b), minSat(a));
}

/**
 * Given an array of versions, returns whether they are mutually disjoint.
 */
function _disjointVersionsAll(vers, i) {
  const n = vers.length;
  if (i+1 === n) return true;
  for (var j = i+1; j < n; j++) {
    if (!disjointVersions(vers[i], vers[j])) return false;
  }
  return _disjointVersionsAll(vers, i+1);
}
export function disjointVersionsAll(vers: Array<Version>): boolean {
  return _disjointVersionsAll(vers, 0);
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
    _2, otherRange, otherMajor, otherMinor, otherPatch,
  ] = versionParts;
  if (range != null && range !== ">=" && range !== "<=") {
    throw new Error(`'${verStr}': Invalid version range: ${range}`);
  }
  if (otherRange != null && otherRange !== ">=" && otherRange !== "<=") {
    throw new Error(
      `'${verStr}': Invalid version other-bound range: ${otherRange}`
    );
  }

  major = _validateVersionNumberPart(verStr, "major", major);
  if (minor !== "x") {
    minor = _validateVersionNumberPart(verStr, "minor", minor);
  }
  if (patch !== "x") {
    patch = _validateVersionNumberPart(verStr, "patch", patch);
  }

  let otherBound;
  if (otherMajor) {
    otherMajor = _validateVersionNumberPart(verStr, "other-bound major", otherMajor);
    if (otherMinor !== "x") {
      otherMinor = _validateVersionNumberPart(verStr, "other-bound minor", otherMinor);
    }
    if (otherPatch !== "x") {
      otherPatch = _validateVersionNumberPart(verStr, "other-bound patch", otherPatch);
    }
    otherBound = {
      range: otherRange,
      major: otherMajor,
      minor: otherMinor,
      patch: otherPatch,
    };
  }

  if (range === '<=' && major === minor === patch === 0) {
    throw new Error(
      `It doesn't make sense to have a version range of '<=v0.0.0'!`
    );
  }

  return {range, major, minor, patch, otherBound};
};

export function versionToString(ver: Version): string {
  const rangeStr = ver.range ? ver.range : '';
  const otherBoundStr = ver.otherBound ? `_${versionToString(ver.otherBound)}` : '';
  return `${rangeStr}v${ver.major}.${ver.minor}.${ver.patch}${otherBoundStr}`;
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
