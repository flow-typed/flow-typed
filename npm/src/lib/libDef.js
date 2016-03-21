// @flow

import * as semver from "semver";
import request from "request";

import {gitHubClient} from "./github.js";
import {fs, path} from "./node.js";
import {versionToString} from "./semver.js";

import type {Version} from "./semver.js";

const P = Promise;

const LOCAL_DEFINITIONS_DIR =
  path.join(__dirname, '..', '..', '..', 'definitions');

export type LibDef = {
  pkgName: string,
  pkgVersion: Version,
  pkgVersionStr: string,
};

export type LibDefFlowVersion = {
  libDef: LibDef,
  flowVersion: Version,
  flowVersionStr: string,
  libDefPath: string,
  testFiles: Array<string>,
};

function _getLibDefPath(libDef: LibDef): string {
  return path.join(
    LOCAL_DEFINITIONS_DIR,
    `${libDef.pkgName}-${libDef.pkgVersionStr}`
  );
}

const LIBDEF_DIR_NAME_RE = /^(.*)-v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)$/;
function _parseLibDefDirName(libDefDirName, validationErrors?): LibDef {
  const itemMatches = libDefDirName.match(LIBDEF_DIR_NAME_RE);
  if (itemMatches == null) {
    const error =
      `'${libDefDirName}' is a malformed definitions/ directory name! ` +
      `Expected the name to be formatted as <PKGNAME>-v<MAJOR>.<MINOR>.<PATCH>`;

    if (validationErrors) {
      const errors = validationErrors.get(libDefDirName) || [];
      errors.push(error);
      validationErrors.set(libDefDirName, errors);
      return {
        pkgName: '',
        pkgVersion: {major: 'x', minor: 'x', patch: 'x'},
        pkgVersionStr: '',
      };
    } else {
      throw new Error(error);
    }
  }

  let [_, pkgName, major, minor, patch] = itemMatches;
  major = _validateVersionNumPart(major, "major", libDefDirName, validationErrors);
  minor = _validateVersionPart(minor, "minor", libDefDirName, validationErrors);
  patch = _validateVersionPart(patch, "patch", libDefDirName, validationErrors);

  const pkgVersion = {major, minor, patch};

  return {
    pkgName: itemMatches[1],
    pkgVersion: pkgVersion,
    pkgVersionStr: versionToString(pkgVersion),
  };
}

const TEST_FILE_NAME_RE = /^test-.*\.js$/;
function _validateTestFile(testFilePath, testFileContext, validationErrors) {
  const testFileName = path.basename(testFilePath);
  if (!TEST_FILE_NAME_RE.test(testFileName)) {
    const error =
      `'${testFileContext}' is a malformed test file name! Expected the name ` +
      `to be formatted as <PKGNAME>-v<MAJOR>.<MINOR>.<PATCH>.js`;
    if (validationErrors) {
      const errors = validationErrors.get(testFilePath) || [];
      errors.push(error);
      validationErrors.set(testFilePath, errors);
    } else {
      throw new Error(error);
    }
    return false;
  } else {
    return true;
  }
}

function _validateVersionNumPart(part, partName, context, validationErrors?) {
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    const error =
      `'${context}': Invalid ${partName} number: '${part}'. Expected a number.`;
    if (validationErrors) {
      const errors = validationErrors.get(context) || [];
      errors.push(error);
      validationErrors.set(context, errors);
      return 0;
    } else {
      throw new Error(error);
    }
  }
  return num;
}

function _validateVersionPart(part, partName, context, validationErrors?) {
  if (part === "x") {
    return part;
  }
  return _validateVersionNumPart(part, partName, context, validationErrors);
}

function _validateVersionRange(range, context, validationErrors?) {
  switch (range) {
    case '>=':
    case '<=':
    case '=':
      return range;
    default:
      const error =
        `'${context}': Invalid range: '${range}'. Expected '>=', '<=', or '='.`;
      if (validationErrors) {
        const errors = validationErrors.get(context) || [];
        errors.push(error);
        validationErrors.set(context, errors);
      } else {
        throw new Error(error);
      }
  }
}

