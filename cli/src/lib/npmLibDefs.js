// @flow

import type {
  FlowVersion,
} from "./flowVersion";
import {
  disjointVersionsAll as disjointFlowVersionsAll,
  parseDirString as parseFlowDirString,
} from "./flowVersion";

import {
  fs,
  path,
} from "./node";

import {
  versionToString,
} from "./semver";

import type {
  ValidationErrors as VErrors
} from "./validationErrors";
import {
  validationError,
} from "./validationErrors";

const P = Promise;

export type NpmLibDef = {|
  scope: null | string,
  name: string,
  version: string,
  flowVersion: FlowVersion,
  path: string,
  testFilePaths: Array<string>,
|};

const TEST_FILE_NAME_RE = /^test_.*\.js$/;

/**
 * Given a number-only part of a version string (i.e. the `major` part), parse
 * the string into a number.
 */
function validateVersionNumPart(
  part: string,
  partName: string,
  context: string,
  validationErrs?: VErrors
): number {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    const error =
      `Invalid ${partName} number: '${part}'. Expected a number.`;
    validationError(context, error, validationErrs);
    return -1;
  }
  return num;
}

/**
 * Given a number-or-wildcard part of a version string (i.e. a `minor` or
 * `patch` part), parse the string into either a number or 'x'.
 */
function validateVersionPart(
  part: string,
  partName: string,
  context: string,
  validationErrs?: VErrors
): number | 'x' {
  if (part === "x") {
    return part;
  }
  return validateVersionNumPart(part, partName, context, validationErrs);
}

const PKG_NAMEVER_RE = /^(.*)_v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)(-.*)?$/;
function parsePkgNameVer(
  pkgNameVer: string,
  errContext: string,
  validationErrors?: VErrors,
) {
  const pkgNameVerMatches = pkgNameVer.match(PKG_NAMEVER_RE);
  if (pkgNameVerMatches == null) {
    const error =
      `Malformed npm package name! ` +
      `Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>`;
    validationError(pkgNameVer, error, validationErrors);
    return null;
  }

  let [_, pkgName, major, minor, patch, prerel] = pkgNameVerMatches;
  major =
    validateVersionNumPart(major, "major", errContext, validationErrors);
  minor =
    validateVersionPart(minor, "minor", errContext, validationErrors);
  patch =
    validateVersionPart(patch, "patch", errContext, validationErrors);

  if (prerel != null) {
    prerel = prerel.substr(1);
  }

  return {pkgName, pkgVersion: {major, minor, patch, prerel}};
}

