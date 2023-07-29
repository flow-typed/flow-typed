// @flow

import * as semver from 'semver';

export type VersionRange = '>=' | '<=';
export type Version = {|
  range?: VersionRange,
  major: number | 'x',
  minor: number | 'x',
  patch: number | 'x',
  prerel: null | string,
  upperBound?: Version, // TODO: rename to otherBound
|};

export function emptyVersion(): Version {
  return {
    range: '<=',
    major: 'x',
    minor: 'x',
    patch: 'x',
    prerel: null,
  };
}

/**
 * Find the lowest compatible explicit version based on a version range
 * of a flow-typed definition
 * ie: a type definition is 1.2.x, and the lower bound of that would be 1.2.0
 */
export function getRangeLowerBound(rangeRaw: string | semver.Range): string {
  const range =
    typeof rangeRaw === 'string' ? new semver.Range(rangeRaw) : rangeRaw;

  // When the range only has one object in the set, it implicitly means
  // there is a range of anything up to the upper bound.
  // Therefore we return `'0.0.0'`.
  if (range.set[0].length === 1) {
    return '0.0.0';
  }
  return range.set[0][0].semver.version;
}

/**
 * Find the highest compatible explicit version based on a version range
 * of a flow-typed definition
 * ie: a type definition is 1.2.x, and the upper bound of that would be 1.3.0
 */
export function getRangeUpperBound(rangeRaw: string | semver.Range): string {
  const range =
    typeof rangeRaw === 'string' ? new semver.Range(rangeRaw) : rangeRaw;

  // When the range only has one object in the set, it implicitly means
  // there is a range of anything up to the upper bound.
  // So we'll return the first object version representing the upper bound.
  if (range.set[0].length === 1) {
    return range.set[0][0].semver.version;
  }
  return range.set[0][1].semver.version;
}

// TODO: This has some egregious duplication with
//       libDef.getLocalLibDefFlowVersions(). Need to better consolidate logic
const VER = 'v([0-9]+).([0-9]+|x).([0-9]+|x)(-.*)?';
const VERSION_RE = new RegExp(`^([><]=?)?${VER}(_([><]=?)${VER})?$`);
export function stringToVersion(verStr: string): Version {
  const versionParts = verStr.match(VERSION_RE);
  if (versionParts == null) {
    throw new Error(
      `${verStr} is a malformed version string. Expected a version formatted ` +
        'as `' +
        VERSION_RE.toString() +
        '`',
    );
  }
  let [
    _1,
    range,
    major,
    minor,
    patch,
    prerel,
    _2,
    upperRange,
    upperMajor,
    upperMinor,
    upperPatch,
    upperPrerel,
  ] = versionParts;
  if (range != null && range !== '>=' && range !== '<=') {
    throw new Error(`'${verStr}': Invalid version range: ${range}`);
  }
  if (upperRange != null && upperRange !== '>=' && upperRange !== '<=') {
    throw new Error(
      `'${verStr}': Invalid version upper-bound range: ${upperRange}`,
    );
  }

  major = _validateVersionNumberPart(verStr, 'major', major);
  if (minor !== 'x') {
    minor = _validateVersionNumberPart(verStr, 'minor', minor);
  }
  if (patch !== 'x') {
    patch = _validateVersionNumberPart(verStr, 'patch', patch);
  }

  let upperBound;
  if (upperMajor) {
    upperMajor = _validateVersionNumberPart(
      verStr,
      'upper-bound major',
      upperMajor,
    );
    if (upperMinor !== 'x') {
      upperMinor = _validateVersionNumberPart(
        verStr,
        'upper-bound minor',
        upperMinor,
      );
    }
    if (upperPatch !== 'x') {
      upperPatch = _validateVersionNumberPart(
        verStr,
        'upper-bound patch',
        upperPatch,
      );
    }
    upperBound = {
      range: upperRange,
      major: upperMajor,
      minor: upperMinor,
      patch: upperPatch,
      prerel: upperPrerel.substr(1),
    };
  }

  if (range === '<=' && ((major === minor) === patch) === 0) {
    throw new Error(
      `It doesn't make sense to have a version range of '<=v0.0.0'!`,
    );
  }

  if (prerel != null) {
    prerel = prerel.substr(1);
  }

  return {range, major, minor, patch, prerel, upperBound};
}

export function versionToString(ver: Version): string {
  const rangeStr = ver.range ? ver.range : '';
  const upperStr = ver.upperBound ? `_${versionToString(ver.upperBound)}` : '';
  const prerel = ver.prerel == null ? '' : `-${ver.prerel}`;
  return `${rangeStr}v${ver.major}.${ver.minor}.${ver.patch}${prerel}${upperStr}`;
}

function _validateVersionNumberPart(context, partName, part) {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    throw new Error(
      `${context}: Invalid ${partName} number. Expected a number.`,
    );
  }
  return num;
}
