// @flow

import Git from "nodegit";
import semver from "semver";

import {mkdirp} from "./fileUtils.js";
import {fs, path, os} from "./node.js";
import {emptyVersion, copyVersion, versionToString} from "./semver.js";
import type {Version} from "./semver.js";

const P = Promise;

export type LibDef = {
  pkgName: string,
  pkgVersion: Version,
  pkgVersionStr: string,
  flowVersion: Version,
  flowVersionStr: string,
  path: string,
  testFilePaths: Array<string>,
};

const CACHE_DIR = path.join(os.homedir(), '.flow-typed');
const CACHE_REPO_DIR = path.join(CACHE_DIR, 'repo');
const GIT_REPO_DIR = path.join(__dirname, '..', '..', '..');

const REMOTE_REPO_URL = 'http://github.com/flowtype/flow-typed.git';
const LAST_UPDATED_FILE = path.join(CACHE_DIR, 'lastUpdated');

async function cloneCacheRepo(verbose?: VerboseOutput) {
  await mkdirp(CACHE_REPO_DIR);
  try {
    await Git.Clone(REMOTE_REPO_URL, CACHE_REPO_DIR, {
      checkoutBranch: 'master'
    });
  } catch (e) {
    writeVerbose(verbose, 'ERROR: Unable to clone the local cache repo.');
    throw e;
  }
  await fs.writeFile(LAST_UPDATED_FILE, String(Date.now()));
}

const CACHE_REPO_GIT_DIR = path.join(CACHE_REPO_DIR, '.git');
async function rebaseCacheRepo(verbose?: VerboseOutput) {
  if (await fs.exists(CACHE_REPO_DIR) && await fs.exists(CACHE_REPO_GIT_DIR)) {
    const repo = await Git.Repository.open(CACHE_REPO_DIR);
    await repo.checkoutBranch('master');
    try {
      await repo.fetch('origin');
      await repo.rebaseBranches('master', 'origin/master');
    } catch (e) {
      writeVerbose(
        verbose,
        'ERROR: Unable to rebase the local cache repo. ' + e.message
      );
      return false;
    }
    await fs.writeFile(LAST_UPDATED_FILE, String(Date.now()));
    return true;
  } else {
    await cloneCacheRepo(verbose);
    return true;
  }
}

/**
 * Utility wrapper for ensureCacheRepo with an update expiry of 0 hours.
 */
async function updateCacheRepo(verbose?: VerboseOutput) {
  return await ensureCacheRepo(verbose, 0);
}

/**
 * Ensure that the CACHE_REPO_DIR exists and is recently rebased.
 * (else: create/rebase it)
 */
const CACHE_REPO_EXPIRY = 1000 * 3600 * 24 * 5; // 5 days
async function ensureCacheRepo(verbose?: VerboseOutput, cacheRepoExpiry: number = CACHE_REPO_EXPIRY) {
  if (!await fs.exists(CACHE_REPO_DIR) || !await fs.exists(CACHE_REPO_GIT_DIR)) {
    writeVerbose(
      verbose,
      ' * flow-typed cache not found, fetching from GitHub...',
      false
    );
    await cloneCacheRepo(verbose);
    writeVerbose(verbose, 'done.');
  } else {
    let lastUpdated = 0;
    if (await fs.exists(LAST_UPDATED_FILE)) {
      // If the LAST_UPDATED_FILE has anything other than just a number in it,
      // just assume we need to update.
      const lastUpdatedRaw = await fs.readFile(LAST_UPDATED_FILE);
      const lastUpdatedNum = parseInt(lastUpdatedRaw, 10);
      if (String(lastUpdatedNum) === String(lastUpdatedRaw)) {
        lastUpdated = lastUpdatedNum;
      }
    }

    if ((lastUpdated + cacheRepoExpiry) < Date.now()) {
      writeVerbose(verbose, ' * flow-typed cache is old, rebasing...', false);
      const rebaseSuccessful = await rebaseCacheRepo(verbose);
      if (rebaseSuccessful) {
        writeVerbose(verbose, 'done.');
      } else {
        writeVerbose(
          verbose,
          '\nNOTE: Unable to rebase local cache! If you don\'t currently ' +
          'have internet connectivity, no worries -- we\'ll update the local ' +
          'cache the next time you do.\n'
        );
      }
    }
  }
}
// Exported for tests -- since we really want this part well-tested.
export {
  CACHE_REPO_DIR as _CACHE_REPO_DIR,
  CACHE_REPO_EXPIRY as _CACHE_REPO_EXPIRY,
  CACHE_REPO_GIT_DIR as _CACHE_REPO_GIT_DIR,
  ensureCacheRepo as _ensureCacheRepo,
  updateCacheRepo,
  LAST_UPDATED_FILE as _LAST_UPDATED_FILE,
};

