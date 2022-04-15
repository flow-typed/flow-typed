// @flow
import {
  ensureCacheRepo,
  getCacheRepoDir,
  verifyCLIVersion,
  CACHE_REPO_EXPIRY,
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
  type Version,
} from '../semver';

import semver from 'semver';

// import got from 'got';

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
  // Remove eslint error after `environments.es5` change
  // eslint-disable-next-line no-unused-vars
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

  /**
   * TODO:
   * The following block is commented out until `environments.es5` has been moved to
   * somewhere else such as environments
   */
  // if (validating) {
  //   const fullPkgName = `${scope === null ? '' : scope + '/'}${pkgName}`;
  //   await _npmExists(fullPkgName)
  //     .then()
  //     .catch(error => {
  //       if (error.HTTPError && error.HTTPError.response.statusCode === 404) {
  //         // Some times NPM returns 404 even though the package exists.
  //         // Try to avoid false negatives by retrying
  //         return new Promise((resolve, reject) =>
  //           setTimeout(() => {
  //             _npmExists(fullPkgName)
  //               .then(resolve)
  //               .catch(reject);
  //           }, 1000),
  //         );
  //       }
  //     })
  //     .then()
  //     .catch(error => {
  //       // Only fail on 404, not on timeout
  //       if (error.HTTPError && error.HTTPError.statusCode === 404) {
  //         throw new ValidationError(`Package does not exist on npm!`);
  //       }
  //     });
  // }

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

export async function getCacheNpmLibDefs(
  cacheExpiry: number,
  skipCache: boolean = false,
): Promise<Array<NpmLibDef>> {
  if (!skipCache) {
    await ensureCacheRepo(cacheExpiry);
  }
  await verifyCLIVersion();
  return await getNpmLibDefs(path.join(getCacheRepoDir(), 'definitions'));
}

const PKG_NAMEVER_RE = /^(.*)_v\^?([0-9]+)\.([0-9]+|x)\.([0-9]+|x)(-.*)?$/;
const PKG_GIT_RE = /^([\w\-]+)@([\w\.]+):([\w\-]+)\/([\w\-]+)(?:\.git)$/;
function parsePkgNameVer(
  pkgNameVer: string,
): {|
  pkgName: string,
  pkgVersion: Version,
|} {
  const pkgNameVerMatches = pkgNameVer.match(PKG_NAMEVER_RE);
  const pkgNameGitMatches = pkgNameVer.match(PKG_GIT_RE);

  if (pkgNameGitMatches != null) {
    return {
      pkgName: pkgNameGitMatches[4],
      pkgVersion: {major: 0, minor: 0, patch: 0, prerel: ''},
    };
  }

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

export function pkgVersionMatch(
  pkgSemverRaw: string,
  libDefSemverRaw: string,
): boolean {
  // The package version should be treated as a semver implicitly prefixed by
  // `^` or `~`. Depending on whether or not the minor value is defined.
  // i.e.: "foo_v2.2.x" is the same range as "~2.2.x"
  //        and "foo_v2.x.x" is the same range as "^2.x.x"
  // UNLESS it is prefixed by the equals character (i.e. "foo_=v2.2.x")
  const libDefSemver = (() => {
    const versionSplit = libDefSemverRaw.split('.');
    if (libDefSemverRaw[0] !== '=' && libDefSemverRaw[0] !== '^') {
      if (versionSplit[1] !== 'x') {
        return '~' + libDefSemverRaw;
      }
      return '^' + libDefSemverRaw;
    }

    return libDefSemverRaw;
  })();

  const pkgSemver = semver.coerce(pkgSemverRaw)?.version ?? pkgSemverRaw;

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
      'Invalid npm libdef version! It appears to be a non-contiguous range.',
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

// TODO Unused until `environments.es5`
// async function _npmExists(pkgName: string): Promise<Function> {
//   const pkgUrl = `https://api.npms.io/v2/package/${encodeURIComponent(
//     pkgName,
//   )}`;
//   return got(pkgUrl, {method: 'HEAD'});
// }

export async function findNpmLibDef(
  pkgName: string,
  pkgVersion: string,
  flowVersion: FlowVersion,
  useCacheUntil: number = CACHE_REPO_EXPIRY,
  skipCache?: boolean = false,
  extLibDefs?: Array<NpmLibDef>,
): Promise<null | NpmLibDef> {
  const libDefs =
    extLibDefs ?? (await getCacheNpmLibDefs(useCacheUntil, skipCache));
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

type ParsedSignedCodeVersion =
  | {|
      kind: 'LibDef',
      libDef: $Diff<NpmLibDef, {|path: string|}>,
    |}
  | {|kind: 'Stub', name: string|};

export function parseSignedCodeVersion(
  signedCodeVer: string,
): ?ParsedSignedCodeVersion {
  if (signedCodeVer === null) {
    return null;
  }
  if (signedCodeVer.startsWith('<<STUB>>/')) {
    return {
      kind: 'Stub',
      name: signedCodeVer.substring('<<STUB>>/'.length),
    };
  }
  const matches = signedCodeVer.match(
    /([^\/]+)\/(@[^\/]+\/)?([^\/]+)\/([^\/]+)/,
  );
  if (matches == null) {
    return null;
  }

  const scope =
    matches[2] == null ? null : matches[2].substr(0, matches[2].length - 1);

  const nameVer = matches[3];
  if (nameVer === null) {
    return null;
  }

  const pkgNameVer = parsePkgNameVer(nameVer);
  if (pkgNameVer === null) {
    return null;
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

  return {
    kind: 'LibDef',
    libDef: {
      scope,
      name: pkgName,
      version: versionToString(pkgVersion),
      flowVersion: flowVer,
      testFilePaths: [],
    },
  };
}

export async function getInstalledNpmLibDef(
  flowProjectRootDir: string,
  fullFilePath: string,
): Promise<?[string, InstalledNpmLibDef]> {
  const terseFilePath = path.relative(flowProjectRootDir, fullFilePath);
  const fileStat = await fs.stat(fullFilePath);
  if (fileStat.isFile()) {
    const fileContent = await fs.readFile(fullFilePath, 'utf8');
    if (verifySignedCode(fileContent)) {
      const signedCodeVer = getSignedCodeVersion(fileContent);
      if (signedCodeVer === null) {
        return null;
      }
      const parsed = parseSignedCodeVersion(signedCodeVer);
      if (!parsed) {
        return null;
      }

      return [
        terseFilePath,
        parsed.kind === 'LibDef'
          ? {
              kind: 'LibDef',
              libDef: {
                ...parsed.libDef,
                path: terseFilePath,
              },
            }
          : parsed,
      ];
    }
  }
}

export async function getInstalledNpmLibDefs(
  flowProjectRootDir: string,
  libdefDir?: string,
): Promise<Map<string, InstalledNpmLibDef>> {
  const typedefDir = libdefDir || 'flow-typed';
  const libDefDirPath = path.join(flowProjectRootDir, typedefDir, 'npm');
  if (!(await fs.exists(libDefDirPath))) return new Map();
  const filesInNpmDir = await getFilesInDir(libDefDirPath, true);
  return new Map(
    (
      await P.all(
        [...filesInNpmDir].map(fileName =>
          getInstalledNpmLibDef(
            flowProjectRootDir,
            path.join(libDefDirPath, fileName),
          ),
        ),
      )
    ).filter(Boolean),
  );
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
        scopeDirItems
          .filter(item => item !== '.DS_Store')
          .map(async itemName => {
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
    // If a user opens definitions dir in finder it will create `.DS_Store`
    // which will need to be excluded while parsing
    if (itemName === '.DS_Store') return;

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
