// @flow

import * as semver from "semver";

type VersionRange = ">=" | "<=";
export type Version = {
  range?: VersionRange,
  major: number | "x",
  minor: number | "x",
  patch: number | "x",
  upperBound?: Version,
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
    _2, upRange, upMajor, upMinor, upPatch,
  ] = versionParts;
  if (range != null && range !== ">=" && range !== "<=") {
    throw new Error(`'${verStr}': Invalid version range: ${range}`);
  }
  if (upRange != null && upRange !== ">=" && upRange !== "<=") {
    throw new Error(
      `'${verStr}': Invalid version upper-bound range: ${upRange}`
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
  if (upMajor) {
    upMajor = _validateVersionNumberPart(verStr, "upper-bound major", upMajor);
    if (upMinor !== "x") {
      upMinor = _validateVersionNumberPart(verStr, "upper-bound minor", upMinor);
    }
    if (upPatch !== "x") {
      upPatch = _validateVersionNumberPart(verStr, "upper-bound patch", upPatch);
    }
    upperBound = {
      range: upRange,
      major: upMajor,
      minor: upMinor,
      patch: upPatch,
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
