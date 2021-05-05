declare module "semver" {
  import type semverParse from './functions/parse';
  import type semverValid from './functions/valid';
  import type semverClean from './functions/clean';
  import type semverInc from './functions/inc';
  import type semverDiff from './functions/diff';
  import type semverMajor from './functions/major';
  import type semverMinor from './functions/minor';
  import type semverPatch from './functions/patch';
  import type semverPrerelease from './functions/prerelease';
  import type semverCompare from './functions/compare';
  import type semverRcompare from './functions/rcompare';
  import type semverCompareLoose from './functions/compare-loose';
  import type semverCompareBuild from './functions/compare-build';
  import type semverSort from './functions/sort';
  import type semverRsort from './functions/rsort';
  declare export {
            semverParse as parse,semverValid as valid,semverClean as clean,semverInc as inc,semverDiff as diff,semverMajor as major,semverMinor as minor,semverPatch as patch,semverPrerelease as prerelease,semverCompare as compare,semverRcompare as rcompare,semverCompareLoose as compareLoose,semverCompareBuild as compareBuild,semverSort as sort,semverRsort as rsort
          }
  import type semverGt from './functions/gt';
  import type semverLt from './functions/lt';
  import type semverEq from './functions/eq';
  import type semverNeq from './functions/neq';
  import type semverGte from './functions/gte';
  import type semverLte from './functions/lte';
  import type semverCmp from './functions/cmp';
  import type semverCoerce from './functions/coerce';
  declare export {
            semverGt as gt,semverLt as lt,semverEq as eq,semverNeq as neq,semverGte as gte,semverLte as lte,semverCmp as cmp,semverCoerce as coerce
          }
  import type semverSatisfies from './functions/satisfies';
  import type semverMaxSatisfying from './ranges/max-satisfying';
  import type semverMinSatisfying from './ranges/min-satisfying';
  import type semverToComparators from './ranges/to-comparators';
  import type semverMinVersion from './ranges/min-version';
  import type semverValidRange from './ranges/valid';
  import type semverOutside from './ranges/outside';
  import type semverGtr from './ranges/gtr';
  import type semverLtr from './ranges/ltr';
  import type semverIntersects from './ranges/intersects';
  import type simplify from './ranges/simplify';
  import type rangeSubset from './ranges/subset';
  declare export {
            semverSatisfies as satisfies,semverMaxSatisfying as maxSatisfying,semverMinSatisfying as minSatisfying,semverToComparators as toComparators,semverMinVersion as minVersion,semverValidRange as validRange,semverOutside as outside,semverGtr as gtr,semverLtr as ltr,semverIntersects as intersects,simplify as simplifyRange,rangeSubset as subset
          }
  import type SemVer from './classes/semver';
  import type Range from './classes/range';
  import type Comparator from './classes/comparator';
  declare export {
            SemVer,Range,Comparator
          }
  import type identifiers from './internals/identifiers';
  declare export var compareIdentifiers: typeof identifiers.compareIdentifiers;declare export var rcompareIdentifiers: typeof identifiers.rcompareIdentifiers;declare export var SEMVER_SPEC_VERSION: "2.0.0";export type ReleaseType = "major"
  | "premajor"
  | "minor"
  | "preminor"
  | "patch"
  | "prepatch"
  | "prerelease";export interface Options {
  loose?: boolean,
  includePrerelease?: boolean,
  } export type CoerceOptions = {

  /**
   * Used by `coerce()` to coerce from right to left.
   * @default false
   * @example coerce('1.2.3.4', { rtl: true });
   * // => SemVer { version: '2.3.4', ... }
   * @since 6.2.0
   */
  rtl?: boolean,...
  } & Options
  export type Operator = "==="
  | "!=="
  | ""
  | "="
  | "=="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<=";
}

declare module "semver/preload.js" {
  import type semver from '.';
  declare module.exports: typeof semver

}

declare module "semver/classes/comparator.js" {
  import type sermver from '../index';
  import type SemVer from './semver';
  declare class Comparator  {
  constructor(comp: string | Comparator, optionsOrLoose?: boolean | sermver.Options): this;
  semver: SemVer;
  operator: ""
  | "="
  | "<"
  | ">"
  | "<="
  | ">=";
  value: string;
  loose: boolean;
  options: sermver.Options;
  parse(comp: string): void;
  test(version: string | SemVer): boolean;
  intersects(comp: Comparator, optionsOrLoose?: boolean | sermver.Options): boolean;
  }declare module.exports: typeof Comparator

}