export async function getLocalLibDefs(
  validationErrors?: Map<string, Array<string>>
): Promise<Array<LibDef>> {
  const libDefs: Array<LibDef> = [];
  const localDirItems = await fs.readdir(LOCAL_DEFINITIONS_DIR);
  await P.all(localDirItems.map(async (item) => {
    if (item === '.cli-metadata.json') {
      return;
    }
    libDefs.push(_parseLibDefDirName(item, validationErrors));
  }));
  return libDefs;
};

const FLOW_DIR_NAME_RE = /^flow-(all|([><]?=)?v([0-9]+)\.([0-9]+|x)\.([0-9]+|x))$/;
export async function getLocalLibDefFlowVersions(
  libDefs: Array<LibDef>,
  validationErrors?: Map<string, Array<string>>
): Promise<Array<LibDefFlowVersion>> {
  const libDefFlowVersions = [];
  await P.all(libDefs.map(async (libDef) => {
    const libDefPath = _getLibDefPath(libDef);
    const localDirItems = await fs.readdir(libDefPath);
    const flowVersions: Array<LibDefFlowVersion> = [];
    const libDefSharedTests = [];
    await P.all(localDirItems.map(async (localDirItem) => {
      const itemPath = path.join(libDefPath, localDirItem);
      const itemContext = itemPath.substr(LOCAL_DEFINITIONS_DIR.length + 1);
      if (fs.statSync(itemPath).isFile()) {
        if (_validateTestFile(itemPath, itemContext, validationErrors)) {
          libDefSharedTests.push(itemPath);
        }
        return;
      }

      const matches = localDirItem.match(FLOW_DIR_NAME_RE);
      if (matches == null) {
        const error =
          `'${itemContext}' is a malformed flow-version directory name! ` +
          `Expected the name to be formatted as 'flow-all' or ` +
          `'flow-(>=|<=)?v<MAJOR>.<MINOR>.<PATCH>'`;

        if (validationErrors) {
          const errors = validationErrors.get(itemPath) || [];
          errors.push(error);
          validationErrors.set(itemPath, errors);
          return;
        } else {
          throw new Error(error);
        }
      }

      let [_1, _2, range, major, minor, patch] = matches;
      range = _validateVersionRange(range, itemPath, validationErrors);
      major = _validateVersionNumPart(major, "major", itemPath, validationErrors);
      minor = _validateVersionPart(minor, "minor", itemPath, validationErrors);
      patch = _validateVersionPart(patch, "patch", itemPath, validationErrors);

      const flowVersion = {range, major, minor, patch};
      const libDefFileName =
        libDef.pkgName + '-' + libDef.pkgVersionStr + '.js';

      const flowVersionTests = [];
      const flowVersionDirItems = await fs.readdir(itemPath);
      await P.all(flowVersionDirItems.map(async (flowVerDirItem) => {
        if (flowVerDirItem === libDefFileName) {
          return;
        }

        const flowVerDirItemPath = path.join(itemPath, flowVerDirItem);
        const isTestFile = _validateTestFile(
          flowVerDirItemPath,
          path.join(itemContext, flowVerDirItem),
          validationErrors
        );
        if (isTestFile) {
          flowVersionTests.push(flowVerDirItemPath);
        }
      }));

      flowVersions.push({
        libDef,
        flowVersion,
        flowVersionStr: versionToString(flowVersion),
        libDefPath: path.join(itemPath, libDefFileName),
        testFiles: flowVersionTests,
      });
    }));

    flowVersions.forEach(flowVer => {
      if (libDefSharedTests.length > 0) {
        flowVer.testFiles = libDefSharedTests.concat(flowVer.testFiles);
      }
      libDefFlowVersions.push(flowVer);
    });
  }));
  return libDefFlowVersions;
}

