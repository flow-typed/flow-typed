// @flow

import type {ValidationErrors as VErrors} from "./validationErrors";
import {validationError} from "./validationErrors";

export type FlowSpecificVer = {|
  major: number,
  minor: number | 'x',
  patch: number | 'x',
  prerel: string | 'x' | null,
|};

export type FlowVersion =
  | {| kind: 'all' |}
  | {| kind: 'specific', ver: FlowSpecificVer |}
  | {|
      kind: 'ranged',
      upper: FlowSpecificVer | null,
      lower: FlowSpecificVer | null
    |}
;

function _parseVerNum(
  numStr: string,
  verName: string,
  context: string,
  validationErrs?: VErrors
): number {
  const num = parseInt(numStr, 10);
  if (String(num) !== numStr) {
    const error =
      `'${context}': Invalid ${verName} number: '${numStr}'. Expected a number.`;
    validationError(context, error, validationErrs);
  }
  return num;
}

function _parseVerNumOrX(
  numStr: string | null | void,
  verName: string,
  context: string,
  validationErrs?: VErrors
): number | 'x' {
  if (numStr == null) {
    return 'x';
  }

  if (numStr === 'x') {
    return numStr;
  }

  return _parseVerNum(numStr, verName, context, validationErrs);
}

function _parseVersion(
  verStr: string,
  context: string,
  expectPossibleRangeUpper: boolean,
  validationErrs?: VErrors
): [number, FlowSpecificVer] {
  if (verStr[0] !== 'v') {
    validationError(
      verStr,
      'Flow version ranges must start with a `v`!',
      validationErrs,
    );
    return _parseVersion('v' + verStr, context, expectPossibleRangeUpper, validationErrs);
  }

  const verParts = verStr.slice(1).match(/^([0-9]+)\.([0-9]+|x)(\.([0-9]+|x))?/);
  let majorStr, minorStr, patchStr;
  if (verParts == null) {
    if (verStr[1] === 'x') {
      validationError(
        context,
        'The major version of a Flow version string cannot be `x`, it must ' +
        'be a number!',
        validationErrs,
      );
      return _parseVersion(
        'v0' + verStr.substr(2),
        context,
        expectPossibleRangeUpper,
        validationErrs,
      );
    } else {
      validationError(
        context,
        'Flow versions must be a non-range semver with an exact major ' +
        'version and either an exact minor version or an `x` minor ver.',
        validationErrs,
      );
    }
    return [0, {major: 0, minor: 'x', patch: 'x', prerel: null}];
  } else {
    majorStr = verParts[1];
    minorStr = verParts[2];
    patchStr = verParts[4];
  }

  const [major, minor, patch] = [
    _parseVerNum(majorStr, 'major', verStr, validationErrs),
    _parseVerNumOrX(minorStr, 'minor', verStr, validationErrs),
    _parseVerNumOrX(patchStr, 'patch', verStr, validationErrs),
  ];

  const verAfterParts = verStr.substr(verParts[0].length + 1);
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
        _parseVersion(verAfterParts.substr(1), context, false);
        return [verParts[0].length + 1, {major, minor, patch, prerel: null}];
      } catch (e) {
        // It's possible that a prerel *and* a range co-exist!
        // v0.1.x-prerel-v0.2.x
        let prerelParts = verAfterParts.substr(1).split('-'); // ['prerel', 'v0.2.x']
        let prerel = prerelParts.shift(); // 'prerel'
        while (prerelParts.length > 0) {
          try {
            _parseVersion(prerelParts.join('-'), context, false);
            break;
          } catch (e) {
            prerel += '-' + prerelParts.shift();
          }
        }

        return [verParts[0].length + '-'.length + prerel.length + 1, {
          major,
          minor,
          patch,
          prerel,
        }];
      }
    } else {
      // After the `-` must be a prerel
      return [verStr.length + 1, {
        major,
        minor,
        patch,
        prerel: verAfterParts.substr(1)
      }];
    }
  } else {
    return [verParts[0].length + 1, {major, minor, patch, prerel: null}];
  }
}

export function parseDirString(
  verStr: string,
  context: string,
  validationErrs?: VErrors,
): FlowVersion {
  if (verStr.substr(0, 'flow_'.length) !== 'flow_') {
    validationError(
      context,
      'Flow versions must start with `flow-`',
      validationErrs,
    );
    return {kind: 'all'};
  }

  const afterPrefix = verStr.substr('flow_'.length);

  if (afterPrefix === 'all') {
    return {kind: 'all'};
  } else if (afterPrefix[0] === '-') {
    return {
      kind: 'ranged',
      lower: null,
      upper: _parseVersion(
        verStr.substr('flow_-'.length),
        context,
        false,
        validationErrs,
      )[1],
    };
  } else {
    const [offset, lowerVer] = _parseVersion(
      afterPrefix,
      context,
      true,
      validationErrs
    );
    if (offset === afterPrefix.length) {
      return {
        kind: 'specific',
        ver: lowerVer
      };
    } else if (afterPrefix[offset] === '-') {
      const upperVer =
        offset + 1 === afterPrefix.length
        ? null
        : _parseVersion(
            afterPrefix.substr(offset + 1),
            context,
            false,
            validationErrs
          )[1];
      return {
        kind: 'ranged',
        lower: lowerVer,
        upper: upperVer,
      };
    } else {
      validationError(
        verStr,
        `Unexpected trailing characters: ${afterPrefix.substr(offset)}`,
        validationErrs,
      );
      return {
        kind: 'specific',
        ver: lowerVer
      };
    }
  }
}