declare module "semver/classes/range.js" {
  import type semver from '../index';
  import type Comparator from './comparator';
  import type SemVer from './semver';
  declare class Range  {
  constructor(range: string | Range, optionsOrLoose?: boolean | semver.Options): this;
  range: string;
  raw: string;
  loose: boolean;
  options: semver.Options;
  includePrerelease: boolean;
  format(): string;
  inspect(): string;
  set: $ReadOnlyArray<$ReadOnlyArray<Comparator>>;
  parseRange(range: string): $ReadOnlyArray<Comparator>;
  test(version: string | SemVer): boolean;
  intersects(range: Range, optionsOrLoose?: boolean | semver.Options): boolean;
  }declare module.exports: typeof Range

}

declare module "semver/classes/semver.js" {
  import type semver from '../index';
  declare class SemVer  {
  constructor(version: string | SemVer, optionsOrLoose?: boolean | semver.Options): this;
  raw: string;
  loose: boolean;
  options: semver.Options;
  format(): string;
  inspect(): string;
  major: number;
  minor: number;
  patch: number;
  version: string;
  build: $ReadOnlyArray<string>;
  prerelease: $ReadOnlyArray<string | number>;

  /**
   * Compares two versions excluding build identifiers (the bit after `+` in the semantic version string).
   * @return - `0` if `this` == `other`
   * - `1` if `this` is greater
   * - `-1` if `other` is greater.
   */
  compare(other: string | SemVer): 1 | 0 | -1;

  /**
   * Compares the release portion of two versions.
   * @return - `0` if `this` == `other`
   * - `1` if `this` is greater
   * - `-1` if `other` is greater.
   */
  compareMain(other: string | SemVer): 1 | 0 | -1;

  /**
   * Compares the prerelease portion of two versions.
   * @return - `0` if `this` == `other`
   * - `1` if `this` is greater
   * - `-1` if `other` is greater.
   */
  comparePre(other: string | SemVer): 1 | 0 | -1;

  /**
   * Compares the build identifier of two versions.
   * @return - `0` if `this` == `other`
   * - `1` if `this` is greater
   * - `-1` if `other` is greater.
   */
  compareBuild(other: string | SemVer): 1 | 0 | -1;
  inc(release: semver.ReleaseType, identifier?: string): SemVer;
  }declare module.exports: typeof SemVer

}

declare module "semver/functions/clean.js" {
  import type semver from '../index';
  /**
   * Returns cleaned (removed leading/trailing whitespace, remove '=v' prefix) and parsed version, or null if version is invalid.
   */
  declare function clean(version: string, optionsOrLoose?: boolean | semver.Options): string | null
  declare module.exports: typeof clean

}

