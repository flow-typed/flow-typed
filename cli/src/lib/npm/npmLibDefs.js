// @flow

import {
  ensureCacheRepo,
  getCacheRepoDir,
  verifyCLIVersion,
} from '../cacheRepoUtils';

import {getSignedCodeVersion, verifySignedCode} from '../codeSign';

import {getFilesInDir} from '../fileUtils';

import type {FlowVersion} from '../flowVersion';
import {
  disjointVersionsAll as disjointFlowVersionsAll,
  parseDirString as parseFlowDirString,
  toSemverString as flowVersionToSemver,
} from '../flowVersion';

import {findLatestFileCommitHash} from '../git';

import {fs, path} from '../node';

import {
  getRangeLowerBound,
  getRangeUpperBound,
  versionToString,
} from '../semver';

import semver from 'semver';

import got from 'got';

import {ValidationError} from '../ValidationError';
import {TEST_FILE_NAME_RE} from '../libDefs';

const P = Promise;

export type NpmLibDef = {|
  scope: null | string,
  name: string,
  version: string,
  flowVersion: FlowVersion,
  path: string,
  testFilePaths: Array<string>,
|};

export type NpmLibDefFilter = {|
  type: 'exact',
  pkgName: string,
  pkgVersion: string,
  flowVersion?: FlowVersion,
|};

async function extractLibDefsFromNpmPkgDir(
  pkgDirPath: string,
  scope: null | string,
  pkgNameVer: string,
  validating?: boolean,
): Promise<Array<NpmLibDef>> {
  const parsedPkgNameVer = parsePkgNameVer(pkgNameVer);
  if (parsedPkgNameVer === null) {
    return [];
  }
  const {pkgName, pkgVersion} = parsedPkgNameVer;

  const pkgVersionStr = versionToString(pkgVersion);
  const libDefFileName = `${pkgName}_${pkgVersionStr}.js`;
  const pkgDirItems = await fs.readdir(pkgDirPath);

  if (validating) {
    const fullPkgName = `${scope === null ? '' : scope + '/'}${pkgName}`;
    await _npmExists(fullPkgName)
      .then()
      .catch(error => {
        // Only fail spen on 404, not on timeout
        if (error.statusCode === 404) {
          throw new ValidationError(`Package does not exist on npm!`);
        }
      });
  }

  const commonTestFiles = [];
  const parsedFlowDirs: Array<[string, FlowVersion]> = [];
  pkgDirItems.forEach(pkgDirItem => {
    const pkgDirItemPath = path.join(pkgDirPath, pkgDirItem);

    const pkgDirItemStat = fs.statSync(pkgDirItemPath);
    if (pkgDirItemStat.isFile()) {
      const isValidTestFile = TEST_FILE_NAME_RE.test(pkgDirItem);
      if (isValidTestFile) commonTestFiles.push(pkgDirItemPath);
    } else if (pkgDirItemStat.isDirectory()) {
      const parsedFlowDir = parseFlowDirString(pkgDirItem);
      parsedFlowDirs.push([pkgDirItemPath, parsedFlowDir]);
    } else {
      throw new ValidationError('Unexpected directory item');
    }
  });

  if (!disjointFlowVersionsAll(parsedFlowDirs.map(([_, ver]) => ver))) {
    throw new ValidationError('Flow versions not disjoint!');
  }

  if (parsedFlowDirs.length === 0) {
    throw new ValidationError('No libdef files found!');
  }

  const libDefs = [];
  await P.all(
    parsedFlowDirs.map(async ([flowDirPath, flowVersion]) => {
      const testFilePaths = [].concat(commonTestFiles);
      let libDefFilePath: null | string = null;
      (await fs.readdir(flowDirPath)).forEach(flowDirItem => {
        const flowDirItemPath = path.join(flowDirPath, flowDirItem);
        const flowDirItemStat = fs.statSync(flowDirItemPath);
        if (flowDirItemStat.isFile()) {
          if (path.extname(flowDirItem) === '.swp') {
            return;
          }

          // Is this the libdef file?
          if (flowDirItem === libDefFileName) {
            libDefFilePath = path.join(flowDirPath, flowDirItem);
            return;
          }

          // Is this a test file?
          const isValidTestFile = TEST_FILE_NAME_RE.test(flowDirItem);

          if (isValidTestFile) {
            testFilePaths.push(flowDirItemPath);
            return;
          }

          throw new ValidationError(
            `Unexpected file: ${libDefFileName}. This directory can only contain test files ` +
              `or a libdef file named ${'`' + libDefFileName + '`'}.`,
          );
        } else {
          throw new ValidationError(
            `Unexpected sub-directory. This directory can only contain test ` +
              `files or a libdef file named ${'`' + libDefFileName + '`'}.`,
          );
        }
      });

      if (libDefFilePath === null) {
        libDefFilePath = path.join(flowDirPath, libDefFileName);
        throw new ValidationError(
          `No libdef file found. Looking for a file named ${libDefFileName}`,
        );
      }

      libDefs.push({
        scope,
        name: pkgName,
        version: pkgVersionStr,
        flowVersion,
        path: libDefFilePath,
        testFilePaths,
      });
    }),
  );

  return libDefs;
}

