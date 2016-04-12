// @flow

import * as semver from "semver";

type VersionRange = ">=" | "<=";
export type Version = {
  range?: VersionRange,
  major: number | "x",
  minor: number | "x",
  patch: number | "x",
};

export function copyVersion(ver: Version): Version {
  return {
    range: ver.range,
    major: ver.major,
    minor: ver.minor,
    patch: ver.patch,
  };
}

const VERSION_RE = /^([><]=?)?v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)$/;
export function stringToVersion(verStr: string): Version {
  const versionParts = verStr.match(VERSION_RE);
  if (versionParts == null) {
    throw new Error(
      `${verStr} is a malformed version string. Expected a version formatted ` +
      "as `" + VERSION_RE.toString() + "`"
    );
  }
  let [_, range, major, minor, patch] = versionParts;
  if (range != null && range !== ">=" && range !== "<=") {
    throw new Error(`'${verStr}': Invalid version range: ${range}`);
  }

  major = _validateVersionNumberPart(verStr, "major", major);
  if (minor !== "x") {
    minor = _validateVersionNumberPart(verStr, "minor", minor);
  }
  if (patch !== "x") {
    patch = _validateVersionNumberPart(verStr, "patch", patch);
  }

  if (range === '<=' && major === minor === patch === 0) {
    throw new Error(
      `It doesn't make sense to have a version range of '<=v0.0.0'!`
    );
  }

  return {range, major, minor, patch};
};

export function versionToString(ver: Version): string {
  const rangeStr = ver.range ? ver.range : '';
  return `${rangeStr}v${ver.major}.${ver.minor}.${ver.patch}`;
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
