// @flow

import semver from 'semver';
import {fs, path} from './node.js';
import {versionToString} from './semver.js';
import {
  disjointVersionsAll,
  parseDirString as parseFlowDirString,
  toSemverString as flowVerToSemver,
  toDirString as flowVerToDirString,
  parseDirString,
  compareFlowVersionAsc,
} from './flowVersion.js';
import type {FlowVersion} from './flowVersion.js';
import {ValidationError} from './ValidationError';
import {
  ensureCacheRepo,
  verifyCLIVersion,
  getCacheRepoNpmDefsDir,
} from './cacheRepoUtils';

const P = Promise;

export type LibDef = {|
  pkgName: string,
  pkgVersionStr: string,
  flowVersion: FlowVersion,
  flowVersionStr: string,
  path: string,
  testFilePaths: Array<string>,
|};

export const TEST_FILE_NAME_RE = /^test_.*\.js$/;

async function addLibDefs(pkgDirPath, libDefs: Array<LibDef>) {
  const parsedDirItem = parseRepoDirItem(pkgDirPath);
  (await parseLibDefsFromPkgDir(parsedDirItem, pkgDirPath)).forEach(libDef =>
    libDefs.push(libDef),
  );
}

/**
 * Given a 'definitions/npm' dir, return a list of LibDefs that it contains.
 */
export async function getLibDefs(defsDir: string) {
  const libDefs: Array<LibDef> = [];
  const defsDirItems = await fs.readdir(defsDir);
  await P.all(
    defsDirItems.map(async item => {
      const itemPath = path.join(defsDir, item);
      const itemStat = await fs.stat(itemPath);
      if (itemStat.isDirectory()) {
        if (item.charAt(0) === '@') {
          // directory is of the form '@<scope>', so go one level deeper
          const scope = item;
          const defsDirItems = await fs.readdir(itemPath);
          await P.all(
            defsDirItems.map(async item => {
              const itemPath = path.join(defsDir, scope, item);
              const itemStat = await fs.stat(itemPath);
              if (itemStat.isDirectory()) {
                // itemPath is a lib dir
                await addLibDefs(itemPath, libDefs);
              } else {
                const error = `Expected only directories in the 'definitions/npm/@<scope>' directory!`;
                throw new ValidationError(error);
              }
            }),
          );
        } else {
          // itemPath is a lib dir
          await addLibDefs(itemPath, libDefs);
        }
      } else {
        const error = `Expected only directories in the 'definitions/npm' directory!`;
        throw new ValidationError(error);
      }
    }),
  );
  return libDefs;
}

function parsePkgFlowDirVersion(pkgFlowDirPath): FlowVersion {
  const pkgFlowDirName = path.basename(pkgFlowDirPath);
  return parseFlowDirString(pkgFlowDirName);
}

/**
 * Given a parsed package name and version and a path to the package directory
 * on disk, scan the directory and generate a list of LibDefs for each
 * flow-versioned definition file.
 */
