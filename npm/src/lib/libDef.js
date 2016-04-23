// @flow

import * as semver from "semver";
import request from "request";
import Rx from "rx-lite";
import _ from 'lodash/fp';
import table from 'table';

import {gitHubClient} from "./github";
import {fs, path} from "./node";
import {versionToString, stringToVersion, emptyVersion, compareRanges}
  from "./semver";

import type {Version} from "./semver";

const P = Promise;

const LOCAL_DEFINITIONS_DIR =
  path.join(__dirname, '..', '..', '..', 'definitions');

export type LibDef = {
  pkgName: string,
  pkgVersion: Version,
  pkgVersionStr: string,
  pkgNameVersionStr: string,
};

export type LibDefWithFlow = {
  flowVersion: Version,
  flowVersionStr: string
} & LibDef

type LocalLibDefFlowVersion = {
  libDef: LibDef,
  flowVersion: Version,
  flowVersionStr: string,
  libDefPath: string,
  testFiles: Array<string>,
};

function _getLibDefPath(libDef: LibDef): string {
  return path.join(
    LOCAL_DEFINITIONS_DIR,
    `${libDef.pkgName}_${libDef.pkgVersionStr}`
  );
}

const LIBDEF_DIR_NAME_RE = /^(.*)_v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)$/;
function _parseLibDefDirName(libDefDirName, validationErrors?): LibDef {
  const itemMatches = libDefDirName.match(LIBDEF_DIR_NAME_RE);
  if (itemMatches == null) {
    const error =
      `'${libDefDirName}' is a malformed definitions/ directory name! ` +
      `Expected the name to be formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>`;

    if (validationErrors) {
      const errors = validationErrors.get(libDefDirName) || [];
      errors.push(error);
      validationErrors.set(libDefDirName, errors);
      return {
        pkgName: '',
        pkgVersion: {major: 'x', minor: 'x', patch: 'x'},
        pkgVersionStr: '',
        pkgNameVersionStr: ''
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

const TEST_FILE_NAME_RE = /^test_.*\.js$/;
function _validateTestFile(testFilePath, testFileContext, validationErrors) {
  const testFileName = path.basename(testFilePath);
  if (!TEST_FILE_NAME_RE.test(testFileName)) {
    const error =
      `'${testFileContext}' is a malformed test file name! Expected the name ` +
      `to be formatted as test_(.*).js`;
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

const FLOW_VER = 'v([0-9]+)\.([0-9]+|x)\.([0-9]+|x)';
const FLOW_DIR_NAME_RE = new RegExp(
  `^flow_(all|([><]?=)?${FLOW_VER}(_([><]?=)${FLOW_VER})?)$`
);
export async function getLocalLibDefFlowVersions(
  libDefs: Array<LibDef>,
  validationErrors?: Map<string, Array<string>>
): Promise<Array<LocalLibDefFlowVersion>> {
  const libDefFlowVersions = [];
  await P.all(libDefs.map(async (libDef) => {
    const libDefPath = _getLibDefPath(libDef);
    if (!(await fs.exists(libDefPath))) {
      const error = `'${libDefPath}' is not a local libdef path!`;
      if (validationErrors) {
        const errors = validationErrors.get(libDefPath) || [];
        errors.push(error);
        validationErrors.set(libDefPath, errors);
        return;
      } else {
        throw new Error(error);
      }
    }
    const localDirItems = await fs.readdir(libDefPath);
    const flowVersions: Array<LocalLibDefFlowVersion> = [];
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
          `Expected the name to be formatted as 'flow_all' or ` +
          `'flow_(>=|<=)?v<MAJOR>.<MINOR>.<PATCH>' or `;
          `'flow_(>=|<=)?v<MAJOR>.<MINOR>.<PATCH>_(>=|<=)v<MAJOR>.<MINOR>.` +
          `<PATCH> for a range'`;

        if (validationErrors) {
          const errors = validationErrors.get(itemPath) || [];
          errors.push(error);
          validationErrors.set(itemPath, errors);
          return;
        } else {
          throw new Error(error);
        }
      }

      let [
        _1, _2, range, major, minor, patch,
        _3, upRange, upMajor, upMinor, upPatch
      ] = matches;
      range = _validateVersionRange(range, itemPath, validationErrors);
      major = _validateVersionNumPart(major, "major", itemPath, validationErrors);
      minor = _validateVersionPart(minor, "minor", itemPath, validationErrors);
      patch = _validateVersionPart(patch, "patch", itemPath, validationErrors);

      let upperBound;
      if (upMajor) {
        upRange = _validateVersionRange(upRange, itemPath, validationErrors);
        upMajor = _validateVersionNumPart(upMajor, "major", itemPath, validationErrors);
        upMinor = _validateVersionPart(upMinor, "minor", itemPath, validationErrors);
        upPatch = _validateVersionPart(upPatch, "patch", itemPath, validationErrors);
        upperBound = {
          range: upRange,
          major: upMajor,
          minor: upMinor,
          patch: upPatch,
        };
      }

      // TODO: Validate that the lower bound and upper bound actually make sense
      //       together.
      //       (i.e. check for `>=v0.1.0_>=v0.2.0`, `>=v0.5.0_<=v0.5.0`, etc)

      const flowVersion = {
        range,
        major,
        minor,
        patch,
        upperBound,
      };
      const libDefFileName =
        libDef.pkgName + '_' + libDef.pkgVersionStr + '.js';

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

const identity = i => i

function getGHFlowVersionsForDef(def: ShallowGHLibDef): Promise<Array<Version>> {
  const getContent = Rx.Observable.fromCallback(gitHubClient().repos.getContent)
  const notNull = i => i != null
  return getContent({
    user: 'flowtype',
    repo: 'flow-typed',
    path: `/definitions/${def.libDef.pkgNameVersionStr}`
  })
  .flatMap(identity)
  .filter(notNull)
  .flatMap(identity)
  .map(i => i.name)
  .filter(name => name.indexOf('flow_') === 0)
  .map((name:string): Version => {
    let matches = name.match(/flow_(.*)/)
    if (matches && matches.length > 1) {
      const withoutPrefix = matches[1]
      return stringToVersion(withoutPrefix)
    } else {
      return emptyVersion()
    }
  })
  .toArray()
  .toPromise()
}

export async function getGHLibsAndFlowVersions(
  ignoreCache?: boolean = false
): Promise<Array<LibDefWithFlow>> {
  await _verifyCLIVersion()
  return await Rx.Observable
  .fromPromise(getShallowGHLibDefs(ignoreCache))
  .flatMap(defsMap => {
    return defsMap.values()
  })
  .flatMap(identity)
  .flatMap(async (def: ShallowGHLibDef) => {
    const flowVersions = await getGHFlowVersionsForDef(def)
    return flowVersions.map(v => ({
      ...def.libDef,
      flowVersionStr: versionToString(v),
      flowVersion: v
    }))
  })
  .flatMap(identity)
  .toArray()
  .toPromise()
}

export function filterDefs(
  term: string,
  defs: Array<LibDefWithFlow>,
  flowVersion?: string,
  libVersion?: string
): Array<LibDefWithFlow> {
  const filtered = defs.filter(def => {
    const containsTerm = def.pkgName.toLowerCase()
      .indexOf(term.toLowerCase()) !== -1;
    const matchesFlowVersion = flowVersion
      ? semver.satisfies(flowVersion, def.flowVersionStr)
      : true;
    const matchesLibVersion = (libVersion && libVersion !== "auto")
      ? semver.satisfies(libVersion, def.pkgVersionStr)
      : true;
    return !!containsTerm && matchesFlowVersion && matchesLibVersion;
  });

  if (libVersion !== "auto") {
    return filtered
  }

  // At this point our list can contain libdefs for different libraries
  // , and different versions for each of those different libraries.
  // But we want to select only the highest libdef version for each lib.
  return _.flow(
    _.groupBy('pgkName'),
    _.values,
    _.map((defList: Array<LibDef>) => {
      const sorted = defList.sort(compareRanges)
      return sorted[sorted.length - 1]
    })
  )(filtered)
}

export function formatDefTable(defs: Array<LibDefWithFlow>): string {
  const formatted = [['Name', 'Package Version', 'Flow Version']]
  .concat(defs.map(def => {
    return [def.pkgName, def.pkgVersionStr, def.flowVersionStr];
  }));
  if (formatted.length === 1) {
    return "No definitions found, sorry!";
  } else {
    return "\nFound definitions:\n" + table(formatted)
  }
}