async function getCacheNpmLibDefs() {
  await ensureCacheRepo();
  await verifyCLIVersion();
  return getNpmLibDefs(path.join(getCacheRepoDir(), 'definitions'));
}

const PKG_NAMEVER_RE = /^(.*)_v\^?([0-9]+)\.([0-9]+|x)\.([0-9]+|x)(-.*)?$/;
function parsePkgNameVer(pkgNameVer: string) {
  const pkgNameVerMatches = pkgNameVer.match(PKG_NAMEVER_RE);
  if (pkgNameVerMatches == null) {
    throw new ValidationError(
      `Malformed npm package name! ` +
        `Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH> but instead got ${pkgNameVer}`,
    );
  }

  let [_, pkgName, major, minor, patch, prerel] = pkgNameVerMatches;
  major = validateVersionNumPart(major, 'major');
  minor = validateVersionPart(minor, 'minor');
  patch = validateVersionPart(patch, 'patch');

  if (prerel != null) {
    prerel = prerel.substr(1);
  }

  return {pkgName, pkgVersion: {major, minor, patch, prerel}};
}

/**
 * Given a number-or-wildcard part of a version string (i.e. a `minor` or
 * `patch` part), parse the string into either a number or 'x'.
 */
function validateVersionPart(part: string, partName: string): number | 'x' {
  if (part === 'x') {
    return part;
  }
  return validateVersionNumPart(part, partName);
}

/**
 * Given a number-only part of a version string (i.e. the `major` part), parse
 * the string into a number.
 */
function validateVersionNumPart(part: string, partName: string): number {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    throw new ValidationError(
      `Invalid ${partName} number: '${part}'. Expected a number.`,
    );
  }
  return num;
}

function pkgVersionMatch(pkgSemver: string, libDefSemverRaw: string) {
  // The package version should be treated as a semver implicitly prefixed by a
  // `^`. (i.e.: "foo_v2.2.x" is the same range as "^2.2.x")
  // UNLESS it is prefixed by the equals character (i.e. "foo_=v2.2.x")
  let libDefSemver =
    libDefSemverRaw[0] !== '=' && libDefSemverRaw[0] !== '^'
      ? '^' + libDefSemverRaw
      : libDefSemverRaw;

  if (semver.valid(pkgSemver)) {
    // Test the single package version against the LibDef range
    return semver.satisfies(pkgSemver, libDefSemver);
  }

  if (semver.valid(libDefSemver)) {
    // Test the single LibDef version against the package range
    return semver.satisfies(libDefSemver, pkgSemver);
  }

  if (!(semver.validRange(pkgSemver) && semver.validRange(libDefSemver))) {
    return false;
  }

  const pkgRange = new semver.Range(pkgSemver);
  const libDefRange = new semver.Range(libDefSemver);

  if (libDefRange.set[0].length !== 2) {
    throw new Error(
      'Invalid npm libdef version! It appears to be a non-continugous range.',
    );
  }

  const libDefLower = getRangeLowerBound(libDefRange);
  const libDefUpper = getRangeUpperBound(libDefRange);

  const pkgBelowLower = semver.gtr(libDefLower, pkgSemver);
  const pkgAboveUpper = semver.ltr(libDefUpper, pkgSemver);
  if (pkgBelowLower || pkgAboveUpper) {
    return false;
  }

  const pkgLower = pkgRange.set[0][0].semver.version;
  return libDefRange.test(pkgLower);
}