async function parseLibDefsFromPkgDir(
  {pkgName, pkgVersion},
  pkgDirPath,
): Promise<Array<LibDef>> {
  const pkgVersionStr = versionToString(pkgVersion);
  const pkgDirItems = await fs.readdir(pkgDirPath);

  const commonTestFiles = [];
  const flowDirs = [];
  pkgDirItems.forEach(pkgDirItem => {
    const pkgDirItemPath = path.join(pkgDirPath, pkgDirItem);

    const pkgDirItemStat = fs.statSync(pkgDirItemPath);
    if (pkgDirItemStat.isFile()) {
      if (path.extname(pkgDirItem) === '.swp') {
        return;
      }

      const isValidTestFile = validateTestFile(pkgDirItemPath);

      if (isValidTestFile) {
        commonTestFiles.push(pkgDirItemPath);
      }
    } else if (pkgDirItemStat.isDirectory()) {
      flowDirs.push([pkgDirItemPath, parsePkgFlowDirVersion(pkgDirItemPath)]);
    } else {
      throw new ValidationError('Unexpected directory item: ' + pkgDirItemPath);
    }
  });

  if (!disjointVersionsAll(flowDirs.map(([_, ver]) => ver))) {
    throw new ValidationError('Flow versions not disjoint!');
  }

  if (flowDirs.length === 0) {
    throw new ValidationError('No libdef files found!');
  }

  const libDefs = [];
  await P.all(
    flowDirs.map(async ([flowDirPath, flowVersion]) => {
      const testFilePaths = [].concat(commonTestFiles);
      const basePkgName =
        pkgName.charAt(0) === '@' ? pkgName.split(path.sep).pop() : pkgName;
      const libDefFileName = `${basePkgName}_${pkgVersionStr}.js`;
      let libDefFilePath;
      (await fs.readdir(flowDirPath)).forEach(flowDirItem => {
        const flowDirItemPath = path.join(flowDirPath, flowDirItem);
        const flowDirItemStat = fs.statSync(flowDirItemPath);
        if (flowDirItemStat.isFile()) {
          // If we couldn't discern the package name, we've already recorded an
          // error for that -- so try to avoid spurious downstream errors.
          if (pkgName === 'ERROR') {
            return;
          }

          if (path.extname(flowDirItem) === '.swp') {
            return;
          }

          if (flowDirItem === libDefFileName) {
            libDefFilePath = path.join(flowDirPath, flowDirItem);
            return;
          }

          const isValidTestFile = validateTestFile(flowDirItemPath);

          if (isValidTestFile) {
            testFilePaths.push(flowDirItemPath);
          }
        } else {
          const error = 'Unexpected directory item: ' + flowDirItemPath;
          throw new ValidationError(error);
        }
      });

      if (libDefFilePath == null) {
        libDefFilePath = path.join(flowDirPath, libDefFileName);
        if (pkgName !== 'ERROR') {
          const error = 'No libdef file found!';
          throw new ValidationError(error);
        }
        return;
      }

      libDefs.push({
        pkgName,
        pkgVersionStr,
        flowVersion: flowVersion,
        flowVersionStr: flowVerToDirString(flowVersion),
        path: libDefFilePath,
        testFilePaths,
      });
    }),
  );
  return libDefs;
}

/**
 * Given the path to a directory item in the 'definitions' directory, parse the
 * directory's name into a package name and version.
 */
const REPO_DIR_ITEM_NAME_RE = /^(.*)_v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)(-.*)?$/;
export function parseRepoDirItem(dirItemPath: string) {
  const dirItem = path.basename(dirItemPath);
  const itemMatches = dirItem.match(REPO_DIR_ITEM_NAME_RE);
  if (itemMatches == null) {
    const error =
      `'${dirItem}' is a malformed definitions/npm/ directory name! ` +
      `Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>`;
    throw new ValidationError(error);
  }

  let [_, pkgName, major, minor, patch, prerel] = itemMatches;
  const item = path
    .dirname(dirItemPath)
    .split(path.sep)
    .pop();
  if (item.charAt(0) === '@') {
    pkgName = `${item}${path.sep}${pkgName}`;
  }
  major = validateVersionNumPart(major, 'major', dirItemPath);
  minor = validateVersionPart(minor, 'minor', dirItemPath);
  patch = validateVersionPart(patch, 'patch', dirItemPath);

  if (prerel != null) {
    prerel = prerel.substr(1);
  }

  return {pkgName, pkgVersion: {major, minor, patch, prerel}};
}

/**
 * Given a path to an assumed test file, ensure that it is named as expected.
 */
function validateTestFile(testFilePath) {
  const testFileName = path.basename(testFilePath);
  return TEST_FILE_NAME_RE.test(testFileName);
}

/**
 * Given a number-only part of a version string (i.e. the `major` part), parse
 * the string into a number.
 */
function validateVersionNumPart(part, partName, context) {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    const error = `'${context}': Invalid ${partName} number: '${part}'. Expected a number.`;
    throw new ValidationError(error);
  }
  return num;
}

/**
 * Given a number-or-wildcard part of a version string (i.e. a `minor` or
 * `patch` part), parse the string into either a number or 'x'.
 */
function validateVersionPart(part, partName, context) {
  if (part === 'x') {
    return part;
  }
  return validateVersionNumPart(part, partName, context);
}

/**
 * Get a list of LibDefs from the flow-typed cache repo checkout.
 *
 * If the repo checkout does not exist or is out of date, it will be
 * created/updated automatically first.
 */
export async function getCacheLibDefs(repoName: string) {
  await ensureCacheRepo(repoName);
  await verifyCLIVersion(repoName);
  return getLibDefs(getCacheRepoNpmDefsDir(repoName));
}

function packageNameMatch(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase();
}