/**
 * Given a 'definitions/npm' dir, return a list of LibDefs that it contains.
 */
export async function getLibDefs(
  defsDir: string,
  validationErrs?: VErrors,
) {
  const libDefs: Array<LibDef> = [];
  const defsDirItems = await fs.readdir(defsDir);
  await P.all(defsDirItems.map(async (item) => {
    if (item === '.cli-metadata.json') {
      return;
    }
    const itemPath = path.join(defsDir, item);
    const itemStat = await fs.stat(itemPath);

    if (itemStat.isDirectory()) {
      const parsedDirItem = parseRepoDirItem(itemPath, validationErrs);
      (await parseLibDefsFromPkgDir(
        parsedDirItem,
        itemPath,
        validationErrs
      )).forEach(libDef => libDefs.push(libDef));
    } else {
      const error =
        `Expected only directories in the 'definitions/npm' directory!`;
      validationError(itemPath, error, validationErrs);
    }
  }));
  return libDefs;
};

/**
 * Given the path to a flow directory within a package directory
 * (i.e. definitions/npm/pkgDir/flow_v0.24.0/), parse the flow directory name
 * into a Version.
 */
const FLOW_VER = 'v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)';
const FLOW_DIR_NAME_RE = new RegExp(
  `^flow_(all|(([><]?=)?${FLOW_VER}(_([><]?=)${FLOW_VER})?))$`
);
function parsePkgFlowDirVersion(pkgFlowDirPath, validationErrs): Version {
  const pkgFlowDirName = path.basename(pkgFlowDirPath);

  const matches = pkgFlowDirName.match(FLOW_DIR_NAME_RE);
  if (matches == null) {
    const repoPath = path.resolve(pkgFlowDirPath, '..', '..', '..');
    const pkgFlowDirContext = path.relative(repoPath, pkgFlowDirPath);
    const error =
      `Malformed flow-version directory name! Expected the name to be ` +
      `formatted as 'flow_all' or ` +
      `'flow_(>=|<=)?v<VERSION>' or ` +
      `'flow_(>=|<=)?v<VERSION>_(>=|<=)v<VERSION>' (for a range).`;
    validationError(pkgFlowDirContext, error, validationErrs);
    return emptyVersion();
  }

  let upperBound;
  let [
    _1, isAll, _2, range, major, minor, patch,
    _3, upRange, upMajor, upMinor, upPatch
  ] = matches;

  if (isAll === 'all') {
    range = undefined;
    major = 'x';
    minor = 'x';
    patch = 'x';
  } else {
    range = validateVersionRange(range, pkgFlowDirPath, validationErrs);
    major =
      validateVersionNumPart(major, "major", pkgFlowDirPath, validationErrs);
    minor =
      validateVersionPart(minor, "minor", pkgFlowDirPath, validationErrs);
    patch =
      validateVersionPart(patch, "patch", pkgFlowDirPath, validationErrs);

    if (upMajor) {
      upRange = validateVersionRange(upRange, pkgFlowDirPath, validationErrs);
      upMajor =
        validateVersionNumPart(upMajor, "major", pkgFlowDirPath, validationErrs);
      upMinor =
        validateVersionPart(upMinor, "minor", pkgFlowDirPath, validationErrs);
      upPatch =
        validateVersionPart(upPatch, "patch", pkgFlowDirPath, validationErrs);
      upperBound = {
        range: upRange,
        major: upMajor,
        minor: upMinor,
        patch: upPatch,
      };
    }
  }

  return {range, major, minor, patch, upperBound};
}