/**
 * A "shallow" LibDef is one that only has name and version info (but no URL).
 *
 * Note that the notion of a "Shallow LibDef" is an implementation detail and
 * should probably never be exposed in public APIs -- only `LibDef`.
 *
 * We structure this separately from a LibDef2 with a URL because it is much
 * less efficient to fetch the URL with the initial list of all libdef-ed
 * packages in flow-typed (mostly because of the REST structure of GitHub's
 * API -- which requires a subsequent request for each package to explore it's
 * subtree). GraphQL FTW!
 */
export type ShallowGHLibDef = {
  gitTreeSha: string,
  libDef: LibDef,
};

export type GHLibDef = ShallowGHLibDef & {url: string};

/**
 * Calls out to the `/definitions/.cli-metadata.json` file on GitHub and
 * verifies that the local version of the CLI is still supported.
 */
const CLI_METADATA_URL =
  'https://raw.githubusercontent.com/flowtype/flow-typed/master/definitions/' +
  '.cli-metadata.json';
async function _verifyCLIVersion(definitionsDirContent) {
  const cliMetaDataJSON = await new Promise((res, rej) => {
    request({
      url: CLI_METADATA_URL,
      headers: {
        "User-Agent": "flow-typed CLI (github.com/flowtype/flow-typed"
      },
    }, (error, response, body) => {
      if (error) {
        rej(error);
      } else if (response.statusCode !== 200) {
        rej(new Error(
          `Non-200 response code when fetching CLI metadata!: ` +
          `${response.statusCode}`
        ));
      } else {
        res(body);
      }
    });
  });

  let cliMetaData;
  try {
    cliMetaData = JSON.parse(cliMetaDataJSON);
  } catch (e) {
    e.message =
      `${e.message}\n\n Unable to parse the CLI metadata! Please open an ` +
      `issue on https://github.com/flowtype/flow-typed/ and report this!`;
    throw e;
  }

  const pkgJsonData = require('../../package.json');
  if (!semver.satisfies(pkgJsonData.version, cliMetaData.minimumCLIVersion)) {
    throw new Error(
      "This `flow-typed` CLI is out of date! Please upgrade past version " +
      cliMetaData.minimumCLIVersion
    );
  }
}

async function _getShallowGHLibDefs(): Promise<Map<string, Array<ShallowGHLibDef>>> {
  const content: Array<Object> = await new Promise((res, rej) => {
    gitHubClient().repos.getContent({
      user: 'flowtype',
      repo: 'flow-typed',
      path: '/definitions',
    }, (err, result) => { if (err) { rej(err); } else { res(result); } });
  });
  await _verifyCLIVersion(content);

  const libDefsMap = new Map();
  content.forEach(item => {
    if (item.name === '.cli-metadata.json') { return; }

    const libDef = _parseLibDefDirName(item.name);
    const pkgLibDefs = libDefsMap.get(libDef.pkgName) || [];
    pkgLibDefs.push({
      gitTreeSha: item.sha,
      libDef: {
        pkgName: libDef.pkgName,
        pkgVersion: libDef.pkgVersion,
        pkgVersionStr: libDef.pkgVersionStr,
        pkgNameVersionStr: item.name
      }
    });
    libDefsMap.set(libDef.pkgName, pkgLibDefs);
  });
  return libDefsMap;
}

/**
 * Memoizes the operation of retrieving all package library definition info and
 * organizing it.
 *
 * Note that this initial fetch only contains Package/PackageVersion info. It
 * doesn't include FlowVersion info -- which must be fetched separately for each
 * package libdef.
 */
let _libdefs = null;
export async function getShallowGHLibDefs(
  ignoreCache?: boolean = false
): Promise<Map<string, Array<ShallowGHLibDef>>> {
  if (_libdefs == null) {
    _libdefs = await _getShallowGHLibDefs()
  }
  return _libdefs
}