function filterLibDefs(
  defs: Array<NpmLibDef>,
  filter: NpmLibDefFilter,
): Array<NpmLibDef> {
  return defs
    .filter(def => {
      let filterMatch = false;
      switch (filter.type) {
        case 'exact':
          const fullName = def.scope ? `${def.scope}/${def.name}` : def.name;
          filterMatch =
            filter.pkgName.toLowerCase() === fullName.toLowerCase() &&
            pkgVersionMatch(filter.pkgVersion, def.version);
          break;
        default:
          (filter: empty);
      }
      if (!filterMatch) {
        return false;
      }

      const filterFlowVersion = filter.flowVersion;
      if (filterFlowVersion !== undefined) {
        const {flowVersion} = def;
        switch (flowVersion.kind) {
          case 'all':
            return true;
          case 'ranged':
          case 'specific':
            return semver.satisfies(
              flowVersionToSemver(filterFlowVersion),
              flowVersionToSemver(def.flowVersion),
            );
          default:
            (flowVersion: empty);
        }
      }

      return true;
    })
    .sort((a, b) => {
      const aZeroed = a.version.replace(/x/g, '0');
      const bZeroed = b.version.replace(/x/g, '0');
      return semver.gt(aZeroed, bZeroed) ? -1 : 1;
    });
}

async function _npmExists(pkgName: string): Promise<Function> {
  const pkgUrl = `https://www.npmjs.com/package/${pkgName}`;
  return got(pkgUrl, {method: 'HEAD'});
}

export async function findNpmLibDef(
  pkgName: string,
  pkgVersion: string,
  flowVersion: FlowVersion,
): Promise<null | NpmLibDef> {
  const libDefs = await getCacheNpmLibDefs();
  const filteredLibDefs = filterLibDefs(libDefs, {
    type: 'exact',
    pkgName,
    pkgVersion,
    flowVersion,
  });
  return filteredLibDefs.length === 0 ? null : filteredLibDefs[0];
}

type InstalledNpmLibDef =
  | {|kind: 'LibDef', libDef: NpmLibDef|}
  | {|kind: 'Stub', name: string|};
export async function getInstalledNpmLibDefs(
  flowProjectRootDir: string,
  libdefDir?: string,
): Promise<Map<string, InstalledNpmLibDef>> {
  const typedefDir = libdefDir || 'flow-typed';
  const libDefDirPath = path.join(flowProjectRootDir, typedefDir, 'npm');
  const installedLibDefs = new Map();
  if (await fs.exists(libDefDirPath)) {
    const filesInNpmDir = await getFilesInDir(libDefDirPath, true);
    await P.all(
      [...filesInNpmDir].map(async fileName => {
        const fullFilePath = path.join(libDefDirPath, fileName);
        const terseFilePath = path.relative(flowProjectRootDir, fullFilePath);
        const fileStat = await fs.stat(fullFilePath);
        if (fileStat.isFile()) {
          const fileContent = (await fs.readFile(fullFilePath)).toString();
          if (verifySignedCode(fileContent)) {
            const signedCodeVer = getSignedCodeVersion(fileContent);
            if (signedCodeVer === null) {
              return;
            }
            const matches = signedCodeVer.match(
              /([^\/]+)\/(@[^\/]+\/)?([^\/]+)\/([^\/]+)/,
            );
            if (matches == null) {
              return;
            }

            if (matches[1] === '<<STUB>>') {
              installedLibDefs.set(terseFilePath, {
                kind: 'Stub',
                name: matches[2],
              });
              return;
            }

            const scope =
              matches[2] == null
                ? null
                : matches[2].substr(0, matches[2].length - 1);

            const nameVer = matches[3];
            if (nameVer === null) {
              return;
            }

            const pkgNameVer = parsePkgNameVer(nameVer);
            if (pkgNameVer === null) {
              return;
            }
            const {pkgName, pkgVersion} = pkgNameVer;

            const flowVerMatches = matches[4].match(
              /^flow_(>=|<=)?(v[^ ]+) ?(<=(v.+))?$/,
            );
            const flowVerStr =
              flowVerMatches == null
                ? matches[3]
                : flowVerMatches[3] == null
                  ? flowVerMatches[2]
                  : `${flowVerMatches[2]}-${flowVerMatches[4]}`;
            const flowDirStr = `flow_${flowVerStr}`;
            const flowVer =
              flowVerMatches == null
                ? parseFlowDirString(flowDirStr)
                : parseFlowDirString(flowDirStr);

            installedLibDefs.set(terseFilePath, {
              kind: 'LibDef',
              libDef: {
                scope,
                name: pkgName,
                version: versionToString(pkgVersion),
                flowVersion: flowVer,
                path: terseFilePath,
                testFilePaths: [],
              },
            });
          }
        }
      }),
    );
  }
  return installedLibDefs;
}