async function extractLibDefsFromNpmPkgDir(
  pkgDirPath: string,
  scope: null | string,
  pkgNameVer: string,
  validationErrors?: VErrors,
): Promise<Array<NpmLibDef>> {
  const errContext = `npm/${scope === null ? '' : scope + '/'}${pkgNameVer}`;
  const parsedPkgNameVer = parsePkgNameVer(
    pkgNameVer,
    errContext,
    validationErrors,
  );
  if (parsedPkgNameVer === null) {
    return [];
  }
  const {pkgName, pkgVersion} = parsedPkgNameVer;

  const npmDefsDirPath =
    scope === null
    ? path.resolve(pkgDirPath, '..')
    : path.resolve(pkgDirPath, '..', '..');

  const pkgVersionStr = versionToString(pkgVersion);
  const libDefFileName = `${pkgName}_${pkgVersionStr}.js`;
  const pkgDirItems = await fs.readdir(pkgDirPath);

  const commonTestFiles = [];
  const parsedFlowDirs: Array<[string, FlowVersion]> = [];
  pkgDirItems.forEach(pkgDirItem => {
    const pkgDirItemPath = path.join(pkgDirPath, pkgDirItem);
    const pkgDirItemContext = path.relative(npmDefsDirPath, pkgDirItemPath);

    const pkgDirItemStat = fs.statSync(pkgDirItemPath);
    if (pkgDirItemStat.isFile()) {
      if (path.extname(pkgDirItem) === ".swp") {
        return;
      }

      const isValidTestFile = TEST_FILE_NAME_RE.test(pkgDirItem);

      if (isValidTestFile) {
        commonTestFiles.push(pkgDirItemPath);
        return;
      }

      const error =
        `Unexpected file name. This directory can only contain test files ` +
        `or a libdef file named ${'`' + libDefFileName + '`'}.`;
      validationError(pkgDirItemContext, error, validationErrors);
    } else if (pkgDirItemStat.isDirectory()) {
      const errCount = validationErrors == null ? 0 : validationErrors.size;
      const parsedFlowDir = parseFlowDirString(pkgDirItem, validationErrors);
      // If parsing a flow directory incurred a validation error, don't keep it
      // around in our list of parsed flow directories
      // TODO: Make the parseFlowDirString API return `null` when there's an
      //       error
      if (validationErrors != null && errCount !== validationErrors.size) {
        return;
      }
      parsedFlowDirs.push([
        pkgDirItemPath,
        parsedFlowDir,
      ]);
    } else {
      const error = "Unexpected directory item";
      validationError(pkgDirItemContext, error, validationErrors);
    }
  });

  if (!disjointFlowVersionsAll(parsedFlowDirs.map(([_, ver]) => ver))) {
    validationError(errContext, "Flow versions not disjoint!", validationErrors);
  }

  if (parsedFlowDirs.length === 0) {
    validationError(errContext, 'No libdef files found!', validationErrors);
  }

  const libDefs = [];
  await P.all(parsedFlowDirs.map(async ([flowDirPath, flowVersion]) => {
    const testFilePaths = [].concat(commonTestFiles);
    let libDefFilePath: null | string = null;
    (await fs.readdir(flowDirPath)).forEach(flowDirItem => {
      const flowDirItemPath = path.join(flowDirPath, flowDirItem);
      const flowDirItemContext = path.relative(npmDefsDirPath, flowDirItemPath);
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

        const error =
          `Unexpected file. This directory can only contain test files ` +
          `or a libdef file named ${'`' + libDefFileName + '`'}.`;
        validationError(flowDirItemContext, error, validationErrors);
      } else {
        const error =
          `Unexpected sub-directory. This directory can only contain test ` +
          `files or a libdef file named ${'`' + libDefFileName + '`'}.`;
        validationError(flowDirItemContext, error, validationErrors);
      }
    });

    if (libDefFilePath === null) {
      libDefFilePath = path.join(flowDirPath, libDefFileName);
      const error =
        `No libdef file found. Looking for a file named ${libDefFileName}`;
      validationError(flowDirPath, error, validationErrors);
      return;
    }

    libDefs.push({
      scope,
      name: pkgName,
      version: pkgVersionStr,
      flowVersion,
      path: libDefFilePath,
      testFilePaths,
    });
  }));

  return libDefs;
}

export async function getNpmLibDefs(
  defsDirPath: string,
  validationErrors?: VErrors,
): Promise<Array<NpmLibDef>> {
  const npmLibDefs: Array<NpmLibDef> = [];

  const npmDefsDirPath = path.join(defsDirPath, 'npm');
  const dirItems = await fs.readdir(npmDefsDirPath);
  await P.all(dirItems.map(async (itemName) => {
    const itemPath = path.join(npmDefsDirPath, itemName);
    const itemStat = await fs.stat(itemPath);
    if (itemStat.isDirectory()) {
      if (itemName[0] === '@') {
        // This must be a scoped npm package, so go one directory deeper
        const scope = itemName;
        const scopeDirItems = await fs.readdir(itemPath);
        await P.all(scopeDirItems.map(async (itemName) => {
          const itemPath = path.join(npmDefsDirPath, scope, itemName);
          const itemStat = await fs.stat(itemPath);
          if (itemStat.isDirectory()) {
            const libDefs = await extractLibDefsFromNpmPkgDir(
              itemPath,
              scope,
              itemName,
              validationErrors,
            );
            libDefs.forEach(libDef => npmLibDefs.push(libDef));
          } else {
            const error =
              `Expected only sub-directories in this dir!`;
            validationError(itemPath, error, validationErrors);
          }
        }));
      } else {
        // itemPath must be a package dir
        const libDefs = await extractLibDefsFromNpmPkgDir(
          itemPath,
          null, // No scope
          itemName,
          validationErrors,
        );
        libDefs.forEach(libDef => npmLibDefs.push(libDef));
      }
    } else {
      const error =
        `Expected only directoris to be present in this directory.`;
      validationError(itemPath, error, validationErrors);
    }
  }));

  return npmLibDefs;
};

export {
  extractLibDefsFromNpmPkgDir as _extractLibDefsFromNpmPkgDir,
  parsePkgNameVer as _parsePkgNameVer,
  validateVersionNumPart as _validateVersionNumPart,
  validateVersionPart as _validateVersionPart,
};