/**
 * Given a parsed package name and version and a path to the package directory
 * on disk, scan the directory and generate a list of LibDefs for each
 * flow-versioned definition file.
 */
async function parseLibDefsFromPkgDir(
  {pkgName, pkgVersion},
  pkgDirPath,
  validationErrs
): Promise<Array<LibDef>> {
  const repoPath = path.relative(pkgDirPath, '..');
  const pkgVersionStr = versionToString(pkgVersion);
  const pkgDirItems = await fs.readdir(pkgDirPath);

  const commonTestFiles = [];
  const flowDirs = [];
  pkgDirItems.forEach(pkgDirItem => {
    const pkgDirItemPath = path.join(pkgDirPath, pkgDirItem);
    const pkgDirItemContext = path.relative(repoPath, pkgDirItemPath);

    const pkgDirItemStat = fs.statSync(pkgDirItemPath);
    if (pkgDirItemStat.isFile()) {
      if (path.extname(pkgDirItem) === '.swp') {
        return;
      }

      const isValidTestFile = validateTestFile(
        pkgDirItemPath,
        pkgDirItemContext,
        validationErrs
      );

      if (isValidTestFile) {
        commonTestFiles.push(pkgDirItemPath);
      }
    } else if (pkgDirItemStat.isDirectory()) {
      flowDirs.push([
        pkgDirItemPath,
        parsePkgFlowDirVersion(pkgDirItemPath, validationErrs)
      ]);
    } else {
      const error = 'Unexpected directory item';
      validationError(pkgDirItemContext, error, validationErrs);
    }
  });

  if (flowDirs.length === 0) {
    validationError(pkgDirPath, 'No libdef files found!', validationErrs);
  }

  const libDefs = [];
  await P.all(flowDirs.map(async ([flowDirPath, flowVersion]) => {
    const testFilePaths = [].concat(commonTestFiles);
    const libDefFileName = `${pkgName}_${pkgVersionStr}.js`;
    let libDefFilePath;
    (await fs.readdir(flowDirPath)).forEach(flowDirItem => {
      const flowDirItemPath = path.join(flowDirPath, flowDirItem);
      const flowDirItemContext = path.relative(repoPath, flowDirItemPath);
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

        const isValidTestFile = validateTestFile(
          flowDirItemPath,
          flowDirItemContext,
          validationErrs
        );

        if (isValidTestFile) {
          testFilePaths.push(flowDirItemPath);
        }
      } else {
        const error = 'Unexpected directory item';
        validationError(flowDirItemContext, error, validationErrs);
      }
    });

    if (libDefFilePath == null) {
      libDefFilePath = path.join(flowDirPath, libDefFileName);
      if (pkgName !== 'ERROR') {
        const error = 'No libdef file found!';
        validationError(flowDirPath, error, validationErrs);
      }
      return;
    }

    libDefs.push({
      pkgName,
      pkgVersion,
      pkgVersionStr,
      flowVersion,
      flowVersionStr: versionToString(flowVersion),
      path: libDefFilePath,
      testFilePaths,
    });
  }));
  return libDefs;
}

/**
 * Given the path to a directory item in the 'definitions' directory, parse the
 * directory's name into a package name and version.
 */
const REPO_DIR_ITEM_NAME_RE = /^(.*)_v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)$/;
function parseRepoDirItem(dirItemPath, validationErrs) {
  const dirItem = path.basename(dirItemPath);
  const itemMatches = dirItem.match(REPO_DIR_ITEM_NAME_RE);
  if (itemMatches == null) {
    const error =
      `'${dirItem}' is a malformed definitions/npm/ directory name! ` +
      `Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>`;
    validationError(dirItem, error, validationErrs);
    const pkgName = 'ERROR';
    const pkgVersion = emptyVersion();
    return {pkgName, pkgVersion};
  }

  let [_, pkgName, major, minor, patch] = itemMatches;
  major =
    validateVersionNumPart(major, "major", dirItemPath, validationErrs);
  minor =
    validateVersionPart(minor, "minor", dirItemPath, validationErrs);
  patch =
    validateVersionPart(patch, "patch", dirItemPath, validationErrs);

  return {pkgName, pkgVersion: {major, minor, patch}};
}