export function parseFlowSpecificVer(
  verStr: string,
  context: string,
  validationErrs?: VErrors,
): FlowSpecificVer {
  const flowVer = parseDirString(`flow_${verStr}`, context, validationErrs);
  switch (flowVer.kind) {
    case 'specific': return flowVer.ver;
    case 'all':
    case 'ranged':
      validationError(
        verStr,
        `This is not a specific Flow version.`,
        validationErrs,
      );
      break;
    default:
      (flowVer: empty);
  }
  return {
    major: -1,
    minor: 'x',
    patch: 'x',
    prerel: null,
  };
}

/**
 * Given two version ranges a and b, determine whether a is before b.
 */
function lt(n1: number | "x", n2: number | "x"): boolean | "maybe" {
  if (n1 === "x" || n2 === "x") return false;
  if (n1 < n2) return true;
  if (n1 > n2) return false;
  return "maybe";
}
function before(a: FlowSpecificVer, b: FlowSpecificVer): boolean {
  let test = lt(a.major, b.major);
  if (test !== "maybe") return test;
  test = lt(a.minor, b.minor);
  if (test !== "maybe") return test;
  test = lt(a.patch, b.patch);
  if (test !== "maybe") return test;
  return false;
}

/**
 * Given a version range, returns the max version satisfying the range.
 */
function maxSat(ver: FlowVersion): FlowSpecificVer | null {
  switch (ver.kind) {
    case 'all': return null;
    case 'ranged': return ver.upper;
    case 'specific': return ver.ver;
    default: (ver: empty); throw new Error('Unexpected FlowVersion kind!');
  }
}

/**
 * Given a version range, returns the min version satisfying the range.
 */
function minSat(ver: FlowVersion): FlowSpecificVer | null {
  switch (ver.kind) {
    case 'all': return null;
    case 'ranged': return ver.lower;
    case 'specific': return ver.ver;
    default: (ver: empty); throw new Error('Unexpected FlowVersion kind!');
  }
}

/**
 * Given two versions, returns whether they are disjoint.
 */
function _before(a: ?FlowSpecificVer, b: ?FlowSpecificVer): boolean {
  // If a is undefined, it denotes the maximum version. If b is undefined, it
  // denotes the minimum version.
  if (a && b) return before(a, b);
  return false;
}
function disjointVersions(a: FlowVersion, b: FlowVersion): boolean {
  return _before (maxSat(a), minSat(b)) || _before (maxSat(b), minSat(a));
}

/**
 * Given an array of versions, returns whether they are mutually disjoint.
 */
function _disjointVersionsAll(vers, len, i) {
  if (i+1 >= len) return true;
  for (let j = i+1; j < len; j++) {
    if (!disjointVersions(vers[i], vers[j])) {
      return false;
    }
  }
  return _disjointVersionsAll(vers, len, i+1);
}
export function disjointVersionsAll(vers: Array<FlowVersion>): boolean {
  return _disjointVersionsAll(vers, vers.length, 0);
};

export function toDirString(ver: FlowVersion): string {
  switch (ver.kind) {
    case 'all':
      return 'flow_all';

    case 'specific': {
      let str = `flow_v${ver.ver.major}.${ver.ver.minor}`;
      if (ver.ver.patch !== null) {
        str += `.${ver.ver.patch}`;
        if (ver.ver.prerel) {
          str += `-${ver.ver.prerel}`;
        }
      }
      return str;
    }

    case "ranged": {
      const {lower, upper} = ver;
      let str = "flow_";
      if (lower !== null) {
        str += `v${lower.major}.${lower.minor}`;
        if (lower.patch !== null) {
          str += `.${lower.patch}`;
          if (lower.prerel !== null) {
            str += `-${lower.prerel}`;
          }
        }
      }

      str += '-';

      if (upper !== null) {
        str += `v${upper.major}.${upper.minor}`;
        if (upper.patch !== null) {
          str += `.${upper.patch}`;
          if (upper.prerel !== null) {
            str += `-${upper.prerel}`;
          }
        }
      }
      return str;
    }

    default: (ver: empty); throw new Error('Unexpected FlowVersion kind!');
  }
};

export function toSemverString(ver: FlowVersion): string {
  switch (ver.kind) {
    case 'all':
      return 'vx.x.x';

    case 'specific':
      return toDirString(ver).substr('flow_'.length);

    case 'ranged': {
      const {upper, lower} = ver;
      let str = '';
      if (lower !== null) {
        str += `>=v${lower.major}.${lower.minor}`;
        if (lower.patch !== null) {
          str += `.${lower.patch}`;
          if (lower.prerel !== null) {
            str += `-${lower.prerel}`;
          }
        }
        if (upper !== null) {
          str += ' ';
        }
      }

      if (upper !== null) {
        str += `<=v${upper.major}.${upper.minor}`;
        if (upper.patch !== null) {
          str += `.${upper.patch}`;
          if (upper.prerel !== null) {
            str += `-${upper.prerel}`;
          }
        }
      }
      return str;
    }

    default: (ver: empty); throw new Error('Unexpected FlowVersion kind!');
  };
};

// Exported for tests
export {
  _parseVersion as __parseVersion
};