declare module "semver/functions/cmp.js" {
  import type semver from '../index';
  import type SemVer from '../classes/semver';
  /**
   * Pass in a comparison string, and it'll call the corresponding semver comparison function.
   * "===" and "!==" do simple string comparison, but are included for completeness.
   * Throws if an invalid comparison string is provided.
   */
  declare function cmp(
  v1: string | SemVer,
  operator: semver.Operator,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof cmp

}

declare module "semver/functions/coerce.js" {
  import type semver from '../index';
  import type SemVer from '../classes/semver';
  /**
   * Coerces a string to SemVer if possible
   */
  declare function coerce(
  version: string
  | number
  | SemVer
  | null
  | void,
  options?: semver.CoerceOptions): SemVer | null
  declare module.exports: typeof coerce

}

declare module "semver/functions/compare-build.js" {
  import type SemVer from '../classes/semver';
  /**
   * Compares two versions including build identifiers (the bit after `+` in the semantic version string).
   *
   * Sorts in ascending order when passed to `Array.sort()`.
   * @return - `0` if `v1` == `v2`
   * - `1` if `v1` is greater
   * - `-1` if `v2` is greater.
   * @since 6.1.0
   */
  declare function compareBuild(a: string | SemVer, b: string | SemVer): 1 | 0 | -1
  declare module.exports: typeof compareBuild

}

declare module "semver/functions/compare-loose.js" {
  import type SemVer from '../classes/semver';
  declare function compareLoose(v1: string | SemVer, v2: string | SemVer): 1 | 0 | -1
  declare module.exports: typeof compareLoose

}

declare module "semver/functions/compare.js" {
  import type semver from '../index';
  import type SemVer from '../classes/semver';
  /**
   * Compares two versions excluding build identifiers (the bit after `+` in the semantic version string).
   *
   * Sorts in ascending order when passed to `Array.sort()`.
   * @return - `0` if `v1` == `v2`
   * - `1` if `v1` is greater
   * - `-1` if `v2` is greater.
   */
  declare function compare(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): 1 | 0 | -1
  declare module.exports: typeof compare

}

declare module "semver/functions/diff.js" {
  import type semver from '../index';
  import type SemVer from '../classes/semver';
  /**
   * Returns difference between two versions by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if the versions are the same.
   */
  declare function diff(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): semver.ReleaseType | null
  declare module.exports: typeof diff

}

declare module "semver/functions/eq.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.
   */
  declare function eq(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof eq

}

declare module "semver/functions/gt.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * v1 > v2
   */
  declare function gt(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof gt

}

declare module "semver/functions/gte.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * v1 >= v2
   */
  declare function gte(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof gte

}

declare module "semver/functions/inc.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the version incremented by the release type (major, minor, patch, or prerelease), or null if it's not valid.
   */
  declare function inc(
  version: string | SemVer,
  release: semver.ReleaseType,
  optionsOrLoose?: boolean | semver.Options,
  identifier?: string): string | null
  declare function inc(
  version: string | SemVer,
  release: semver.ReleaseType,
  identifier?: string): string | null
  declare module.exports: typeof inc

}

declare module "semver/functions/lt.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * v1 < v2
   */
  declare function lt(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof lt

}

declare module "semver/functions/lte.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * v1 <= v2
   */
  declare function lte(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof lte

}

declare module "semver/functions/major.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the major version number.
   */
  declare function major(version: string | SemVer, optionsOrLoose?: boolean | semver.Options): number
  declare module.exports: typeof major

}

declare module "semver/functions/minor.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the minor version number.
   */
  declare function minor(version: string | SemVer, optionsOrLoose?: boolean | semver.Options): number
  declare module.exports: typeof minor

}

declare module "semver/functions/neq.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * v1 != v2 The opposite of eq.
   */
  declare function neq(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof neq

}

declare module "semver/functions/parse.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the parsed version as a SemVer object, or null if it's not valid.
   */
  declare function parse(
  version: string | SemVer | null | void,
  optionsOrLoose?: boolean | semver.Options): SemVer | null
  declare module.exports: typeof parse

}

declare module "semver/functions/patch.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the patch version number.
   */
  declare function patch(version: string | SemVer, optionsOrLoose?: boolean | semver.Options): number
  declare module.exports: typeof patch

}

declare module "semver/functions/prerelease.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Returns an array of prerelease components, or null if none exist.
   */
  declare function prerelease(
  version: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): $ReadOnlyArray<string | number> | null
  declare module.exports: typeof prerelease

}

declare module "semver/functions/rcompare.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * The reverse of compare.
   *
   * Sorts in descending order when passed to `Array.sort()`.
   */
  declare function rcompare(
  v1: string | SemVer,
  v2: string | SemVer,
  optionsOrLoose?: boolean | semver.Options): 1 | 0 | -1
  declare module.exports: typeof rcompare

}

declare module "semver/functions/rsort.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Sorts an array of semver entries in descending order using `compareBuild()`.
   */
  declare function rsort<T: string | SemVer>(list: T[], optionsOrLoose?: boolean | semver.Options): T[]
  declare module.exports: typeof rsort

}

declare module "semver/functions/satisfies.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return true if the version satisfies the range.
   */
  declare function satisfies(
  version: string | SemVer,
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof satisfies

}

declare module "semver/functions/sort.js" {
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Sorts an array of semver entries in ascending order using `compareBuild()`.
   */
  declare function sort<T: string | SemVer>(list: T[], optionsOrLoose?: boolean | semver.Options): T[]
  declare module.exports: typeof sort

}

