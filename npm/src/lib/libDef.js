// @flow

import * as semver from "semver";
import request from "request";

import {dirNameToVersionedName} from "./definitions.js";
import {gitHubClient} from "./github.js";
import {versionToString} from "./semver.js";

import type {Version} from "./semver.js";

export type LibDef = {
  pkgName: string,
  pkgVersion: Version,
  pkgVersionStr: string,
  pkgNameVersionStr: string,
};

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


async function _getAllShallowLibDefs(): Promise<Map<string, Array<ShallowGHLibDef>>> {
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

    const versionedName = dirNameToVersionedName(item.name);
    const libDefs = libDefsMap.get(versionedName.name) || [];
    libDefs.push({
      gitTreeSha: item.sha,
      libDef: {
        pkgName: versionedName.name,
        pkgVersion: versionedName.version,
        pkgVersionStr: versionToString(versionedName.version),
        pkgNameVersionStr: item.name
      }
    });
    libDefsMap.set(versionedName.name, libDefs);
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
export async function getAllShallowLibDefs(
  ignoreCache?: boolean = false
): Promise<Map<string, Array<ShallowGHLibDef>>> {
  if (_libdefs == null) {
    _libdefs = await _getAllShallowLibDefs()
  }
  return _libdefs
}