/**
 * Retrieve single libdef.
 */
async function getSingleLibdef(
  itemName: string,
  npmDefsDirPath: string,
  validating?: boolean,
): Promise<Array<NpmLibDef>> {
  const itemPath = path.join(npmDefsDirPath, itemName);
  const itemStat = await fs.stat(itemPath);
  if (itemStat.isDirectory()) {
    if (itemName[0] === '@') {
      // This must be a scoped npm package, so go one directory deeper
      const scope = itemName;
      const scopeDirItems = await fs.readdir(itemPath);
      const settled = await P.all(
        scopeDirItems.map(async itemName => {
          const itemPath = path.join(npmDefsDirPath, scope, itemName);
          const itemStat = await fs.stat(itemPath);
          if (itemStat.isDirectory()) {
            return await extractLibDefsFromNpmPkgDir(
              itemPath,
              scope,
              itemName,
              validating,
            );
          } else {
            throw new ValidationError(
              `Expected only sub-directories in this dir!`,
            );
          }
        }),
      );
      return [].concat(...settled);
    } else {
      // itemPath must be a package dir
      return await extractLibDefsFromNpmPkgDir(
        itemPath,
        null, // No scope
        itemName,
        validating,
      );
    }
  } else {
    throw new ValidationError(
      `Expected only directories to be present in this directory.`,
    );
  }
}

/**
 * Retrieve a list of *all* npm libdefs.
 */
export async function getNpmLibDefs(
  defsDirPath: string,
  validating?: boolean,
): Promise<Array<NpmLibDef>> {
  const npmDefsDirPath = path.join(defsDirPath, 'npm');
  const dirItems = await fs.readdir(npmDefsDirPath);
  const errors = [];
  const proms = dirItems.map(async itemName => {
    try {
      return await getSingleLibdef(itemName, npmDefsDirPath, validating);
    } catch (e) {
      errors.push(e);
    }
  });

  const settled = await P.all(proms);
  if (errors.length) {
    throw errors;
  }
  return [].concat(...settled).filter(Boolean);
}

export async function getNpmLibDefVersionHash(
  repoDirPath: string,
  libDef: NpmLibDef,
): Promise<string> {
  const latestCommitHash = await findLatestFileCommitHash(
    repoDirPath,
    path.relative(repoDirPath, libDef.path),
  );
  return (
    `${latestCommitHash.substr(0, 10)}/` +
    (libDef.scope === null ? '' : `${libDef.scope}/`) +
    `${libDef.name}_${libDef.version}/` +
    `flow_${flowVersionToSemver(libDef.flowVersion)}`
  );
}

export function getScopedPackageName(libDef: NpmLibDef): string {
  return (libDef.scope === null ? '' : `${libDef.scope}/`) + `${libDef.name}`;
}

export {
  extractLibDefsFromNpmPkgDir as _extractLibDefsFromNpmPkgDir,
  parsePkgNameVer as _parsePkgNameVer,
  validateVersionNumPart as _validateVersionNumPart,
  validateVersionPart as _validateVersionPart,
};