/**
 * Given a path to an assumed test file, ensure that it is named as expected.
 */
const TEST_FILE_NAME_RE = /^test_.*\.js$/;
function validateTestFile(testFilePath, context, validationErrs) {
  const testFileName = path.basename(testFilePath);
  if (!TEST_FILE_NAME_RE.test(testFileName)) {
    const error =
      "Malformed test file name! Test files must be formatted as test_(.*).js";
    validationError(context, error, validationErrs);
    return false;
  }
  return true;
}

/**
 * Given a number-only part of a version string (i.e. the `major` part), parse
 * the string into a number.
 */
function validateVersionNumPart(part, partName, context, validationErrs?) {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    const error =
      `'${context}': Invalid ${partName} number: '${part}'. Expected a number.`;
    validationError(context, error, validationErrs);
  }
  return num;
}

/**
 * Given a number-or-wildcard part of a version string (i.e. a `minor` or
 * `patch` part), parse the string into either a number or 'x'.
 */
function validateVersionPart(part, partName, context, validationErrs?) {
  if (part === "x") {
    return part;
  }
  return validateVersionNumPart(part, partName, context, validationErrs);
}

/**
 * Given a range-part of a version string (i.e. `>=`/`<=`), parse into a range
 * string. This basically just asserts that the range part is valid.
 */
function validateVersionRange(range, context, validationErrs?) {
  switch (range) {
    case undefined:
    case '>=':
    case '<=':
      return range;
    default:
      const error = `Invalid range: '${range}'. Expected '>=' or '<='.`;
      validationError(context, error, validationErrs);
      return '<=';
  }
}

/**
 * Helper function to extract the error-list from the validationErrs map, append
 * to it, then set it back in the map.
 */
function validationError(errKey, errMsg, validationErrs) {
  if (validationErrs) {
    const errors = validationErrs.get(errKey) || [];
    errors.push(errMsg);
    validationErrs.set(errKey, errors);
  } else {
    throw new Error(`${errKey}: ${errMsg}`);
  }
}

/**
 * Given a path to a 'definitions' dir, assert that the currently-running
 * version of the CLI is compatible with the repo.
 */
async function verifyCLIVersion(defsDirPath) {
  const metadataFilePath = path.join(defsDirPath, '.cli-metadata.json');
  const metadata = JSON.parse(String(await fs.readFile(metadataFilePath)));
  if (!metadata.compatibleCLIRange) {
    throw new Error(
      `Unable to find the 'compatibleCLIRange' property in ` +
      `${metadataFilePath}. You might need to update to a newer version of ` +
      `the Flow CLI.`
    );
  }
  const minCLIVersion = metadata.compatibleCLIRange;
  const thisCLIVersion = require('../../package.json').version;
  if (!semver.satisfies(thisCLIVersion, minCLIVersion)) {
    throw new Error(
      `Please upgrade your CLI version! This CLI is version ` +
      `${thisCLIVersion}, but the latest flow-typed definitions are only ` +
      `compatible with flow-typed@${minCLIVersion}`
    );
  }
}

/**
 * Helper function to write verbose output only when an output stream was
 * provided.
 */
type VerboseOutput = stream$Writable | tty$WriteStream;
function writeVerbose(stream, msg, writeNewline = true) {
  if (stream != null) {
    stream.write(msg + (writeNewline ? '\n' : ''));
  }
}

/**
 * Get a list of LibDefs from the local repo.
 *
 * Note that this is mainly only useful while working on the flow-typed repo
 * itself. It is useless when running the npm-install CLI.
 */
type VErrors = Map<string, Array<string>>;
const GIT_REPO_DEFS_DIR = path.join(GIT_REPO_DIR, 'definitions', 'npm');
export async function getLocalLibDefs(validationErrs?: VErrors) {
  await verifyCLIVersion(path.join(GIT_REPO_DIR, 'definitions'));
  return getLibDefs(GIT_REPO_DEFS_DIR, validationErrs);
};