declare module "semver/functions/valid.js" {
  import type semver from '../index';
  import type SemVer from '../classes/semver';
  /**
   * Return the parsed version as a string, or null if it's not valid.
   */
  declare function valid(
  version: string | SemVer | null | void,
  optionsOrLoose?: boolean | semver.Options): string | null
  declare module.exports: typeof valid

}

declare module "semver/internals/identifiers.js" {

  /**
   * Compares two identifiers, must be numeric strings or truthy/falsy values.
   *
   * Sorts in ascending order when passed to `Array.sort()`.
   */
  declare export function compareIdentifiers(a: string | null | void, b: string | null | void): 1 | 0 | -1

  /**
   * The reverse of compareIdentifiers.
   *
   * Sorts in descending order when passed to `Array.sort()`.
   */
  declare export function rcompareIdentifiers(a: string | null | void, b: string | null | void): 1 | 0 | -1

}

declare module "semver/ranges/gtr.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return true if version is greater than all the versions possible in the range.
   */
  declare function gtr(
  version: string | SemVer,
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof gtr

}

declare module "semver/ranges/intersects.js" {
  import type Range from '../classes/range';
  import type semver from '../index';
  /**
   * Return true if any of the ranges comparators intersect
   */
  declare function intersects(
  range1: string | Range,
  range2: string | Range,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof intersects

}

declare module "semver/ranges/ltr.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return true if version is less than all the versions possible in the range.
   */
  declare function ltr(
  version: string | SemVer,
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof ltr

}

declare module "semver/ranges/max-satisfying.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the highest version in the list that satisfies the range, or null if none of them do.
   */
  declare function maxSatisfying<T: string | SemVer>(
  versions: $ReadOnlyArray<T>,
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options): T | null
  declare module.exports: typeof maxSatisfying

}

declare module "semver/ranges/min-satisfying.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the lowest version in the list that satisfies the range, or null if none of them do.
   */
  declare function minSatisfying<T: string | SemVer>(
  versions: $ReadOnlyArray<T>,
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options): T | null
  declare module.exports: typeof minSatisfying

}

declare module "semver/ranges/min-version.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return the lowest version that can possibly match the given range.
   */
  declare function minVersion(
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options): SemVer | null
  declare module.exports: typeof minVersion

}

declare module "semver/ranges/outside.js" {
  import type Range from '../classes/range';
  import type SemVer from '../classes/semver';
  import type semver from '../index';
  /**
   * Return true if the version is outside the bounds of the range in either the high or low direction.
   * The hilo argument must be either the string '>' or '<'. (This is the function called by gtr and ltr.)
   */
  declare function outside(
  version: string | SemVer,
  range: string | Range,
  hilo: ">" | "<",
  optionsOrLoose?: boolean | semver.Options): boolean
  declare module.exports: typeof outside

}

declare module "semver/ranges/simplify.js" {
  import type Range from '../classes/range';
  import type semver from '../index';
  /**
   * Return a "simplified" range that matches the same items in `versions` list as the range specified.
   * Note that it does *not* guarantee that it would match the same versions in all cases,
   * only for the set of versions provided.
   * This is useful when generating ranges by joining together multiple versions with `||` programmatically,
   * to provide the user with something a bit more ergonomic.
   * If the provided range is shorter in string-length than the generated range, then that is returned.
   */
  declare function simplify(
  ranges: string[],
  range: string | Range,
  options?: semver.Options): string | Range
  declare module.exports: typeof simplify

}

declare module "semver/ranges/subset.js" {
  import type Range from '../classes/range';
  import type semver from '../index';
  /**
   * Return true if the subRange range is entirely contained by the superRange range.
   */
  declare function subset(sub: string | Range, dom: string | Range, options?: semver.Options): boolean
  declare module.exports: typeof subset

}

declare module "semver/ranges/to-comparators.js" {
  import type Range from '../classes/range';
  import type semver from '../index';
  /**
   * Mostly just for testing and legacy API reasons
   */
  declare function toComparators(range: string | Range, optionsOrLoose?: boolean | semver.Options): string
  declare module.exports: typeof toComparators

}

declare module "semver/ranges/valid.js" {
  import type Range from '../classes/range';
  import type semver from '../index';
  /**
   * Return the valid range or null if it's not valid
   */
  declare function validRange(
  range: string | Range | null | void,
  optionsOrLoose?: boolean | semver.Options): string
  declare module.exports: typeof validRange

}