function libdefMatchesPackageVersion(
  pkgSemver: string,
  defVersionRaw: string,
): boolean {
  // The libdef version should be treated as a semver prefixed by a carat
  // (i.e: "foo_v2.2.x" is the same range as "^2.2.x")
  // UNLESS it is prefixed by the equals character (i.e. "foo_=v2.2.x")
  let defVersion = defVersionRaw;
  if (defVersionRaw[0] !== '=' && defVersionRaw[0] !== '^') {
    defVersion = '^' + defVersionRaw;
  }

  if (semver.valid(pkgSemver)) {
    // test the single package version against the libdef range
    return semver.satisfies(pkgSemver, defVersion);
  }

  if (semver.valid(defVersion)) {
    // test the single defVersion agains the package range
    return semver.satisfies(defVersion, pkgSemver);
  }

  const pkgRange = new semver.Range(pkgSemver);
  const defRange = new semver.Range(defVersion);

  if (defRange.set[0].length !== 2) {
    throw Error(
      'Invalid libDef version, It appears to be a non-contiguous range.',
    );
  }

  const defLowerB = defRange.set[0][0].semver.version;
  const defUpperB = defRange.set[0][1].semver.version;

  if (semver.gtr(defLowerB, pkgSemver) || semver.ltr(defUpperB, pkgSemver)) {
    return false;
  }

  const pkgLowerB = pkgRange.set[0][0].semver.version;
  return defRange.test(pkgLowerB);
}

/**
 * Filter a given list of LibDefs down using a specified filter.
 */
type LibDefFilter =
  | {|type: 'fuzzy', flowVersionStr?: string, term: string|}
  | {|
      type: 'exact',
      flowVersionStr?: string,
      pkgName: string,
      pkgVersionStr: string,
    |}
  | {|type: 'exact-name', flowVersionStr?: string, term: string|};
export function filterLibDefs(
  defs: Array<LibDef>,
  filter: LibDefFilter,
): Array<LibDef> {
  return defs
    .filter((def: LibDef) => {
      let filterMatch = false;
      switch (filter.type) {
        case 'exact':
          filterMatch =
            packageNameMatch(def.pkgName, filter.pkgName) &&
            libdefMatchesPackageVersion(
              filter.pkgVersionStr,
              def.pkgVersionStr,
            );
          break;

        case 'exact-name':
          filterMatch = packageNameMatch(def.pkgName, filter.term);
          break;

        case 'fuzzy':
          filterMatch =
            def.pkgName.toLowerCase().indexOf(filter.term.toLowerCase()) !== -1;
          break;

        default:
          throw new Error(
            `'${filter.type}' is an unexpected filter type! This should never ` +
              `happen!`,
          );
      }

      if (!filterMatch) {
        return false;
      }

      const filterFlowVerStr = filter.flowVersionStr;
      if (filterFlowVerStr) {
        const {flowVersion} = def;
        switch (flowVersion.kind) {
          case 'all':
            return semver.satisfies(filterFlowVerStr, def.flowVersionStr);
          case 'specific':
            return semver.satisfies(filterFlowVerStr, def.flowVersionStr);
          case 'ranged':
            const {upper} = flowVersion;
            if (upper) {
              const lowerSpecific = {
                kind: 'ranged',
                upper: null,
                lower: flowVersion.lower,
              };
              const lowerSpecificSemver = flowVerToSemver(lowerSpecific);
              const upperSpecificSemver = flowVerToSemver({
                kind: 'specific',
                ver: upper,
              });
              return (
                semver.satisfies(filterFlowVerStr, lowerSpecificSemver) &&
                semver.satisfies(filterFlowVerStr, upperSpecificSemver)
              );
            } else {
              return semver.satisfies(
                filterFlowVerStr,
                flowVerToSemver(def.flowVersion),
              );
            }

          default:
            (flowVersion: empty);
            throw new Error('Unexpected FlowVersion kind!');
        }
      }

      return true;
    })
    .sort((a, b) => {
      const aZeroed = a.pkgVersionStr.replace(/x/g, '0');
      const bZeroed = b.pkgVersionStr.replace(/x/g, '0');
      const pkgCompare = semver.compare(aZeroed, bZeroed);
      if (pkgCompare !== 0) return -pkgCompare;

      const aFlowVersionStr: ?string = a.flowVersionStr;
      const bFlowVersionStr: ?string = b.flowVersionStr;

      if (aFlowVersionStr == null) return 1;
      if (bFlowVersionStr == null) return -1;

      const aFlowVersion = parseDirString(aFlowVersionStr);
      const bFlowVersion = parseDirString(bFlowVersionStr);

      return -1 * compareFlowVersionAsc(aFlowVersion, bFlowVersion);
    });
}