/**
 * Get a list of LibDefs from the flow-typed cache repo checkout.
 *
 * If the repo checkout does not exist or is out of date, it will be
 * created/updated automatically first.
 */
const CACHE_REPO_DEFS_DIR = path.join(CACHE_REPO_DIR, 'definitions', 'npm');
export async function getCacheLibDefs(
  verbose?: VerboseOutput = process.stdout,
  validationErrs?: VErrors,
) {
  await ensureCacheRepo(verbose);
  await verifyCLIVersion(path.join(CACHE_REPO_DIR, 'definitions'));
  return getLibDefs(CACHE_REPO_DEFS_DIR, validationErrs);
};

export async function getCacheLibDefVersion(libDef: LibDef) {
  await ensureCacheRepo();
  await verifyCLIVersion(path.join(CACHE_REPO_DIR, 'definitions'));
  const repo = await Git.Repository.open(CACHE_REPO_DIR);
  const revWalk = repo.createRevWalk();
  revWalk.pushHead();
  const histEntries = await revWalk.fileHistoryWalk(
    path.relative(CACHE_REPO_DIR, libDef.path),
    100000
  );
  if (histEntries.length === 0) {
    throw new Error(
      `Unable to find version information for `+
      `'${libDef.pkgName}_${libDef.pkgVersionStr}/` +
      `flow_${libDef.flowVersionStr}'!`
    );
  }
  return (
    `${histEntries[0].commit.sha().substr(0, 10)}/` +
    `${libDef.pkgName}_${libDef.pkgVersionStr}/` +
    `flow_${libDef.flowVersionStr}`
  );
};

/**
 * Filter a given list of LibDefs down using a specified filter.
 */
type LibDefFilter =
  | {type: 'fuzzy', flowVersion?: Version, term: string}
  // | {type: 'exact', flowVersion?: Version, pkgName: string, pkgVersion: Version}
  | {type: 'exact', flowVersion?: Version, libDef: LibDef}
  | {type: 'exact-name', flowVersion?: Version, term: string}
;
export function filterLibDefs(
  defs: Array<LibDef>,
  filter: LibDefFilter,
): Array<LibDef> {
  return defs.filter(def => {
    let filterMatch = false;
    switch (filter.type) {
      case 'exact':
        filterMatch = (
          def.pkgName.toLowerCase() === filter.libDef.pkgName.toLowerCase()
          && semver.satisfies(filter.libDef.pkgVersionStr, def.pkgVersionStr)
        );
        break;

      case 'exact-name':
        filterMatch = (
          def.pkgName.toLowerCase() === filter.term.toLowerCase()
        );
        break;

      case 'fuzzy':
        filterMatch = (
          def.pkgName.toLowerCase().indexOf(filter.term.toLowerCase()) !== -1
        );
        break;

      default:
        throw new Error(
          `'${filter.type}' is an unexpected filter type! This should never ` +
          `happen!`
        );
    }

    if (!filterMatch) {
      return false;
    }

    const filterFlowVer = filter.flowVersion;
    if (filterFlowVer) {
      const filterFlowVerStr = versionToString(filterFlowVer);
      const defUpperFlow = def.flowVersion.upperBound;
      if (defUpperFlow) {
        const defLowerFlow = copyVersion(def.flowVersion);
        defLowerFlow.upperBound = undefined;
        return (
          semver.satisfies(filterFlowVerStr, versionToString(defLowerFlow))
          && semver.satisfies(filterFlowVerStr, versionToString(defUpperFlow))
        );
      } else {
        return semver.satisfies(filterFlowVerStr, def.flowVersionStr);
      }
    }

    return true;
  }).sort((a, b) => {
    const aZeroed = a.pkgVersionStr.replace(/x/g, '0');
    const bZeroed = b.pkgVersionStr.replace(/x/g, '0');
    return semver.lt(aZeroed, bZeroed) ? -1 : 1;
  });
};
