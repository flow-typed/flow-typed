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

export function getRangeLowerBound(rangeRaw: string | semver.Range): string {
  const range =
    typeof rangeRaw === 'string' ? new semver.Range(rangeRaw) : rangeRaw;
  // Fix for semver returning a bad comparator when the range is 'v0.x.x'
  return range.set[0][0].semver.version || '0.0.0';
}

export function getRangeUpperBound(rangeRaw: string | semver.Range): string {
  const range =
    typeof rangeRaw === 'string' ? new semver.Range(rangeRaw) : rangeRaw;
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
